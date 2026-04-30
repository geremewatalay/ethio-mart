import React from 'react';
import { ShoppingCart, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-lg text-white">
                <ShoppingCart size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white italic">
                Ethio<span className="text-emerald-500">mart</span>
              </span>
            </NavLink>
            <p className="text-sm leading-relaxed text-gray-400">
              Ethiomart is your one-stop shop for everything organic and sustainable. We partner with local farmers to bring fresh produce directly to your doorstep.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all text-gray-400">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Contact', 'My Account', 'Order Tracking', 'Wishlist', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <button className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Shop Categories</h4>
            <ul className="space-y-4 text-sm">
              {['Vegetables', 'Fresh Fruits', 'Dairy & Eggs', 'Beverages', 'Grocery', 'Meats'].map((link) => (
                <li key={link}>
                  <button className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0" size={18} />
                <span className="text-gray-400 leading-relaxed">
                  4 King George VI St, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-500 shrink-0" size={18} />
                <span className="text-gray-400">+251 905 027 162</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0" size={18} />
                <span className="text-gray-400">hello@ethiomart.com</span>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-slate-900 rounded-2xl border border-slate-800">
               <p className="text-xs font-bold text-white mb-2 uppercase tracking-widest">Install App</p>
               <div className="flex gap-2">
                 <div className="h-8 w-24 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold border border-slate-700 cursor-pointer hover:bg-slate-700">App Store</div>
                 <div className="h-8 w-24 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold border border-slate-700 cursor-pointer hover:bg-slate-700">Play Store</div>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 Ethiomart. All Rights Reserved. Developed with Geremew Atalay</p>
          <div className="flex items-center gap-4">
            <span className="bg-gray-800 px-2 py-1 rounded">VISA</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Mastercard</span>
            <span className="bg-gray-800 px-2 py-1 rounded">PayPal</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
