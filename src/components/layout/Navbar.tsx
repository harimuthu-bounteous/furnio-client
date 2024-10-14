"use client";
import { FC, useState } from "react";
import { cn } from "@/src/utils/cn";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/FurniroIcon.png";
import Typography from "@/src/components/common/Typography";
import HeartIcon from "@/public/assets/icons/HeartIcon";
import AccountAlertIcon from "@/public/assets/icons/AccountAlertIcon";
import SearchIcon from "@/public/assets/icons/SearchIcon";
import ShoppingCartIcon from "@/public/assets/icons/ShoppingCartIcon";
import MenuIcon from "@/public/assets/icons/MenuIcon";
import CloseIcon from "@/public/assets/icons/CloseIcon";
import CartModal from "../common/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import { openCart } from "@/src/redux/slice/CartSlice";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-row items-center justify-between md:py-6 md:px-12 py-3 px-4">
        {/* Logo */}
        <Link href="/" className="flex flex-row items-center md:gap-2 gap-1">
          <Image src={Logo} alt="Logo" className="h-6 w-9" priority />
          <Typography
            variant="h2"
            className="md:text-3xl text-xl font-bold font-montserrat"
            value="Furniro"
          />
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center justify-center">
          <button onClick={toggleMenu}>
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>

        {/* Hyperlinks - hidden on mobile */}
        <div className="hidden md:flex flex-row gap-x-16 font-medium text-lg">
          <Link href="/" className="relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/shop" className="relative group">
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Icons - hidden on mobile */}
        <div className="hidden md:flex flex-row gap-8">
          <Link href="/shop">
            <AccountAlertIcon className="w-6 h-6" />
          </Link>
          <Link href="/shop">
            <SearchIcon className="stroke-black w-6 h-6" />
          </Link>
          <Link href="/shop">
            <HeartIcon className="stroke-black w-6 h-6" />
          </Link>
          <button
            onClick={() => {
              dispatch(openCart());
              console.log("Hello");
            }}
          >
            <ShoppingCartIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile - slide in/out */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[20rem] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 space-y-8">
          {/* Close button */}
          <button className="self-end" onClick={toggleMenu}>
            <CloseIcon />
          </button>

          {/* Hyperlinks */}
          <div className="flex flex-col space-y-4 font-medium text-lg">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/shop" onClick={toggleMenu}>
              Shop
            </Link>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex flex-row md:flex-col justify-evenly md:justify-normal md:gap-y-4">
            <Link href="/shop" onClick={toggleMenu}>
              <AccountAlertIcon className="w-6 h-6" />
            </Link>
            <Link href="/shop" onClick={toggleMenu}>
              <SearchIcon className="stroke-black w-6 h-6" />
            </Link>
            <Link href="/shop" onClick={toggleMenu}>
              <HeartIcon className="stroke-black w-6 h-6" />
            </Link>
            <Link href="/shop" onClick={toggleMenu}>
              <ShoppingCartIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop for closing sidebar when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {isCartOpen && <CartModal />}
    </>
  );
};

export default Navbar;
