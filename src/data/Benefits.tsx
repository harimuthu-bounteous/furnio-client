import CustomerSupportIcon from "@/public/assets/icons/CustomerSupportIcon";
import ShippingIcon from "@/public/assets/icons/ShippingIcon";
import TrophyIcon from "@/public/assets/icons/TrophyIcon";
import WarrantyIcon from "@/public/assets/icons/WarrantyIcon";

interface Benefit {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: 1,
    icon: <TrophyIcon />,
    title: "High Quality",
    description: "Crafted from top materials",
  },
  {
    id: 2,
    icon: <WarrantyIcon />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    id: 3,
    icon: <ShippingIcon />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    id: 4,
    icon: <CustomerSupportIcon />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];
