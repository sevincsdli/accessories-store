import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastProvider";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { CartDrawer } from "./features/cart/components/CartDrawer";
import { MOCK_PRODUCTS } from "./data/mockProducts";
import { useProductFilter } from "./features/products/hooks/useProductFilter";
import { ProductFilterBar } from "./features/products/components/ProductFilterBar";
import { ProductGrid } from "./features/products/components/ProductGrid";
import { ProductDetailModal } from "./features/products/components/ProductDetailModal";
import { SearchModal } from "./components/common/SearchModal";
import { BrandStory } from "./features/home/components/BrandStory";
import { InstagramFeed } from "./features/home/components/InstagramFeed";
import { Button } from "./components/ui/Button";

// Pages
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { StoryPage } from "./pages/StoryPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ContactPage } from "./pages/ContactPage";
import { AuthPage } from "./pages/AuthPage";
import type { Product } from "./types";

function HomePageContent({
  onOpenSearch,
  onOpenDetail,
}: {
  onOpenSearch: () => void;
  onOpenDetail: (p: Product) => void;
}) {
  const navigate = useNavigate();
  const { filters, filteredProducts, setCategory, setSortBy } =
    useProductFilter(MOCK_PRODUCTS);

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-16">
      {/* Hero Banner Section */}
      <section className="relative bg-brand-light py-20 px-8 text-center rounded-2xl overflow-hidden luxury-fade-up transition-all duration-700 ease-out">
        <div className="max-w-xl mx-auto space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
            New Collection
          </span>
          <h1 className="text-3xl sm:text-5xl font-light tracking-widest uppercase text-brand-dark">
            Timeless Elegance
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            Handcrafted artisan jewelry pieces designed for everyday luxury.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <Button size="md" onClick={() => navigate("/shop")}>
              Explore Shop
            </Button>
            <Button size="md" variant="outline" onClick={onOpenSearch}>
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="luxury-fade-up transition-all duration-700 ease-out">
        <ProductFilterBar
          activeCategory={filters.category}
          activeSort={filters.sortBy}
          onSelectCategory={setCategory}
          onSelectSort={setSortBy}
          totalResults={filteredProducts.length}
        />
        <ProductGrid products={filteredProducts} onOpenDetail={onOpenDetail} />
      </section>

      <BrandStory />
      <InstagramFeed />
    </main>
  );
}

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <div className="min-h-screen bg-white text-brand-dark flex flex-col font-sans selection:bg-brand-accent selection:text-white">
            <Header onOpenSearch={() => setIsSearchOpen(true)} />
            <CartDrawer />
            <Routes>
              <Route
                path="/"
                element={
                  <HomePageContent
                    onOpenSearch={() => setIsSearchOpen(true)}
                    onOpenDetail={(p) => setSelectedProduct(p)}
                  />
                }
              />
              <Route
                path="/shop"
                element={
                  <ShopPage onOpenDetail={(p) => setSelectedProduct(p)} />
                }
              />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<AuthPage mode="login" />} />
              <Route path="/register" element={<AuthPage mode="register" />} />
            </Routes>
            <ProductDetailModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />

            <SearchModal
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              products={MOCK_PRODUCTS}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />

            <Footer />
          </div>
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
