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
    {
      alt: "Sofa1",
      image: "/assets/images/Sofa1.png",
    },
    {
      alt: "Sofa2",
      image: "/assets/images/Sofa2.png",
    },
    {
      alt: "Sofa3",
      image: "/assets/images/Sofa3.png",
    },
    {
      alt: "Sofa4",
      image: "/assets/images/Sofa4.png",
    },
    {
      alt: "Sofa5",
      image: "/assets/images/Sofa5.png",
    },
  ],
  descriptionImages: [
    {
      alt: "Sofa6",
      image: "/assets/images/Sofa6.png",
    },
    {
      alt: "Sofa7",
      image: "/assets/images/Sofa7.png",
    },
  ],
};
