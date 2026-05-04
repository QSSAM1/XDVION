import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سيتم الرد عليك في أقرب وقت. (ملاحظة: هذه نسخة تجريبية)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">تواصل <span className="text-primary-500">معنا</span></h1>
          <p className="text-lg text-zinc-400">نحن هنا للإجابة على استفساراتك وتقديم الاستشارة الأفضل لسيارتك.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass p-6 rounded-3xl flex items-start gap-4 hover:glow-border transition-all">
              <div className="bg-zinc-800 p-3 rounded-2xl text-primary-500 shrink-0 border border-white/5">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">الموقع</h4>
                <p className="text-zinc-400 text-sm">الرياض، المملكة العربية السعودية<br/>المنطقة الصناعية، شارع أ</p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-3xl flex items-start gap-4 hover:glow-border transition-all">
              <div className="bg-zinc-800 p-3 rounded-2xl text-primary-500 shrink-0 border border-white/5">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">الهاتف</h4>
                <p className="text-zinc-400 text-sm" dir="ltr">+966 50 123 4567</p>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl flex items-start gap-4 hover:glow-border transition-all">
              <div className="bg-zinc-800 p-3 rounded-2xl text-primary-500 shrink-0 border border-white/5">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">البريد الإلكتروني</h4>
                <p className="text-zinc-400 text-sm">support@poweroils.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-3xl glow-amber glow-border relative overflow-hidden"
            >
              <h3 className="text-2xl font-black text-white mb-6">أرسل رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest">الاسم الكامل</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-800/80 border border-white/5 rounded-xl text-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      placeholder="أحمد محمد"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-800/80 border border-white/5 rounded-xl text-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest">الموضوع</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-white/5 rounded-xl text-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    placeholder="استفسار عن توافق زيت"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest">رسالتك</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-white/5 rounded-xl text-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-400 text-black font-black py-4 px-10 rounded-xl transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-primary-500/20"
                  >
                    إرسال الرسالة <Send size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
