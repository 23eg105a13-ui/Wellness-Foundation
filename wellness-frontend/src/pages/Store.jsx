import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Himalayan Rose Quartz Gua Sha', cat: 'Beauty', price: 48, rating: 4.9, img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Pure Ashwagandha Root Powder', cat: 'Supplements', price: 34, rating: 4.8, img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Tibetan Singing Bowl Set', cat: 'Meditation', price: 89, rating: 5.0, img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Organic Lavender Essential Oil', cat: 'Aromatherapy', price: 28, rating: 4.7, img: 'https://images.unsplash.com/photo-1595360294878-a5fd22c7deac?auto=format&fit=crop&q=80&w=600' },
    { id: 5, name: 'Cork Yoga Mat — Artist Edition', cat: 'Yoga', price: 120, rating: 4.9, img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600' },
    { id: 6, name: 'Chakra Crystal Collection Box', cat: 'Crystals', price: 65, rating: 4.8, img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600' },
    { id: 7, name: 'Bamboo Acupressure Mat', cat: 'Therapy', price: 55, rating: 4.7, img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600' },
    { id: 8, name: 'Herbal Sleep Tincture Trio', cat: 'Supplements', price: 72, rating: 4.9, img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=600' },
];

const cats = ['All', 'Meditation', 'Yoga', 'Supplements', 'Beauty', 'Aromatherapy', 'Crystals', 'Therapy'];

const Store = () => {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? products : products.filter(p => p.cat === active);

    return (
        <MainLayout>
            <div className="relative pt-40 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg,#1A3E39 0%,#2d6b62 100%)' }}>
                <div className="section-container text-center relative z-10">
                    <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Curated Essentials</span>
                    <h1 className="text-6xl font-display font-bold text-white mb-6">The Wellness&nbsp;<em>Store</em></h1>
                    <p className="text-wellness-50/70 text-lg max-w-xl mx-auto">Handpicked products from ethical suppliers — everything you need to build a life of holistic abundance.</p>
                </div>
            </div>

            <div className="bg-white py-24">
                <div className="section-container">
                    <div className="flex flex-wrap gap-3 mb-16 justify-center">
                        {cats.map(c => (
                            <button key={c} onClick={() => setActive(c)}
                                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${active === c ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'bg-wellness-100 text-brand-primary/60 hover:bg-brand-primary/10 hover:text-brand-primary'}`}>
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filtered.map(p => (
                            <Link to={`/store/${p.id}`} key={p.id} className="group bg-brand-stone rounded-[2rem] overflow-hidden hover:-translate-y-2 hover:shadow-luxury transition-all duration-500">
                                <div className="h-56 overflow-hidden">
                                    <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={p.name} />
                                </div>
                                <div className="p-6">
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-secondary">{p.cat}</span>
                                    <h3 className="font-display font-bold text-brand-primary text-lg mt-2 mb-1 leading-tight group-hover:text-brand-secondary transition-colors">{p.name}</h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <p className="text-xl font-display font-bold text-brand-primary">${p.price}</p>
                                        <div className="flex items-center gap-1">
                                            <span className="text-brand-secondary text-sm">★</span>
                                            <span className="text-xs font-bold text-slate-500">{p.rating}</span>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full py-3 bg-brand-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-wellness-800 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Store;
