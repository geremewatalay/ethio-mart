import React from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { cn } from "../../lib/utils";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      {/* IMAGE SECTION */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6">

        {/* TAG */}
        {product.tag && (
          <span
            className={cn(
              "absolute top-4 left-4 z-10 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white",
              product.tag === "Hot"
                ? "bg-orange-500"
                : product.tag === "New"
                ? "bg-emerald-500"
                : "bg-rose-500"
            )}
          >
            {product.tag}
          </span>
        )}

        {/* PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
        />

        {/* HOVER ACTIONS */}
        <div className="absolute top-4 -right-12 flex flex-col gap-2 transition-all duration-500 group-hover:right-4">
          <button className="rounded-full bg-white p-2.5 text-slate-600 shadow-lg transition-all hover:bg-emerald-500 hover:text-white">
            <Heart size={18} />
          </button>

          <button className="rounded-full bg-white p-2.5 text-slate-600 shadow-lg transition-all hover:bg-emerald-500 hover:text-white">
            <Eye size={18} />
          </button>
        </div>

        {/* ADD TO CART */}
        <button
          onClick={() => addToCart(product)}
          className="absolute left-4 right-4 -bottom-16 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-sm font-bold text-white transition-all duration-500 hover:bg-emerald-600 group-hover:bottom-4"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>

      {/* INFO SECTION */}
      <div className="p-6">

        {/* CATEGORY */}
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
          {product.category}
        </p>

        {/* PRODUCT NAME (LINKED) */}
        <NavLink to={`/product/${product.slug}`}>
          <h3 className="mb-2 line-clamp-2 text-base font-bold leading-tight text-slate-800 transition-colors group-hover:text-emerald-600">
            {product.name}
          </h3>
        </NavLink>

        {/* RATING */}
        <div className="mb-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-gray-200 text-gray-200"
              }
            />
          ))}

          <span className="ml-1 text-[10px] font-bold text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-slate-900">
              ${product.price.toFixed(2)}
            </span>

            {product.oldPrice && (
              <span className="text-sm font-bold text-gray-300 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* VENDOR */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4 text-[11px]">
          <span className="font-medium text-gray-400">
            Sold by:{" "}
            <span className="font-bold text-slate-700">
              {product.vendor}
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};