import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Home, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

export const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-12 text-center shadow-xl"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle size={48} className="text-emerald-500" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-black mb-4"
          >
            Order Confirmed!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-8 text-lg"
          >
            Thank you for your order! We've received your purchase and will send you a confirmation email shortly.
          </motion.p>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 rounded-2xl p-6 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 font-bold uppercase tracking-widest mb-1">
                  Order Number
                </p>
                <p className="font-black text-lg">#EM-{Date.now().toString().slice(-6)}</p>
              </div>
              <div>
                <p className="text-gray-500 font-bold uppercase tracking-widest mb-1">
                  Estimated Delivery
                </p>
                <p className="font-black text-lg">3-5 Business Days</p>
              </div>
            </div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-left mb-8"
          >
            <h3 className="font-black text-lg mb-4">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle size={14} className="text-emerald-500" />
                </div>
                <div>
                  <p className="font-bold">Order Confirmation</p>
                  <p className="text-sm text-gray-500">Check your email for order details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold">Processing</p>
                  <p className="text-sm text-gray-500">We'll prepare your order for shipping</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold">Shipping</p>
                  <p className="text-sm text-gray-500">Your order will be delivered to your door</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <NavLink
              to="/"
              className="flex-1 bg-emerald-500 text-white py-4 px-8 rounded-2xl font-bold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
            >
              <Home size={18} />
              Back to Home
            </NavLink>

            <NavLink
              to="/shop"
              className="flex-1 bg-white text-slate-900 py-4 px-8 rounded-2xl font-bold hover:bg-slate-50 transition-colors border border-gray-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Continue Shopping
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};