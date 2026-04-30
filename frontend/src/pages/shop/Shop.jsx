import React, { useState, useMemo } from 'react';
import { products, categories as categoryData } from '../../data/products';
import { ProductCard } from '../../components/products/ProductCard';
import { Search, SlidersHorizontal, LayoutGrid, List, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Shop = () => {
  // FIX: removed TypeScript types
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory
          ? product.category === selectedCategory
          : true;

        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#f4f7f2] py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 italic mb-4">
            Organic Shop
          </h1>

          <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
            <span className="hover:text-emerald-500 cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-emerald-500">Shop</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <aside className="w-full lg:w-72 space-y-10">

            {/* Search */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 italic">
                Filter by <span className="text-emerald-500">Search</span>
              </h3>

              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-gray-50 py-3 pl-12 pr-4 rounded-xl text-sm outline-none border border-transparent focus:border-emerald-500 focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 italic">
                Product <span className="text-emerald-500">Categories</span>
              </h3>

              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between",
                    selectedCategory === null
                      ? 'bg-emerald-500 text-white'
                      : 'hover:bg-emerald-50 text-slate-600'
                  )}
                >
                  All Products
                  <span className="text-[10px] font-black">
                    {products.length}
                  </span>
                </button>

                {categoryData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between",
                      selectedCategory === cat.name
                        ? 'bg-emerald-500 text-white'
                        : 'hover:bg-emerald-50 text-slate-600'
                    )}
                  >
                    {cat.name}
                    <span className="text-[10px] font-black">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Main Area */}
          <main className="flex-grow">

            {/* Toolbar */}
            <div className="bg-gray-50 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 mb-8">

              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Showing <span className="text-slate-900">{filteredProducts.length}</span> results
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "p-2 rounded-lg",
                    viewMode === 'grid'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-400'
                  )}
                >
                  <LayoutGrid size={18} />
                </button>

                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "p-2 rounded-lg",
                    viewMode === 'list'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-400'
                  )}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Products */}
            <div
              className={cn(
                "grid gap-8",
                viewMode === 'grid'
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              )}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};