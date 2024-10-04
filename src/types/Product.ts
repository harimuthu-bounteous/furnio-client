export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  old_price?: string;
  discount?: string;
  image: string;
  label?: string;
}
