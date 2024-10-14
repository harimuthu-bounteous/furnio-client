import { Product } from "../types/Product";

export const product: Product = {
  ProductId: "12345",
  Name: "Asgaard sofa",
  Price: 250000,
  Reviews: 5,
  Rating: 4.5,
  Description:
    "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  SKU: "SS001",
  Category: "Sofas",
  Tags: ["Sofa", "Chair", "Home", "Shop"],
  ShareLinks: {
    Facebook: "/shop",
    Linkedin: "/shop",
    Twitter: "/shop",
  },
  Sizes: ["L", "XL", "XS"],
  Colors: [
    {
      Name: "Purple",
      Value: "#6a5acd",
    },
    {
      Name: "Black",
      Value: "#000000",
    },
    {
      Name: "Gold",
      Value: "#ffd700",
    },
  ],
  ThumbNailImages: [
    {
      Alt: "Sofa1",
      ImageUrl: "/assets/images/Sofa1.png",
    },
    {
      Alt: "Sofa2",
      ImageUrl: "/assets/images/Sofa2.png",
    },
    {
      Alt: "Sofa3",
      ImageUrl: "/assets/images/Sofa3.png",
    },
    {
      Alt: "Sofa4",
      ImageUrl: "/assets/images/Sofa4.png",
    },
    {
      Alt: "Sofa5",
      ImageUrl: "/assets/images/Sofa5.png",
    },
  ],
  DescriptionImages: [
    {
      Alt: "Sofa6",
      ImageUrl: "/assets/images/Sofa6.png",
    },
    {
      Alt: "Sofa7",
      ImageUrl: "/assets/images/Sofa7.png",
    },
  ],
};
