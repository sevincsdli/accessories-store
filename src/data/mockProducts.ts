import type { Product } from "../types";
import necklaceImage from "../assets/necklace.avif";
import ringImage from "../assets/ring.avif";
import earringsImage from "../assets/earrings.avif";
import braceletImage from "../assets/bracelet.avif";

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
    images: [necklaceImage, necklaceImage],
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
    images: [ringImage],
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
    images: [earringsImage],
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
    images: [braceletImage],
    inStock: true,
    rating: 4.6,
    reviewsCount: 8,
  },
];
