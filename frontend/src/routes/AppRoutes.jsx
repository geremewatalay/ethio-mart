import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomeOne } from '../pages/home/HomeOne';

// Placeholder components for other routes
const Shop = () => <div className="p-20 text-center"><h1 className="text-4xl font-black">Shop Page</h1><p className="text-gray-500 mt-4">Coming Soon...</p></div>;
const Vendors = () => <div className="p-20 text-center"><h1 className="text-4xl font-black">Vendors Page</h1><p className="text-gray-500 mt-4">Coming Soon...</p></div>;
const Blog = () => <div className="p-20 text-center"><h1 className="text-4xl font-black">Blog Page</h1><p className="text-gray-500 mt-4">Coming Soon...</p></div>;
const Contact = () => <div className="p-20 text-center"><h1 className="text-4xl font-black">Contact Page</h1><p className="text-gray-500 mt-4">Coming Soon...</p></div>;
const NotFound = () => <div className="p-20 text-center"><h1 className="text-4xl font-black">404 Not Found</h1><p className="text-gray-500 mt-4">The page you are looking for does not exist.</p></div>;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeOne />} />
        <Route path="shop" element={<Shop />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
