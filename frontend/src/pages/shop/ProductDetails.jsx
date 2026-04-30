import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";

import {
  Star,
  ShieldCheck,
  Truck,
  RefreshCcw,
  ShoppingCart,
  Heart,
  Share2,
  Plus,
  Minus,
  Check,} from "lucide-react";
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


import { useCart } from "../../context/CartContext";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-black">Product Not Found</h1>
        <button
          onClick={() => navigate("/shop")}
          className="mt-8 bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="bg-emerald-50 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span onClick={() => navigate("/")} className="cursor-pointer hover:text-emerald-500">
              Home
            </span>
            <span>/</span>
            <span onClick={() => navigate("/shop")} className="cursor-pointer hover:text-emerald-500">
              Shop
            </span>
            <span>/</span>
            <span className="text-emerald-500">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT IMAGES */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 p-12"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-50 rounded-2xl border hover:border-emerald-500 transition-all p-4 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt="thumb"
                  className="w-full h-full object-contain opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                {product.category}
              </span>

              <span className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                <Star size={14} className="fill-amber-400" />
                {product.rating}
                <span className="text-gray-300 font-medium">
                  ({product.reviews})
                </span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black italic">
              {product.name}
            </h1>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-emerald-500 italic">
                ${product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span className="text-xl text-gray-300 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-500 leading-relaxed">
              Premium {product.name} sourced from sustainable farms.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-2xl border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={20} />
                </button>

                <span className="font-black">{quantity}</span>

                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={20} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-emerald-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button className="p-4 border rounded-2xl">
                <Heart size={20} />
              </button>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, text: "Fast Delivery" },
                { icon: ShieldCheck, text: "Safe Payment" },
                { icon: RefreshCcw, text: "Easy Returns" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 p-4 rounded-2xl border"
                >
                  <item.icon size={18} className="text-emerald-500" />
                  <span className="text-[10px] font-black uppercase">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SHARE */}
          <div className="pt-8 border-t">
            <div className="flex gap-2">
              {[FaInstagram, FaFacebook, FaTwitter, FaLinkedin].map((Icon, i) => (
                <button key={i} className="p-2">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TABS (simplified) */}
      <div className="container mx-auto px-4 mt-24">
        <div className="flex gap-8 border-b mb-12">
          {["description", "info", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-4 font-bold uppercase text-sm",
                activeTab === tab ? "text-black" : "text-gray-400"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <p className="text-gray-500 leading-relaxed">
            Product description goes here...
          </p>
        )}
      </div>
    </div>
  );
};