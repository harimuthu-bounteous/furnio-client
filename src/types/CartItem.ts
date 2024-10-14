import { Product } from "./Product";

export interface CartItem {
  ProductId: string;
  Product: Product;
  Size: string;
  Color: {
    Name: string;
    Value: string;
  };
  Quantity: number;
}
