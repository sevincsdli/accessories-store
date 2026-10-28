import { useState } from "react";
import { Search, X } from "lucide-react";
import type { Product } from "../../types";
import { useDebounce } from "../../hooks/useDebounce";
import { formatCurrency } from "../../utils/formatters";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  if (!isOpen) return null;

  const searchResults = debouncedSearch.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          p.category.toLowerCase().includes(debouncedSearch.toLowerCase()),
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white shadow-2xl overflow-hidden border border-brand-beige">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-brand-beige flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-muted shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search accessories or categories..."
            aria-label="Search products"
            className="flex-1 bg-transparent text-sm text-brand-dark focus:outline-none placeholder:text-gray-400"
            autoFocus
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 text-brand-muted hover:text-brand-dark cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4">
          {!debouncedSearch.trim() ? (
            <p className="text-xs text-brand-muted text-center py-8">
              Enter the name of the product you're looking for...
            </p>
          ) : searchResults.length === 0 ? (
            <p className="text-xs text-brand-muted text-center py-8">
              No results found for "{debouncedSearch}".
            </p>
          ) : (
            <div className="space-y-3">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted block mb-2">
                Results ({searchResults.length})
              </span>
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-2 hover:bg-brand-light transition-colors cursor-pointer group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-14 object-cover rounded-xs bg-brand-beige/50"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs font-medium text-brand-dark group-hover:text-brand-accent transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-[10px] text-brand-muted uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-brand-dark">
                    {formatCurrency(product.price)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
