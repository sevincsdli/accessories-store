export type ProductCategory =
  | "necklaces"
  | "rings"
  | "earrings"
  | "bracelets"
  | "sets";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  description: string;
  details: string[];
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterOptions {
  category: ProductCategory | "all";
  minPrice: number;
  maxPrice: number;
  sortBy: "featured" | "price-low" | "price-high" | "newest";
  searchQuery: string;
  inStockOnly: boolean;
}

export type AsyncStatus = "idle" | "loading" | "success" | "error";
