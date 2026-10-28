import type { Product } from "../types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Minimalist Gold Layered Necklace",
    slug: "minimalist-gold-layered-necklace",
    price: 85,
    originalPrice: 110,
    category: "necklaces",
    description:
      "18k gold plated delicate layered chain necklace perfect for daily wear.",
    details: [
      "18k Gold Plated Brass",
      "Length: 40cm + 5cm extension",
      "Hypoallergenic & Nickel-free",
      "Handcrafted finish",
    ],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    ],
    isBestSeller: true,
    isNew: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 34,
  },
  {
    id: "2",
    name: "Pearl Accent Statement Ring",
    slug: "pearl-accent-statement-ring",
    price: 62,
    category: "rings",
    description:
      "Organic freshwater pearl embedded in an adjustable textured gold ring band.",
    details: [
      "Freshwater cultured pearl",
      "Adjustable band size (6-8)",
      "Tarnish resistant coating",
    ],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    ],
    isBestSeller: true,
    inStock: true,
    rating: 4.7,
    reviewsCount: 19,
  },
  {
    id: "3",
    name: "Textured Huggie Hoop Earrings",
    slug: "textured-huggie-hoop-earrings",
    price: 45,
    category: "earrings",
    description:
      "Chunky yet lightweight textured gold hoops designed for comfortable all-day wear.",
    details: [
      "Recycled Sterling Silver base",
      "18k Gold Vermeil",
      "Hinge closure",
    ],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800",
    ],
    isNew: true,
    inStock: true,
    rating: 4.8,
    reviewsCount: 12,
  },
  {
    id: "4",
    name: "Slim Chain Link Bracelet",
    slug: "slim-chain-link-bracelet",
    price: 55,
    category: "bracelets",
    description: "Classic link chain bracelet with a modern minimalist twist.",
    details: [
      "Stainless steel with gold PVD coating",
      "Waterproof & sweatproof",
      "Length: 17cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1611591475193-41e737e61a68?auto=format&fit=crop&q=80&w=800",
    ],
    inStock: true,
    rating: 4.6,
    reviewsCount: 8,
  },
];
