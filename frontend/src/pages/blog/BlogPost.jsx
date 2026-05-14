import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

// Sample blog post data (in a real app, this would come from an API)
const blogPostData = {
  1: {
    title: "Ethiopian Coffee Culture: From Bean to Cup",
    content: `
      <p>Ethiopian coffee culture is deeply rooted in our history and traditions. For centuries, coffee has been more than just a beverage—it's a social ritual that brings people together.</p>

      <h2>The Ancient Tradition</h2>
      <p>Legend has it that coffee was discovered in Ethiopia by a goat herder named Kaldi in the 9th century. When he noticed his goats becoming energetic after eating red berries, he tried them himself and experienced the same effect.</p>

      <h2>The Coffee Ceremony</h2>
      <p>The traditional Ethiopian coffee ceremony is a beautiful ritual that involves roasting fresh green beans over a small fire, grinding them by hand, and brewing them in a special pot called a jebena. This process takes time and care, reflecting the Ethiopian value of hospitality.</p>

      <h2>Modern Ethiopian Coffee</h2>
      <p>Today, Ethiopian coffee is renowned worldwide for its quality and unique flavors. Our single-origin coffees from regions like Yirgacheffe and Sidamo are celebrated for their bright acidity, floral notes, and complex taste profiles.</p>

      <p>At Ethio-Mart, we're proud to share this rich tradition with the world, offering authentic Ethiopian coffee that connects you to our heritage.</p>
    `,
    author: "Abebe Kebede",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=600&fit=crop",
    category: "Culture",
    readTime: "5 min read"
  },
  2: {
    title: "Sustainable Farming Practices in Ethiopia",
    content: `
      <p>Ethiopian farmers have been practicing sustainable agriculture for generations, using methods that protect the land while producing high-quality crops.</p>

      <h2>Traditional Methods</h2>
      <p>Our farmers use age-old techniques like crop rotation, intercropping, and natural pest control. These methods maintain soil fertility and biodiversity without relying on chemical inputs.</p>

      <h2>Modern Innovations</h2>
      <p>Today, we're combining traditional wisdom with modern technology. Solar-powered irrigation systems, mobile apps for weather forecasting, and improved seed varieties help our farmers thrive.</p>

      <h2>Environmental Impact</h2>
      <p>By choosing Ethiopian products from Ethio-Mart, you're supporting sustainable farming practices that preserve our environment and cultural heritage.</p>
    `,
    author: "Sara Mengistu",
    date: "2024-01-12",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&h=600&fit=crop",
    category: "Agriculture",
    readTime: "7 min read"
  }
};

export const BlogPost = () => {
  const { id } = useParams();
  const post = blogPostData[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Post Not Found</h1>
          <NavLink to="/blog" className="text-emerald-600 hover:text-emerald-700 font-bold">
            ← Back to Blog
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <NavLink
            to="/blog"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </NavLink>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm overflow-hidden"
        >
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.article>

        {/* Related Posts or Newsletter could go here */}
      </div>
    </div>
  );
};