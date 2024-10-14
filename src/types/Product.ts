export interface Product {
  ProductId?: string;
  Name: string;
  Price: number;
  Reviews: number;
  Rating: number;
  Description: string;
  SKU: string;
  Category: string;
  Label?: "Discount" | "New";
  Discount?: number;
  Tags: string[];
  ShareLinks: {
    Facebook: string;
    Linkedin: string;
    Twitter: string;
  };
  Sizes: string[];
  Colors: {
    Name: string;
    Value: string;
  }[];
  ThumbNailImages: { ImageUrl: string; Alt: string }[];
  DescriptionImages: { ImageUrl: string; Alt: string }[];
}
