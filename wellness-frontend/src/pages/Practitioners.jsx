import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Link } from 'react-router-dom';

const practitioners = [
    { id: 1, name: 'Dr. Amara Singh', title: 'Ayurvedic Medicine', exp: '12 yrs', rating: 4.9, reviews: 214, price: 120, location: 'Mumbai, IN', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400', tags: ['Ayurveda', 'Detox', 'Herb'] },
    { id: 2, name: 'James Okafor', title: 'Mindfulness & CBT', exp: '8 yrs', rating: 4.8, reviews: 187, price: 95, location: 'London, UK', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400', tags: ['Meditation', 'Anxiety', 'CBT'] },
    { id: 3, name: 'Dr. Lena Park', title: 'Acupuncture & TCM', exp: '15 yrs', rating: 5.0, reviews: 302, price: 150, location: 'Seoul, KR', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400', tags: ['Acupuncture', 'TCM', 'Pain'] },
    { id: 4, name: 'Sofia Reyes', title: 'Breathwork & Yoga', exp: '6 yrs', rating: 4.7, reviews: 134, price: 80, location: 'Barcelona, ES', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400', tags: ['Yoga', 'Breathwork', 'Stress'] },
    { id: 5, name: 'Ravi Menon', title: 'Naturopathy', exp: '10 yrs', rating: 4.9, reviews: 257, price: 110, location: 'Bangalore, IN', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400', tags: ['Naturopathy', 'Nutrition', 'Detox'] },
    { id: 6, name: 'Claire Dubois', title: 'Reiki & Energy Healing', exp: '9 yrs', rating: 4.8, reviews: 176, price: 100, location: 'Paris, FR', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400', tags: ['Reiki', 'Energy', 'Chakra'] },
];

/* ── Custom image card with clean background isolation ── */
const PractitionerImage = ({ img, name }) => {
    const isLocal = img.startsWith('/images/');
    if (isLocal) {
        return (
            <div className="h-56 overflow-hidden relative bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center">
                <img
                    src={img}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    style={{ mixBlendMode: 'multiply', filter: 'contrast(1.05) brightness(1.05)' }}
                    alt={name}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.classList.add('local-fallback');
                    }}
                />
                {/* Gradient veil to remove background noise */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-transparent to-slate-100/30 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
            </div>
        );
    }
    return (
        <div className="h-56 overflow-hidden relative">
            <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={name} />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 to-transparent"></div>
        </div>
    );
};

const filters = ['All', 'Ayurveda', 'Meditation', 'Yoga', 'Acupuncture', 'Naturopathy', 'Reiki'];

const Practitioners = () => {
    const [active, setActive] = useState('All');

    const filtered = active === 'All' ? practitioners : practitioners.filter(p => p.tags.some(t => t.includes(active)));

    return (
        <MainLayout>
            {/* Hero Banner */}
            <div className="relative pt-40 pb-24 bg-brand-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="bg" />
                </div>
                <div className="section-container relative z-10 text-center">
                    <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Find Your Healer</span>
                    <h1 className="text-6xl font-display font-bold text-white mb-6">Discover&nbsp;<em>Expert</em>&nbsp;Practitioners</h1>
                    <p className="text-wellness-50/70 text-xl max-w-2xl mx-auto font-medium">Every practitioner on our platform is thoroughly vetted, certified, and passionate about your holistic wellbeing.</p>
                </div>
            </div>

            <div className="bg-brand-stone py-24">
                <div className="section-container">
                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-4 mb-16 justify-center">
                        {filters.map(f => (
                            <button key={f} onClick={() => setActive(f)}
                                className={`px-7 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${active === f ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' : 'bg-white text-brand-primary/60 border border-slate-200 hover:border-brand-primary hover:text-brand-primary'}`}>
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filtered.map(p => (
                            <Link to={`/practitioners/${p.id}`} key={p.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-luxury hover:-translate-y-2 transition-all duration-500">
                                <div className="relative">
                                    <PractitionerImage img={p.img} name={p.name} />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black text-brand-secondary uppercase tracking-widest shadow-sm z-10">
                                        ★ {p.rating}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {p.tags.slice(0, 2).map(t => (
                                            <span key={t} className="px-3 py-1 bg-brand-accent/30 text-brand-primary rounded-full text-[9px] font-black uppercase tracking-widest">{t}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-1">{p.name}</h3>
                                    <p className="text-slate-500 font-medium text-sm mb-6">{p.title} · {p.exp} experience</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">From</p>
                                            <p className="text-2xl font-display font-bold text-brand-primary">${p.price}<span className="text-sm text-slate-400 font-normal">/session</span></p>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform shadow-lg">
                                            →
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Practitioners;
