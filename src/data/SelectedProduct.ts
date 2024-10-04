import { SelectedProduct } from "../types/SelectedProduct";

export const selectedProduct: SelectedProduct = {
  name: "Asgaard sofa",
  price: 250000,
  reviews: 5,
  rating: 4.5,
  description:
    "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  sku: "SS001",
  category: "Sofas",
  tags: ["Sofa", "Chair", "Home", "Shop"],
  shareLinks: {
    facebook: "/shop",
    linkedin: "/shop",
    twitter: "/shop",
  },
  sizes: ["L", "XL", "XS"],
  colors: [
    {
      name: "Purple",
      value: "#6a5acd",
    },
    {
      name: "Black",
      value: "#000000",
    },
    {
      name: "Gold",
      value: "#ffd700",
    },
  ],
  thumbNailImages: [
    "/assets/images/Sofa1.png",
    "/assets/images/Sofa2.png",
    "/assets/images/Sofa3.png",
    "/assets/images/Sofa4.png",
    "/assets/images/Sofa5.png",
  ],
};
