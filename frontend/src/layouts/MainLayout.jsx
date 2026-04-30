import React from "react";

import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { CartDrawer } from "../components/cart/CartDrawer";
import { ToastContainer } from "../components/common/ToastContainer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">

      {/* Global UI components */}
      <Navbar />

      {/* Cart drawer (global) */}
      <CartDrawer />

      {/* Toast notifications (global) */}
      <ToastContainer />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};