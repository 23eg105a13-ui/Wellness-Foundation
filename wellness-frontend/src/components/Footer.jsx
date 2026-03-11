import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-wellness-50 pt-20 pb-10">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary font-display text-lg">H</div>
                            <span className="font-display text-xl font-bold tracking-tight">Historical Wellness</span>
                        </div>
                        <p className="text-wellness-100/60 leading-relax max-w-xs mb-8">
                            Empowering your journey to holistic health through alternative therapies and ethical wellness products.
                        </p>
                        <div className="flex gap-4">
                            {['FB', 'IG', 'TW', 'LI'].map(s => (
                                <div key={s} className="w-10 h-10 rounded-full border border-wellness-100/20 flex items-center justify-center text-xs font-bold hover:bg-brand-accent hover:text-brand-primary transition-all cursor-pointer">{s}</div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-bold mb-6 text-brand-accent">Marketplace</h4>
                        <ul className="space-y-4 text-wellness-100/60">
                            <li><Link to="/practitioners" className="hover:text-white transition-colors">Find Therapy</Link></li>
                            <li><Link to="/store" className="hover:text-white transition-colors">Our Store</Link></li>
                            <li><Link to="/store" className="hover:text-white transition-colors">Best Sellers</Link></li>
                            <li><Link to="/store" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-bold mb-6 text-brand-accent">Company</h4>
                        <ul className="space-y-4 text-wellness-100/60">
                            <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/forum" className="hover:text-white transition-colors">Community</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Impact</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-bold mb-6 text-brand-accent">Join Our Sanctuary</h4>
                        <p className="text-wellness-100/60 text-sm mb-6">Subscribe to receive wellness wisdom and exclusive offers.</p>
                        <div className="relative">
                            <input type="email" placeholder="Email address" className="w-full bg-white/5 border-b border-wellness-100/20 py-3 outline-none focus:border-brand-accent transition-colors" />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-accent font-bold">→</button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-wellness-100/30">
                    <p>© 2026 Historical Wellness. All Rights Reserved.</p>
                    <div className="flex gap-10">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Shipping Info</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
