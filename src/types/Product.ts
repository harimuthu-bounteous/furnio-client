export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  old_price?: number;
  discount?: number;
  image: string;
  label?: string;
}
