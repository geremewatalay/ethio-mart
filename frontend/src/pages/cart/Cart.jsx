import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const shippingCost = totalPrice > 50 ? 0 : 9.99;
  const tax = totalPrice * 0.08; // 8% tax
  const finalTotal = totalPrice + shippingCost + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-white rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-3xl font-black">Shopping Cart</h1>
          </div>

          {/* Empty Cart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-12 text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-black mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <NavLink
              to="/shop"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-colors"
            >
              Start Shopping
              <ArrowRight size={18} />
            </NavLink>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-white rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-3xl font-black">Shopping Cart</h1>
          </div>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-600 font-bold text-sm flex items-center gap-2"
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-black text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">
                          {item.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl">
                          <button
                            onClick={() => handleDecrease(item)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-black text-sm min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrease(item)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="text-sm text-gray-500">
                          × ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="font-black text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-3xl shadow-sm sticky top-4"
            >
              <h2 className="text-xl font-black mb-6">Order Summary</h2>

              {/* Cart Stats */}
              <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-2xl">
                <div>
                  <p className="text-sm text-gray-500">Total Items</p>
                  <p className="font-black text-lg">{totalItems}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Subtotal</p>
                  <p className="font-black text-lg">${totalPrice.toFixed(2)}</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className={shippingCost === 0 ? "text-emerald-500" : ""}>
                    {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-black text-lg border-t pt-3">
                  <span>Total</span>
                  <span className="text-emerald-500">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping Notice */}
              {totalPrice < 50 && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-emerald-700 font-bold">
                    Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <NavLink
                  to="/checkout"
                  className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </NavLink>

                <NavLink
                  to="/shop"
                  className="w-full bg-white text-slate-900 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors border border-gray-200 flex items-center justify-center gap-2"
                >
                  Continue Shopping
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};