import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[640px]">
        {/* Main Banner */}
        <section className="lg:col-span-7 glass rounded-3xl relative overflow-hidden flex flex-col p-8 glow-amber glow-border">
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610640321523-8e7f1e7d89be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
          </div>
          
          <div className="relative z-10 space-y-4">
            <span className="bg-primary-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-2">الأكثر مبيعاً</span>
            <motion.h1 
              className="text-4xl md:text-5xl font-black leading-tight text-white m-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              حماية <br /><span className="text-primary-500">فائقة للمحركات</span>
            </motion.h1>
            <motion.p 
              className="text-zinc-400 max-w-sm text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              اكتشف تشكيلتنا المعتمدة عالمياً لزيوت المحركات المصممة خصيصاً لتحسين الأداء وإطالة العمر الافتراضي تحت أقسى الظروف المناخية في المنطقة العربية.
            </motion.p>
          </div>

          <div className="mt-8 lg:mt-auto flex flex-col sm:flex-row items-end justify-between relative z-10">
            <div className="space-y-6 w-full lg:w-auto">
              <div className="flex space-x-8 space-x-reverse">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">+45%</div>
                  <div className="text-[10px] text-zinc-500 uppercase font-black">تقليل الاحتكاك</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">220°C</div>
                  <div className="text-[10px] text-zinc-500 uppercase font-black">تحمل الحرارة</div>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <Link to="/store" className="inline-block bg-primary-500 hover:bg-primary-600 text-black font-black py-4 px-10 rounded-xl text-lg transition-colors shadow-lg shadow-primary-500/20 w-full sm:w-auto text-center">
                  اطلب الآن - 120 ريال
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="absolute -left-10 bottom-0 w-80 h-full flex items-center justify-center opacity-30 lg:opacity-100 pointer-events-none">
            <div className="w-48 lg:w-64 h-[350px] lg:h-[450px] oil-bottle-gradient rounded-[40px] rotate-6 flex flex-col items-center justify-center border-4 border-white/20 shadow-2xl">
              <div className="w-24 h-4 bg-zinc-900 absolute top-0 -mt-2 rounded-full"></div>
              <div className="text-3xl lg:text-4xl font-black text-black/20 transform -rotate-90 whitespace-nowrap">POWER OILS</div>
            </div>
          </div>
        </section>

        {/* Sidebar Info Panels */}
        <aside className="lg:col-span-5 grid grid-rows-1 sm:grid-rows-3 gap-6 h-full">
          <div className="glass rounded-3xl p-6 flex flex-col justify-between hover:glow-border transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-zinc-400">حالة المحرك الذكية</h3>
              <span className="text-emerald-500 text-xs font-bold">متصل ●</span>
            </div>
            <div className="flex items-center space-x-6 space-x-reverse mb-2">
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-primary-500 w-[78%]"></motion.div>
              </div>
              <span className="font-black text-xl text-white">78%</span>
            </div>
            <p className="text-xs text-zinc-500">بناءً على تحليلات آخر 5,000 كم، أداء الزيت الحالي مثالي.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass rounded-3xl p-5 flex flex-col items-center justify-center text-center space-y-2 hover:glow-border transition-all cursor-pointer">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-1 text-2xl">⚡</div>
              <div className="text-xs font-bold text-white">شحن سريع</div>
              <div className="text-[10px] text-zinc-500">خلال ساعتين فقط</div>
            </div>
            <div className="glass rounded-3xl p-5 flex flex-col items-center justify-center text-center space-y-2 hover:glow-border transition-all cursor-pointer">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-1 text-2xl">🛠️</div>
              <div className="text-xs font-bold text-white">خدمة التركيب</div>
              <div className="text-[10px] text-zinc-500">في مراكزنا المعتمدة</div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 relative flex flex-col justify-center overflow-hidden hover:glow-border transition-all">
            <h3 className="text-xl font-bold mb-1 text-white relative z-10">انضم إلى نادي القوة</h3>
            <p className="text-zinc-400 text-xs mb-4 relative z-10">احصل على خصم 15% على أول طلب تبديل زيت متكامل.</p>
            <div className="flex relative z-10">
              <input type="text" placeholder="رقم الجوال" className="bg-zinc-800 border-none rounded-r-xl px-4 py-3 text-sm flex-1 focus:ring-1 focus:ring-primary-500 outline-none text-white" />
              <button className="bg-white text-black px-4 py-3 rounded-l-xl font-bold text-sm hover:bg-gray-200 transition-colors">ارسال</button>
            </div>
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full mix-blend-multiply opacity-10 filter blur-2xl"></div>
          </div>
        </aside>
      </main>
    </div>
  );
}
