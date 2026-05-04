import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';

export default function Store() {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  const categories = ['الكل', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'الكل' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-white mb-4 tracking-tighter"
          >
            جميع <span className="text-primary-500">المنتجات</span>
          </motion.h1>
          <p className="text-sm text-zinc-400">
            اختر ما يناسب سيارتك من مجموعتنا الواسعة من الزيوت والسوائل المعتمدة.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 glass p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 text-primary-500 font-bold uppercase tracking-widest text-xs">
            <Filter size={18} />
            <span>تصنيف حسب</span>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-black transition-colors uppercase tracking-widest ${
                  activeCategory === category
                    ? 'bg-primary-500 text-black shadow-lg shadow-primary-500/20'
                    : 'bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass rounded-3xl glow-amber glow-border">
            <p className="text-xl text-primary-500 font-bold">لا توجد منتجات في هذا التصنيف حالياً.</p>
          </div>
        )}

      </div>
    </div>
  );
}
