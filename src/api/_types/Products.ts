export type ProductCategory
  = "beauty"
    | "fragrances"
    | "furniture"
    | "groceries"
    | "home-decoration"
    | "kitchen-accessories"
    | "laptops"
    | "mens-shirts"
    | "mens-shoes"
    | "mens-watches"
    | "mobile-accessories"
    | "motorcycle"
    | "skin-care"
    | "smartphones"
    | "sports-accessories"
    | "sunglasses"
    | "tablets"
    | "tops"
    | "vehicle"
    | "womens-bags"
    | "womens-dresses"
    | "womens-jewellery"
    | "womens-shoes"
    | "womens-watches";

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: ProductCategory;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  thumbnail: string;
  images: string[];
  dimensions: Dimensions;
};
