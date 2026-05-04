import { motion } from 'motion/react';
import { Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">من <span className="text-primary-500">نحن</span></h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            متجر <span className="text-primary-500 font-bold">زيوت القوة</span> ليس مجرد متجر تقليدي لبيع الزيوت، بل نحن شريكك الاستراتيجي في الحفاظ على الأداء الأقصى لسيارتك. انطلقنا من شغفنا بعالم المحركات وحاجتنا لتوفير حلول ذات جودة عالمية تناسب البيئة القاسية والتحديات المناخية في المنطقة.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl text-center hover:glow-border transition-all"
          >
            <div className="w-16 h-16 bg-zinc-800 text-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/5">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">رؤيتنا</h3>
            <p className="text-zinc-400 text-sm">
              أن نكون المرجع الأول والخيار الأوثق لحلول تزييت المحركات في الشرق الأوسط.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl text-center hover:glow-border transition-all"
          >
            <div className="w-16 h-16 bg-zinc-800 text-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/5">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">رسالتنا</h3>
            <p className="text-zinc-400 text-sm">
              توفير منتجات أصلية 100% مدعومة بخبرة فنية تضمن استمرار كفاءة المحركات.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl text-center hover:glow-border transition-all"
          >
            <div className="w-16 h-16 bg-zinc-800 text-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/5">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">قيمنا</h3>
            <p className="text-zinc-400 text-sm">
              الشفافية، الجودة التي لا تقبل المساومة، وسرعة الاستجابة لعملائنا.
            </p>
          </motion.div>
        </div>

        <div className="glass rounded-3xl p-10 text-center text-white relative overflow-hidden glow-amber glow-border">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-6">لماذا تختار <span className="text-primary-500">القوة</span>؟</h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              لأننا نؤمن أن زيت المحرك هو دم النابض لسيارتك. اختيار زيت غير مناسب يكلفك الكثير على المدى الطويل. نحن نختصر عليك عناء التجربة من خلال توفير المنتجات التي اجتازت أقسى الاختبارات فقط.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
