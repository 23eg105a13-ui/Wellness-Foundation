import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const product = {
    id: 1, name: 'Himalayan Rose Quartz Gua Sha', cat: 'Beauty & Facial Therapy', price: 48,
    rating: 4.9, reviews: 312,
    desc: 'Crafted from authentic Himalayan rose quartz, this professional-grade Gua Sha tool promotes lymphatic drainage, reduces facial tension, and enhances your natural glow. The unique rose quartz stone remains cool to the touch, providing a soothing and luxurious experience with every use.',
    imgs: [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1595360294878-a5fd22c7deac?auto=format&fit=crop&q=80&w=800',
    ]
};

const ProductDetail = () => {
    const [qty, setQty] = useState(1);
    const [activeImg, setActiveImg] = useState(0);

    return (
        <MainLayout>
            <div className="pt-32 pb-24 bg-brand-stone">
                <div className="section-container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="rounded-[3rem] overflow-hidden shadow-luxury aspect-square">
                                <img src={product.imgs[activeImg]} className="w-full h-full object-cover transition-all duration-500" alt={product.name} />
                            </div>
                            <div className="flex gap-4">
                                {product.imgs.map((img, i) => (
                                    <button key={i} onClick={() => setActiveImg(i)} className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-brand-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                                        <img src={img} className="w-full h-full object-cover" alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-4">{product.cat}</span>
                            <h1 className="text-5xl font-display font-bold text-brand-primary mb-4 leading-tight">{product.name}</h1>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-brand-secondary font-bold text-lg">{'★'.repeat(5)}</span>
                                <span className="text-slate-500 text-sm font-medium">{product.rating} ({product.reviews} verified reviews)</span>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">{product.desc}</p>

                            <div className="flex flex-wrap gap-4 mb-10 text-[10px] font-black uppercase tracking-widest">
                                {['100% Natural Stone', 'Dermatologist Approved', 'Ethically Sourced', 'Certified Authentic'].map(badge => (
                                    <span key={badge} className="px-4 py-2 bg-brand-accent/30 text-brand-primary rounded-full">{badge}</span>
                                ))}
                            </div>

                            <div className="flex items-end justify-between mb-8">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Price</p>
                                    <p className="text-6xl font-display font-bold text-brand-primary">${product.price}</p>
                                </div>
                                <div className="flex items-center border-2 border-slate-200 rounded-2xl overflow-hidden">
                                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-12 h-12 font-bold text-xl hover:bg-brand-primary hover:text-white transition-colors">−</button>
                                    <span className="px-4 font-bold">{qty}</span>
                                    <button onClick={() => setQty(q => q + 1)} className="w-12 h-12 font-bold text-xl hover:bg-brand-primary hover:text-white transition-colors">+</button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Link to="/cart" className="btn-premium flex-1 text-center !py-5 shadow-2xl shadow-brand-primary/20">Add to Cart →</Link>
                                <button className="w-14 h-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-xl hover:border-brand-secondary hover:text-brand-secondary transition-all">♡</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ProductDetail;
