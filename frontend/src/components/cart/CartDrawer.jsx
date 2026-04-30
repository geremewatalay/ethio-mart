import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

export const CartDrawer = () => {
  const {
    cart = [],
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice = 0,
    totalItems = 0,
  } = useCart();

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                  <ShoppingBag size={20} />
                </div>

                <div>
                  <h2 className="text-xl font-black">Shopping Cart</h2>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                    {totalItems} Items
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-slate-900"
              >
                <X size={24} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={50} className="text-gray-300" />

                  <div>
                    <h3 className="font-bold text-lg">Your cart is empty</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Start shopping to add items
                    </p>
                  </div>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* IMAGE */}
                    <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden border flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-sm line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">
                          {item.category}
                        </p>
                      </div>

                      {/* QUANTITY */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-lg">
                          <button onClick={() => handleDecrease(item)}>
                            <Minus size={14} />
                          </button>

                          <span className="font-black text-xs">
                            {item.quantity}
                          </span>

                          <button onClick={() => handleIncrease(item)}>
                            <Plus size={14} />
                          </button>
                        </div>

                        <span className="font-black text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-emerald-500">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <NavLink
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                >
                  Checkout
                  <ArrowRight size={18} />
                </NavLink>

                <NavLink
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center text-sm font-bold"
                >
                  View Cart
                </NavLink>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};