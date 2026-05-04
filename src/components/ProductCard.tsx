import React, { useState } from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

export interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass rounded-xl overflow-hidden flex flex-col transition-all hover:glow-border hover:glow-amber cursor-pointer group"
    >
      <div className="relative h-56 bg-zinc-800/50 flex items-center justify-center p-6 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
        />
        <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-500 rounded-full border border-primary-500/20">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-white mb-2 truncate">{product.name}</h3>
        <p className="text-xs text-zinc-400 mb-4 line-clamp-2 flex-grow leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">السعر</span>
            <div className="text-2xl font-black text-white">
              {product.price} <span className="text-sm text-primary-500">ر.س</span>
            </div>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg ${
              isAdded 
                ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                : 'bg-primary-500 text-black shadow-primary-500/20 hover:bg-primary-400'
            }`}
            aria-label="أضف للسلة"
            title="أضف للسلة"
          >
            {isAdded ? <ShoppingCart size={20} /> : <Plus size={24} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
