export interface SelectedProduct {
  ProductId: string;
  Name: string;
  Price: number;
  Reviews: number;
  Rating: number;
  Description: string;
  SKU: string;
  Category: string;
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
