import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const initialItems = [
    { id: 1, name: 'Himalayan Rose Quartz Gua Sha', cat: 'Beauty', price: 48, qty: 1, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Tibetan Singing Bowl Set', cat: 'Meditation', price: 89, qty: 1, img: 'https://images.unsplash.com/photo-1588891825618-5c6e0e2a1488?auto=format&fit=crop&q=80&w=200' },
];

const Cart = () => {
    const [items, setItems] = useState(initialItems);

    const updateQty = (id, delta) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
    const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <MainLayout>
            <div className="pt-32 pb-24 bg-brand-stone min-h-screen">
                <div className="section-container max-w-5xl">
                    <div className="mb-12">
                        <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Your Selections</span>
                        <h1 className="text-5xl font-display font-bold text-brand-primary">Shopping Cart <span className="text-slate-300">({items.length})</span></h1>
                    </div>

                    {items.length === 0 ? (
                        <div className="text-center py-32">
                            <p className="text-8xl mb-8">🧘</p>
                            <h2 className="text-3xl font-display font-bold text-brand-primary mb-4">Your cart is at peace</h2>
                            <p className="text-slate-500 mb-10">Add some wellness essentials to begin your journey.</p>
                            <Link to="/store" className="btn-premium">Browse Store</Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div className="lg:col-span-2 space-y-6">
                                {items.map(item => (
                                    <div key={item.id} className="group bg-white rounded-[2rem] p-6 flex gap-6 items-center shadow-premium hover:shadow-luxury transition-all duration-300">
                                        <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                                            <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-brand-secondary">{item.cat}</span>
                                            <h3 className="font-display font-bold text-brand-primary text-lg mt-1">{item.name}</h3>
                                            <p className="text-2xl font-display font-bold text-brand-primary mt-2">${item.price * item.qty}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                                <button onClick={() => updateQty(item.id, -1)} className="w-10 h-10 font-bold text-lg hover:bg-brand-stone transition-colors">−</button>
                                                <span className="w-10 text-center font-bold">{item.qty}</span>
                                                <button onClick={() => updateQty(item.id, 1)} className="w-10 h-10 font-bold text-lg hover:bg-brand-stone transition-colors">+</button>
                                            </div>
                                            <button onClick={() => remove(item.id)} className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-red-400 hover:bg-red-50 transition-all">✕</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-[2rem] p-8 shadow-luxury">
                                    <h3 className="text-xl font-display font-bold text-brand-primary mb-8 pb-4 border-b border-slate-100">Order Summary</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between"><span className="text-slate-500 font-medium">Subtotal</span><span className="font-bold">${subtotal.toFixed(2)}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500 font-medium">Shipping</span><span className="font-bold text-green-600">Free</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500 font-medium">Tax</span><span className="font-bold">${(subtotal * 0.08).toFixed(2)}</span></div>
                                        <div className="flex justify-between pt-4 border-t border-slate-100">
                                            <span className="font-black text-brand-primary">Total</span>
                                            <span className="text-2xl font-display font-bold text-brand-primary">${(subtotal * 1.08).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button className="btn-premium w-full !py-5 shadow-xl shadow-brand-primary/20 mb-4">Secure Checkout →</button>
                                    <Link to="/store" className="block text-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors">Continue Shopping</Link>
                                </div>
                                <div className="bg-brand-accent/20 rounded-3xl p-6 text-center">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-2">Free Shipping on all orders</p>
                                    <p className="text-xs text-slate-500">Ethically packaged · Carbon offset</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default Cart;
