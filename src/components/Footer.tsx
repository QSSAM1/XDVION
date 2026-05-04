import { Link } from 'react-router-dom';
import { Droplets, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-8 relative z-10 bg-black/50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Concept */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <div className="bg-primary-500 p-2 rounded-xl text-black">
                <Droplets size={24} />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase tracking-widest">
                POWER <span className="text-primary-500">OILS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-zinc-400">
              الوجهة الأولى لحلول تزييت المحركات. أداء استثنائي وعمر أطول لمحركك مع زيوت القوة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-primary-500 hover:bg-zinc-700 transition-all border border-white/5">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-primary-500 hover:bg-zinc-700 transition-all border border-white/5">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-primary-500 hover:bg-zinc-700 transition-all border border-white/5">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">روابط سريعة</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> الرئيسية</Link></li>
              <li><Link to="/store" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> المتجر</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> من نحن</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">خدمات العملاء</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> سياسة الاسترجاع</Link></li>
              <li><Link to="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> الشحن والتوصيل</Link></li>
              <li><Link to="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> الأسئلة الشائعة</Link></li>
              <li><Link to="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span> الشروط والأحكام</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">التواصل</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-zinc-800/80 p-2 rounded-lg text-primary-500 shrink-0 border border-white/5">
                  <MapPin size={16} />
                </div>
                <span className="text-sm text-zinc-400">الرياض، المملكة العربية السعودية، المنطقة الصناعية</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-zinc-800/80 p-2 rounded-lg text-primary-500 shrink-0 border border-white/5">
                  <Phone size={16} />
                </div>
                <span className="text-sm text-zinc-400 font-mono" dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-zinc-800/80 p-2 rounded-lg text-primary-500 shrink-0 border border-white/5">
                  <Mail size={16} />
                </div>
                <span className="text-sm text-zinc-400 font-mono">info@poweroils.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} POWER OILS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">PRIVACY</Link>
            <Link to="#" className="hover:text-white transition-colors">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
