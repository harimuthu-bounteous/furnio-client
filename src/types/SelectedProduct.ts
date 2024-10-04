export interface SelectedProduct {
  name: string;
  price: number;
  reviews: number;
  rating: number;
  description: string;
  sku: string;
  category: string;
  tags: string[];
  shareLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
  sizes: string[];
  colors: {
    name: string;
    value: string;
  }[];
  thumbNailImages: string[];
}
