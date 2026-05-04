import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Droplets } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, totalPrice } = useCart();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المتجر', path: '/store' },
    { name: 'من نحن', path: '/about' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="p-4 sm:p-6 sticky top-0 z-50">
      <header className="glass text-white rounded-2xl mx-auto max-w-7xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black tracking-tighter text-primary-500">
                POWER<span className="text-white">OILS</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-reverse space-x-8 text-sm font-medium text-zinc-400">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path) 
                      ? 'text-primary-500' 
                      : 'hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Cart & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link 
                to="/cart" 
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full transition-colors group"
              >
                <div className="relative flex items-center">
                  <span className="hidden sm:inline-block font-bold text-xs uppercase tracking-widest text-zinc-300">
                    {totalPrice > 0 ? `SAR ${totalPrice.toFixed(2)}` : 'السلة'}
                  </span>
                  <span className="text-primary-500 mr-2">🛒</span>
                  {totalItems > 0 && (
                    <span className="absolute -top-3 -right-3 bg-primary-500 text-black text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>

            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-gray-800 text-primary-500'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </div>
  );
}
