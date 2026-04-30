import React from 'react';
import { ShoppingCart, User, Heart, Search, Menu, Phone, Mail, ChevronDown, LayoutGrid } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-white py-2 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-emerald-400" /> +251 905 027 162</span>
            <span className="flex items-center gap-1"><Mail size={14} className="text-emerald-400" /> support@ethiomart.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Free Express Shipping on Orders $570+</span>
            <div className="flex items-center gap-3 ml-4 border-l border-gray-700 pl-4">
              <FaFacebook size={14} className="hover:text-emerald-400 cursor-pointer" />
              <FaTwitter size={14} className="hover:text-emerald-400 cursor-pointer" />
              <FaInstagram size={14} className="hover:text-emerald-400 cursor-pointer" />
               <a href="https://www.linkedin.com/in/geremew-atalay-a7280b259/"
                    target="_blank"
                    rel="noopener noreferrer">
                <FaLinkedin size={14} className="hover:text-emerald-400 cursor-pointer" />
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center gap-4 md:gap-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-emerald-500 p-2 rounded-lg">
            <ShoppingCart className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 hidden sm:block">
            Ethio<span className="text-emerald-500">mart</span>
          </span>
        </NavLink>

        {/* Search Bar - Hidden on mobile, shown as modal or input on desktop */}
        <div className="hidden md:flex flex-grow max-w-2xl relative">
          <input 
            type="text" 
            placeholder="Search for products, categories or brands..."
            className="w-full pl-4 pr-12 py-3 rounded-full bg-gray-50 border-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm outline-none"
          />
          <button className="absolute right-2 top-1.5 p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-emerald-500 relative transition-colors">
              <Heart size={24} />
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            <button className="p-2 text-slate-600 hover:text-emerald-500 relative transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
            </button>
          </div>
          <div className="hidden lg:flex flex-col items-start gap-0.5 border-l border-gray-200 pl-6">
            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Account</span>
            <button className="flex items-center gap-1 font-semibold text-slate-900 hover:text-emerald-500 transition-colors text-sm">
              Login / Sign Up
            </button>
          </div>
          <button className="md:hidden p-2 text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-50 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* All Categories Dropdown (Simplified) */}
            <button className="flex items-center gap-3 bg-emerald-500 text-white px-6 py-4 font-bold text-sm hover:bg-emerald-600 transition-colors rounded-t-lg min-w-[240px]">
              <LayoutGrid size={18} />
              All Categories
              <ChevronDown size={16} className="ml-auto" />
            </button>

            <ul className="flex items-center gap-8 ml-8 text-sm font-bold text-slate-700">
              <li><NavLink to="/" className={({isActive}) => cn("hover:text-emerald-500 transition-colors py-4 inline-block", isActive && "text-emerald-500")}>Home</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-emerald-500 transition-colors py-4 inline-block">Shop</NavLink></li>
              <li><NavLink to="/vendors" className="hover:text-emerald-500 transition-colors py-4 inline-block">Vendors</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-emerald-500 transition-colors py-4 inline-block">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-emerald-500 transition-colors py-4 inline-block">Contact</NavLink></li>
            </ul>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-500 cursor-pointer py-4 group">
             <span className="text-emerald-500 group-hover:scale-110 transition-transform">Get <span className="underline decoration-emerald-200 underline-offset-4">30% Off</span> Storewide!</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
