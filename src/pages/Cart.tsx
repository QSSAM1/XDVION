import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="py-12 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl font-black text-white mb-8 tracking-tighter flex items-center gap-3">
          <ShoppingBag className="text-primary-500" /> سلة <span className="text-primary-500">المشتريات</span>
        </h1>

        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-3xl text-center border border-white/5"
          >
            <div className="w-24 h-24 bg-zinc-800 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">سلتك فارغة حالياً!</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
              يبدو أنك لم تقم بإضافة أي منتجات للسلة بعد. تصفح متجرنا لاكتشاف أفضل عروض الزيوت لمحرك سيارتك.
            </p>
            <Link 
              to="/store"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-black font-black px-8 py-4 rounded-xl transition-colors shadow-lg shadow-primary-500/20"
            >
              العودة للمتجر <ArrowRight size={20} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map(item => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    key={item.id} 
                    className="glass p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-6 border border-white/5 hover:glow-border transition-all"
                  >
                    <div className="w-24 h-24 shrink-0 bg-zinc-800/50 rounded-xl p-2 border border-white/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-lg" />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-right">
                      <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest font-black mb-3">{item.category}</p>
                      <div className="text-primary-500 font-black text-xl">{item.price} ر.س</div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-zinc-800 rounded-full px-2 py-1 border border-white/5">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-700 transition-colors text-white"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-700 transition-colors text-white"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="w-10 h-10 flex items-center justify-center bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-full transition-colors border border-red-500/20"
                        title="إزالة من السلة"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass p-8 rounded-3xl sticky top-24 border border-white/5 glow-amber glow-border">
                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">ملخص الطلب</h3>
                
                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between text-zinc-400">
                    <span>المجموع الفرعي</span>
                    <span className="font-bold text-white">{totalPrice.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>الشحن</span>
                    <span className="text-emerald-500 font-bold uppercase tracking-widest">مجاني</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 pb-4 border-b border-white/10">
                    <span>الضريبة (15%)</span>
                    <span className="font-bold text-white">{(totalPrice * 0.15).toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black text-white pt-2">
                    <span>الإجمالي</span>
                    <span className="text-primary-500">{(totalPrice * 1.15).toFixed(2)} ر.س</span>
                  </div>
                </div>

                <button 
                  className="w-full bg-primary-500 hover:bg-primary-400 text-black font-black text-lg py-4 rounded-xl transition-colors shadow-lg shadow-primary-500/20"
                  onClick={() => alert('هذه نسخة تجريبية: عملية الدفع غير مفعلة فعلياً في هذا العرض.')}
                >
                  إتمام الشراء
                </button>
                <p className="text-xs text-center text-zinc-500 mt-4 leading-relaxed tracking-wide">
                  خيارات الدفع الآمنة وحماية المشتري متوفرة.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
