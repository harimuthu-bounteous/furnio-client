import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/FurniroIcon.png";
import Typography from "@/src/components/common/Typography";
import HeartIcon from "@/public/assets/icons/HeartIcon";
import AccountAlertIcon from "@/public/assets/icons/AccountAlertIcon";
import SearchIcon from "@/public/assets/icons/SearchIcon";
import ShoppingCartIcon from "@/public/assets/icons/ShoppingCartIcon";

const Navbar: FC = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-6 px-12">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src={Logo} alt="Logo" />
        <Typography variant="h2" className="text-3xl font-bold font-montserrat">
          Furniro
        </Typography>
      </div>
      <div className="flex flex-row gap-x-16 font-medium font-poppins text-lg">
        <Link href="/shop">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/shop">About</Link>
        <Link href="/shop">Contact</Link>
      </div>
      <div className="flex flex-row gap-8">
        <Link href="/shop">
          <AccountAlertIcon className="w-6 h-6" />
        </Link>
        <Link href="/shop">
          <SearchIcon className="stroke-black w-6 h-6" />
        </Link>
        <Link href="/shop">
          <HeartIcon className="stroke-black w-6 h-6" />
        </Link>
        <Link href="/shop">
          <ShoppingCartIcon className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
