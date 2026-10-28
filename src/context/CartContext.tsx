/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useReducer, useEffect } from "react";
import type { Product, CartItem } from "../types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity?: number } }
  | { type: "REMOVE_FROM_CART"; payload: { productId: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: string; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" };

export interface CartContextType extends CartState {
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  totalPrice: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
}

const FREE_SHIPPING_THRESHOLD = 150;
const CART_STORAGE_KEY = "accessories_store_cart";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity = 1 } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id,
      );

      let updatedItems: CartItem[];
      if (existingIndex > -1) {
        updatedItems = state.items.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        updatedItems = [...state.items, { product, quantity }];
      }

      return { ...state, items: updatedItems, isOpen: true };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload.productId,
        ),
      };

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== productId),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item,
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };

    case "OPEN_CART":
      return { ...state, isOpen: true };

    case "CLOSE_CART":
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    { items: [], isOpen: false },
    (initialState) => {
      try {
        const localData = localStorage.getItem(CART_STORAGE_KEY);
        return localData
          ? { ...initialState, items: JSON.parse(localData) }
          : initialState;
      } catch {
        return initialState;
      }
    },
  );

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = state.items.reduce(
    (acc: number, item: CartItem) => acc + item.quantity,
    0,
  );
  const totalPrice = state.items.reduce(
    (acc: number, item: CartItem) => acc + item.product.price * item.quantity,
    0,
  );
  const freeShippingProgress = Math.min(
    100,
    (totalPrice / FREE_SHIPPING_THRESHOLD) * 100,
  );

  const value: CartContextType = {
    ...state,
    addToCart: (product, quantity) =>
      dispatch({ type: "ADD_TO_CART", payload: { product, quantity } }),
    removeFromCart: (productId) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: { productId } }),
    updateQuantity: (productId, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
    toggleCart: () => dispatch({ type: "TOGGLE_CART" }),
    openCart: () => dispatch({ type: "OPEN_CART" }),
    closeCart: () => dispatch({ type: "CLOSE_CART" }),
    totalItems,
    totalPrice,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    freeShippingProgress,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
