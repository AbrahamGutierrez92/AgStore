"use client";
import Image from "next/image";
import Link from "next/link";
import menuDot from "@/public/Menu-dot.svg";
import { use, useEffect, useState } from "react";
import { link } from "fs";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    dropdown: [
      { label: "Shop", href: "/UI-Components/Shop" },
      { label: "Details", href: "/UI-Components/Shop/9" },
      { label: "Cart", href: "/UI-Components/Pages/Cart" },
      { label: "Wishlist", href: "/UI-Components/Pages/Wishlist" },
      { label: "Checkout", href: "/UI-Components/Pages/Checkout" },
    ],
  },
  {
    label: "Blog",
    href: "/UI-Components/Blogs",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blogs/7" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "About Me", href: "/UI-Components/Pages/About" },
      { label: "Pricing Table", href: "/UI-Components/Pages/Pricing" },
      { label: "Gift Voucher", href: "/UI-Components/Pages/GiftVoucher" },
      { label: "FAQ", href: "/UI-Components/Pages/Faq" },
      { label: "Login", href: "/UI-Components/Pages/Login" },
      { label: "Registration", href: "/UI-Components/Pages/Registration" },
      { label: "Contact Us", href: "/UI-Components/Pages/Contact" },
    ],
  },
  { label: "Contact Us", href: "/UI-Components/Pages/Contact" },
];

const BottomNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const [isFixed, setIsFixed] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const updateCounts = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    setWishlistCount(wishlist.length);
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCounts();
  }, []);

  useEffect(() => {
    const handler = () => updateCounts();
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => updateCounts(), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
      [label]: !prev[label],
    }));
  };

  return (
    <div
      className={`w-full bg-white shadow-sm transition-all py-5 duration-500 ${
        isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""
      }`}
    >
      <div className="w-full flex items-center justify-between px-[8%] lg:px-[16%] text-gray-700">
        <Link
          href="/"
          className={`text-4xl lg:text-5xl font-bold Audiowide text-black hidden ${
            isFixed ? "lg:flex" : "hidden"
          }`}
        >
          AB<span className="text-(--second)">Store</span>
        </Link>

        {/* Menu Items  mobile*/}
        <Link
          href="/"
          className={`text-4xl lg:text-5xl font-bold Audiowide text-black block lg:hidden`}
        >
          AB<span className="text-(--second)">Store</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 menu-link relative z-40">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <Link
                  className="flex GolosText items-center gap-1"
                  href={link.href}
                >
                  {link.label} <Image src={menuDot} alt="Menu Dot" />
                </Link>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-2xl p-2 border border-gray-100 rounded-lg min-w-[170px]">
                  {link.dropdown?.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 px-4 rounded transition-all"
                    >
                      <div className="flex gap-1">
                        <Image src={menuDot} alt="Menu Dot" />
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                className="flex GolosText gap-2"
                key={link.label}
                href={link.href}
              >
                {link.label} <Image src={menuDot} alt="Menu Dot" />
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-5  lg:flex">
          <Link
            className="max-sm:hidden login-link border-b border-gray-400 GolosText font-semibold"
            href="/UI-Components/Pages/Login"
          >
            Login / Register
          </Link>

          <div className="flex items-center gap-6">
            <Link className="relative" href="/app/UI-Components/Pages/Wishlist">
              <i className="bi bi-balloon-heart text-3xl hover:text-red-400"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link className="relative" href="/app/UI-Components/Pages/Cart">
              <i className="bi bi-cart3 text-3xl "></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/** Mobile Menu Button */}

        <div className="lg:hidden flex items-center justify-between gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md mt-3 transition-all duration-500">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className="w-full text-left flex items-center justify-between py-4 px-6 GolosText"
                >
                  {link.label}
                  <i
                    className={`ri-arrow-${
                      openDropdowns[link.label] ? "up" : "down"
                    }-s-line`}
                  ></i>
                </button>
                {openDropdowns[link.label] && (
                  <div className="bg-gray-50">
                    {link.dropdown?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-3 px-8 border-b border-gray-200 GolosText"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block py-4 px-6 border-b border-gray-200 GolosText"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default BottomNav;
