import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Get first 3 for home page

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl hover:glow-border transition-all cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto bg-zinc-800 text-primary-500 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg border border-white/5">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">جودة معتمدة</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">منتجاتنا أصلية 100% ومطابقة لأعلى المواصفات العالمية والمحلية.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl hover:glow-border transition-all cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto bg-zinc-800 text-primary-500 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg border border-white/5">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">توصيل سريع</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">نضمن توصيل طلباتكم في أسرع وقت ممكن إلى جميع مناطق المملكة.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl hover:glow-border transition-all cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto bg-zinc-800 text-primary-500 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg border border-white/5">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">أداء فائق</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">زيوت مصممة خصيصاً لتعزيز أداء المحرك حتى في أقسى درجات الحرارة.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 flex-grow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-6">
            <div>
              <h2 className="text-4xl font-black text-white mb-2 tracking-tight">الأكثر <span className="text-primary-500">مبيعاً</span></h2>
              <p className="text-zinc-400 text-sm">اختيارات عملائنا المفضلة لمحركاتهم.</p>
            </div>
            <Link to="/store" className="text-primary-500 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest hidden sm:block">
              عرض كل المنتجات &larr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/store" className="inline-block bg-primary-500 text-black font-black py-4 px-8 rounded-xl shadow-lg shadow-primary-500/20">
              عرض كل المنتجات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
