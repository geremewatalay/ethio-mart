import React from 'react';
import { ChevronRight, ArrowRight, Truck, ShieldCheck, Clock, RefreshCcw, LayoutGrid } from 'lucide-react';
import { products, categories } from '../../data/products.js';
import { ProductCard } from '../../components/products/ProductCard';
import { motion } from "framer-motion";
import { cn } from '../../lib/utils';

export const HomeOne = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative bg-emerald-50 overflow-hidden">
        <div className="container mx-auto px-4 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 z-10">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              100% Organic Products
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              Fresh Organic <br /> 
              <span className="text-emerald-500">Supermarket</span> <br />
              At Your Doorstep
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 max-w-lg font-medium leading-relaxed"
            >
              We provide the best quality organic products for your dairy family needs. Start shopping today and get amazing discounts!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 py-4"
            >
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-200 flex items-center gap-2 group">
                Shop Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all border border-gray-200">
                Learn More
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" 
                alt="Organic Food"
                className="rounded-[40px] shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-3xl shadow-xl space-y-1 transform -rotate-6">
                <p className="text-3xl font-black text-emerald-500">20%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Off on Fruits</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-3xl shadow-xl space-y-1 transform rotate-6">
                <p className="text-3xl font-black text-white">5K+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Happy Customers</p>
              </div>
            </div>
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Truck, title: 'Free Delivery', desc: 'Orders over $150' },
            { icon: ShieldCheck, title: 'Safe Payment', desc: 'Secure encryption' },
            { icon: Clock, title: '24/7 Support', desc: 'Round the clock' },
            { icon: RefreshCcw, title: 'Easy Returns', desc: '30 days policy' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <feature.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{feature.title}</h4>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2 italic">Shop by <span className="text-emerald-500">Categories</span></h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Explore our wide range of organic products</p>
            </div>
            <button className="flex items-center gap-2 font-bold text-sm text-slate-900 hover:text-emerald-500 transition-colors group">
              View All <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={cat.id} 
                className="group bg-white rounded-3xl border border-gray-100 p-8 flex flex-col items-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-emerald-100 transition-all cursor-pointer"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center p-4 mb-4 group-hover:bg-emerald-100 transition-colors overflow-hidden">
                   <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{cat.name}</h4>
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{cat.count} Items</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Our Popular <span className="text-emerald-500">Products</span></h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Top quality groceries picked for you</p>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
                {['All', 'Fruits', 'Vegetables', 'Bakery'].map((tab) => (
                  <button key={tab} className={cn(
                    "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                    tab === 'All' ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-slate-900'
                  )}>
                    {tab}
                  </button>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-3 mx-auto">
               Explore More Products <LayoutGrid size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="relative overflow-hidden rounded-[40px] group bg-[#fce9e9] p-12 flex flex-col justify-center min-h-[350px]">
              <div className="absolute right-0 bottom-0 w-1/2 h-full">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop" alt="Banner" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              </div>
              <div className="relative z-10 space-y-4 max-w-[50%]">
                <span className="text-rose-500 font-black text-xs uppercase tracking-[0.2em]">Flash Sale</span>
                <h3 className="text-4xl font-black text-slate-900 italic">Fresh Fruits <br /> & Produce</h3>
                <p className="text-sm font-bold text-slate-500 uppercase">Up to 60% Off</p>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all border border-gray-100">Shop Now</button>
              </div>
           </div>
           <div className="relative overflow-hidden rounded-[40px] group bg-emerald-50 p-12 flex flex-col justify-center min-h-[350px]">
              <div className="absolute right-0 bottom-0 w-1/2 h-full">
                 <img src="https://images.unsplash.com/photo-1557089753-b4e04c3529db?q=80&w=400&auto=format&fit=crop" alt="Banner" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              </div>
              <div className="relative z-10 space-y-4 max-w-[50%]">
                <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.2em]">New Arrivals</span>
                <h3 className="text-4xl font-black text-slate-900 italic">Organic <br /> Beverages</h3>
                <p className="text-sm font-bold text-slate-500 uppercase">Save 10% Extra</p>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all border border-gray-100">Shop Now</button>
              </div>
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
         <div className="bg-emerald-500 rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
               <h2 className="text-4xl md:text-5xl font-black text-white italic leading-tight">Subscribe To Our Newsletter & <br /> Get <span className="text-slate-900">25% Discount</span></h2>
               <p className="text-emerald-50 text-sm font-medium">Join our community today and stay updated with the latest organic trends and exclusive offers.</p>
               <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4 text-left">
                  <input type="email" placeholder="Your Email Address" className="flex-grow bg-white px-6 py-4 rounded-2xl text-sm font-medium outline-none border-none focus:ring-4 focus:ring-emerald-400 transition-all" />
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">Subscribe</button>
               </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
         </div>
      </section>
    </div>
  );
};
