"use client"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products-page" },
  { name: "Product", href: "/cart" },
  { name: "Pages", href: "/single-product-page" },
  { name: "About", href: "/about-us" },
];

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white">
      {/* Top Bar */}
      <div className="w-full bg-[#272343]">
        <div className="flex flex-wrap gap-10 justify-between items-center mx-auto px-10 py-3 max-w-[1200px] text-sm text-white md:px-16 lg:px-24">
          <div className="flex gap-2 items-center capitalize min-w-[200px]">
            <img
              loading="lazy"
              src="/check1.png"
              alt="Free shipping icon"
              className="object-contain w-4"
            />
            <span className="opacity-75">Free shipping on all orders over $50</span>
          </div>
          <div className="flex gap-6 items-center text-center opacity-75">
            <div className="flex gap-2 items-center">
              <img
                loading="lazy"
                src="/enggroup.png"
                alt="Language selector"
                className="object-contain w-4"
              />
              <span>Eng</span>
            </div>
            <span>Faqs</span>
            <div className="flex gap-2 items-center">
              <img
                loading="lazy"
                src="/alert-circle1.png"
                alt="Help icon"
                className="object-contain w-4"
              />
              <span>Need Help</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="w-full bg-gray-100">
        <div className="flex items-center justify-between mx-auto px-10 py-5 max-w-[1200px] md:px-16 lg:px-24">
          <div className="flex items-center text-2xl text-slate-800">
            <img
              loading="lazy"
              src="/comfortylogo.png"
              alt="Comforty logo"
              className="object-contain w-10"
            />
            <span>Comforty</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg">
            <div className="flex items-center gap-2 text-xs text-slate-800">
              <img
                loading="lazy"
                src="/cart.png"
                alt="Shopping cart icon"
                className="object-contain w-6"
              />
              <span>Cart</span>
            </div>
            <div className="w-5 h-5 bg-[#007580] text-white text-xs rounded-full flex justify-center items-center">
              2
            </div>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Bar (Main Menu) */}
      <div className="w-full bg-white shadow-sm">
        <div
          className={`flex flex-col md:flex-row gap-5 justify-between items-center mx-auto px-10 py-5 max-w-[1200px] md:px-16 lg:px-24 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <div className="flex flex-wrap gap-8 items-center text-[#636270]">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href= {item.href}
                className="hover:text-[#007580] active:text-[#007580]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[#636270]">Contact:</span>
            <span className="font-medium text-[#272343]">(808) 555-0111</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

