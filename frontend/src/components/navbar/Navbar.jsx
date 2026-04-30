import React, { useState } from "react";
import {
  ShoppingCart,
  User,
  Heart,
  Search,
  Menu,
  Phone,
  Mail,
  ChevronDown,
  LayoutGrid,
  X,
} from "lucide-react";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useCart } from "../../context/CartContext"; 
import { AnimatePresence, motion } from "framer-motion"; 

export const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart(); // 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-white py-2 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} className="text-emerald-400" />
              +251 905 027 162
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} className="text-emerald-400" />
              support@ethiomart.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>Free Express Shipping on Orders $570+</span>

            <div className="flex items-center gap-3 ml-4 border-l border-gray-700 pl-4">
              <FaFacebook className="hover:text-emerald-400 cursor-pointer" />
              <FaTwitter className="hover:text-emerald-400 cursor-pointer" />
              <FaInstagram className="hover:text-emerald-400 cursor-pointer" />
              <a
                href="https://www.linkedin.com/in/geremew-atalay-a7280b259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-emerald-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center gap-4 md:gap-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-lg">
            <ShoppingCart className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold text-slate-900 hidden sm:block">
            Ethio<span className="text-emerald-500">mart</span>
          </span>
        </NavLink>

        {/* Search */}
        <div className="hidden md:flex flex-grow max-w-2xl relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-4 pr-12 py-3 rounded-full bg-gray-50 outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
          <button className="absolute right-2 top-1.5 p-2 bg-emerald-500 text-white rounded-full">
            <Search size={18} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Wishlist */}
          <button className="relative p-2 text-slate-600 hover:text-emerald-500">
            <Heart size={24} />
            <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)} // ✅ IMPORTANT
            className="relative p-2 text-slate-600 hover:text-emerald-500"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          </button>

          {/* Account */}
          <div className="hidden lg:flex flex-col pl-6 border-l border-gray-200">
            <span className="text-[10px] uppercase text-gray-400 font-bold">
              Account
            </span>
            <button className="text-sm font-semibold hover:text-emerald-500">
              Login / Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="border-t border-gray-50 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">

          <div className="flex items-center">
            {/* All Categories Dropdown */}
            <div className="relative group/cat">
              <button className="flex items-center gap-4 bg-emerald-500 text-white px-8 py-4 font-bold text-sm group-hover/cat:bg-emerald-600 transition-all rounded-t-2xl min-w-[260px] italic">
                <LayoutGrid size={20} />
                All Organic Categories
                <ChevronDown size={16} className="ml-auto group-hover/cat:rotate-180 transition-transform" />
              </button>
              
              {/* Simple  Dropdown */}
              <div className="absolute top-full left-0 w-full bg-white border border-gray-100 shadow-xl rounded-b-2xl opacity-0 translate-y-4 pointer-events-none group-hover/cat:opacity-100 group-hover/cat:translate-y-0 group-hover/cat:pointer-events-auto transition-all duration-300 z-10 p-4">
                 {['Fresh Vegetables', 'Organic Fruits', 'Dairy & Eggs', 'Bakery & Pastry', 'Organic Meats', 'Healthy Drinks'].map((cat, i) => (
                   <button key={i} className="w-full text-left px-4 py-2 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all">
                     {cat}
                   </button>
                 ))}
              </div>
            </div>
            <ul className="flex gap-8 ml-8 text-sm font-bold text-slate-700">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/vendors">Vendors</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="text-emerald-500 font-bold text-sm">
            🔥 30% Off Storewide!
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/">
                Home
              </NavLink>
              <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/shop">
                Shop
              </NavLink>
              <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/vendors">
                Vendors
              </NavLink>
              <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/blog">
                Blog
              </NavLink>
              <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/contact">
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};