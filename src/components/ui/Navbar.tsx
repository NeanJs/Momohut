"use client"
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl font-bold text-red-500 cursor-pointer">MomoHut</span>
      </Link>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li><Link href="/" className="hover:text-red-500">Home</Link></li>
        <li><Link href="/about" className="hover:text-red-500">About</Link></li>
        <li><Link href="/menu" className="hover:text-red-500">Menu</Link></li>
        {/* <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li> */}
        <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
      </ul>
      
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FiSearch className="text-xl cursor-pointer hover:text-red-500" />
        <FiShoppingCart className="text-xl cursor-pointer hover:text-red-500" />
      </div>
      
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl focus:outline-none">
          ☰
        </button>
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-500">About</Link></li>
            <li><Link href="/menu" className="hover:text-red-500">Menu</Link></li>
            {/* <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li> */}
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
