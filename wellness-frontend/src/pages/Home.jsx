import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const Home = () => {
    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920"
                        className="w-full h-full object-cover transform scale-105"
                        alt="Yoga Meditation"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-brand-primary/40 to-transparent"></div>
                </div>

                <div className="section-container relative z-10">
                    <div className="max-w-2xl animate-reveal">
                        <span className="inline-block px-4 py-1 bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 text-brand-accent rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-8">
                            Sanctuary for the Soul
                        </span>
                        <h1 className="text-7xl lg:text-8xl font-display font-bold text-white leading-none mb-8">
                            A Life of <br />
                            <span className="text-brand-accent italic">Radiant</span> Balance.
                        </h1>
                        <p className="text-wellness-50 font-medium text-lg lg:text-xl leading-relaxed mb-12 opacity-90 max-w-lg">
                            Connect with elite practitioners and artisan wellness essentials curated for your holistic journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/practitioners" className="btn-premium">Explore Therapies</Link>
                            <Link to="/store" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand-primary">Shop Essentials</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="bg-white py-32">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-reveal">
                        <h2 className="text-5xl font-display font-bold text-brand-primary mb-6">Curated Wellness Paths</h2>
                        <div className="h-1 w-20 bg-brand-secondary mx-auto mb-8 rounded-full"></div>
                        <p className="text-slate-600 font-medium text-lg">
                            We bridge the gap between ancient wisdom and modern vitality through a carefully vetted marketplace of practitioners and products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                t: 'Alternative Therapy',
                                d: 'Personalized sessions with top-tier holistic practitioners.',
                                img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800'
                            },
                            {
                                t: 'Healing Essentials',
                                d: 'Artisan tools and organic products for your daily ritual.',
                                img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=800'
                            },
                            {
                                t: 'Mindful Community',
                                d: 'Join global conversations and share your wellness evolution.',
                                img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800'
                            }
                        ].map((s, idx) => (
                            <div key={s.t} className="group relative overflow-hidden rounded-[2.5rem] shadow-premium hover:-translate-y-2 transition-all duration-700">
                                <div className="h-96 relative">
                                    <img src={s.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={s.t} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent"></div>
                                </div>
                                <div className="absolute bottom-0 p-10 w-full text-white">
                                    <h3 className="text-3xl font-display font-bold mb-4">{s.t}</h3>
                                    <p className="text-wellness-50/70 text-sm mb-6 max-w-xs">{s.d}</p>
                                    <div className="w-10 h-10 rounded-full bg-brand-secondary text-brand-primary flex items-center justify-center font-black group-hover:w-full group-hover:rounded-xl transition-all duration-500 overflow-hidden">
                                        <span className="opacity-0 group-hover:opacity-100 uppercase tracking-widest text-[10px]">Learn More</span>
                                        <span className="group-hover:hidden">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Call to Action */}
            <section className="bg-brand-silk py-32 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-secondary)_0%,_transparent_70%)]"></div>
                </div>

                <div className="section-container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1518310383802-640c2de31012?auto=format&fit=crop&q=80&w=1200"
                                className="rounded-[3.5rem] shadow-luxury"
                                alt="Nature Wellness"
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <h2 className="text-5xl lg:text-6xl font-display font-bold text-brand-primary mb-8 tracking-tight">
                                Guided by <span className="text-brand-secondary italic">Intelligence.</span>
                            </h2>
                            <p className="text-slate-700 text-lg lg:text-xl leading-relaxed mb-10 opacity-80">
                                Not sure where to start? Our AI recommendation engine analyzes your wellness goals and connects you with the perfect therapeutic match.
                            </p>
                            <Link to="/ai-discovery" className="btn-premium !bg-brand-primary shadow-2xl">Start AI Discovery</Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Home;
