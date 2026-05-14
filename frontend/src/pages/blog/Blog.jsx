import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Ethiopian Coffee Culture: From Bean to Cup",
    excerpt: "Discover the rich tradition of Ethiopian coffee, from ancient ceremonies to modern brewing techniques that make our coffee world-famous.",
    author: "Abebe Kebede",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=400&fit=crop",
    category: "Culture",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Farming Practices in Ethiopia",
    excerpt: "Learn about innovative farming techniques that Ethiopian farmers use to grow high-quality produce while protecting the environment.",
    author: "Sara Mengistu",
    date: "2024-01-12",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=400&fit=crop",
    category: "Agriculture",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Traditional Ethiopian Spices and Their Uses",
    excerpt: "Explore the vibrant world of Ethiopian spices, from berbere to mitmita, and how they enhance our traditional and modern cuisine.",
    author: "Dawit Tadesse",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=400&fit=crop",
    category: "Cuisine",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Art of Ethiopian Handicrafts",
    excerpt: "From intricate weaving to beautiful pottery, discover the craftsmanship that makes Ethiopian artisanal products unique worldwide.",
    author: "Helen Gebre",
    date: "2024-01-08",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    category: "Art & Craft",
    readTime: "8 min read"
  }
];

export const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover stories about Ethiopian culture, agriculture, cuisine, and craftsmanship.
            Stay updated with the latest from Ethio-Mart.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h2 className="text-xl font-black text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="text-emerald-600 font-medium">{post.readTime}</span>
                </div>

                {/* Read More Link */}
                <NavLink
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-emerald-500 rounded-3xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-black mb-4">
            Stay Updated
          </h2>
          <p className="text-emerald-100 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for the latest stories about Ethiopian culture and products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};