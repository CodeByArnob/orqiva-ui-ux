import React, { useState } from 'react';
import { 
  ShoppingBag, Star, Check, ShieldCheck, Truck, RotateCcw, 
  X, Plus, Minus, ArrowRight, Heart
} from 'lucide-react';

export const EcommerceShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [selectedColor, setSelectedColor] = useState<'obsidian' | 'titanium' | 'silver'>('obsidian');
  const [selectedSize, setSelectedSize] = useState<'20mm' | '22mm' | '24mm'>('22mm');
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const colors = [
    { id: 'obsidian', name: 'Obsidian Black', hex: '#18181b', ring: 'ring-zinc-600' },
    { id: 'titanium', name: 'Slate Titanium', hex: '#475569', ring: 'ring-slate-400' },
    { id: 'silver', name: 'Arctic Silver', hex: '#e2e8f0', ring: 'ring-slate-300' },
  ];

  const basePrice = 380.00;
  const currentTotal = basePrice * quantity;
  const discountAmount = discountApplied ? currentTotal * 0.10 : 0;
  const finalTotal = currentTotal - discountAmount;
  const freeShippingThreshold = 400.00;
  const shippingProgress = Math.min(100, (currentTotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ORQIVA10') {
      setDiscountApplied(true);
    }
  };

  return (
    <div className={`w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans ${isEmbedded ? '' : 'p-6 my-4'}`}>
      {/* Top Banner */}
      <div className="flex justify-between items-center py-2 px-4 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-300">
        <span className="flex items-center space-x-1.5 font-medium">
          <Truck className="w-3.5 h-3.5 text-sky-400" />
          <span>Complimentary Express Shipping on orders over $400</span>
        </span>
        <button 
          onClick={() => setCartOpen(true)}
          className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
          <span>Cart ({quantity})</span>
        </button>
      </div>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left: Product Mockup View */}
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 rounded-2xl border border-slate-800 relative">
          <div className="absolute top-4 left-4 inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium">
            <Star className="w-3 h-3 fill-sky-400 text-sky-400" />
            <span>4.9 / 5 (342 reviews)</span>
          </div>

          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>

          {/* Chronograph Watch Display Mockup */}
          <div className="w-64 h-64 rounded-full border-4 border-slate-700/80 flex items-center justify-center shadow-2xl relative my-6 bg-gradient-to-tr from-slate-950 to-slate-900">
            {/* Bezel Ring */}
            <div className="w-56 h-56 rounded-full border border-slate-600/50 flex flex-col items-center justify-center p-4 text-center relative">
              <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">VELOCE</div>
              <div className="text-xl font-bold font-mono tracking-tight text-white my-1">CHRONO 42</div>
              <div className="text-[9px] font-mono text-sky-400 uppercase tracking-widest">Automatic • 100M</div>
              {/* Hour Hands */}
              <div className="w-1.5 h-16 bg-white rounded-full absolute bottom-1/2 origin-bottom transform rotate-45 shadow-md"></div>
              <div className="w-1 h-20 bg-sky-400 rounded-full absolute bottom-1/2 origin-bottom transform -rotate-30 shadow-md"></div>
              <div className="w-3 h-3 bg-white rounded-full z-10 border-2 border-slate-900"></div>
            </div>
          </div>

          <div className="flex space-x-3 text-xs text-slate-400 font-mono">
            <span>SAPPHIRE CRYSTAL</span>
            <span>•</span>
            <span>GRADE 5 TITANIUM</span>
            <span>•</span>
            <span>SWISS MOVEMENT</span>
          </div>
        </div>

        {/* Right: Product Details & Variant Configuration */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-sky-400 font-semibold">Nordic Atelier Edition</div>
            <h1 className="text-2xl font-bold text-white mt-1">Veloce Carbon Chronograph 42mm</h1>
            <div className="mt-3 flex items-baseline space-x-3">
              <span className="text-3xl font-extrabold text-white font-mono">${basePrice.toFixed(2)}</span>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">In Stock</span>
            </div>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              Precision-machined aeronautical grade titanium chassis with ultra-high scratch-resistant sapphire crystal. Engineered for extreme durability and timeless minimalist refinement.
            </p>

            {/* Color Variant Selector */}
            <div className="mt-6">
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-slate-300">Case Finish:</span>
                <span className="text-sky-400 font-semibold">{colors.find(c => c.id === selectedColor)?.name}</span>
              </div>
              <div className="flex space-x-3">
                {colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id as any)}
                    className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === color.id ? 'border-sky-400 ring-2 ring-sky-400/30 scale-105' : 'border-slate-700 hover:border-slate-500'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor === color.id && <Check className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Strap Size Selector */}
            <div className="mt-5">
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-slate-300">Strap Width:</span>
                <span className="text-slate-400">Fits wrists 160–210mm</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['20mm', '22mm', '24mm'] as const).map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                      selectedSize === size 
                        ? 'bg-sky-500/10 border-sky-500/50 text-sky-400 font-semibold' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {size} Standard
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center border border-slate-800 rounded-xl bg-slate-900 p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 text-slate-300 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-mono text-sm font-semibold text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 text-slate-300 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button 
                onClick={() => setCartOpen(true)}
                className="flex-1 py-3 px-6 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/10"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart • ${(basePrice * quantity).toFixed(2)}</span>
              </button>
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-center text-[11px] text-slate-400">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-sky-400 mb-1" />
              <span>5-Year Global Warranty</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-4 h-4 text-emerald-400 mb-1" />
              <span>Free Express Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-4 h-4 text-purple-400 mb-1" />
              <span>30-Day Hassle-Free Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-out Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl h-full overflow-y-auto">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-4 h-4 text-sky-400" />
                  <h3 className="font-semibold text-white text-sm">Shopping Cart ({quantity} items)</h3>
                </div>
                <button 
                  onClick={() => setCartOpen(false)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="my-4 p-3 bg-slate-850 rounded-xl border border-slate-800 text-xs">
                <div className="flex justify-between mb-1.5">
                  <span className="text-slate-300 font-medium">
                    {currentTotal >= freeShippingThreshold 
                      ? '🎉 You unlocked Free Express Shipping!' 
                      : `Add $${(freeShippingThreshold - currentTotal).toFixed(2)} for Free Shipping`}
                  </span>
                  <span className="text-sky-400 font-mono font-semibold">{shippingProgress.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-sky-400 h-full rounded-full transition-all duration-300" style={{ width: `${shippingProgress}%` }}></div>
                </div>
              </div>

              {/* Item row */}
              <div className="p-3 bg-slate-850/60 rounded-xl border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Veloce Carbon Chronograph</div>
                  <div className="text-[11px] text-slate-400">{colors.find(c => c.id === selectedColor)?.name} • {selectedSize}</div>
                  <div className="text-xs font-mono font-semibold text-sky-400 mt-1">${basePrice.toFixed(2)} × {quantity}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold font-mono text-white">${currentTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="mt-4 flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Promo Code (try ORQIVA10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
                <button 
                  type="submit"
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>
              {discountApplied && (
                <div className="mt-2 text-xs text-emerald-400 flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Coupon 'ORQIVA10' applied: 10% discount!</span>
                </div>
              )}
            </div>

            {/* Cart Footer */}
            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="font-mono">${currentTotal.toFixed(2)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-400">
                  <span>Discount (10%)</span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>Estimated Shipping</span>
                <span className="font-mono text-emerald-400">{currentTotal >= freeShippingThreshold ? 'FREE' : '$15.00'}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                <span>Total Due</span>
                <span className="font-mono">${finalTotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => setCartOpen(false)}
                className="w-full mt-4 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
