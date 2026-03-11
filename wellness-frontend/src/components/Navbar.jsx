import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logout = () => {
        localStorage.clear();
        navigate('/login');
        window.location.reload();
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${isScrolled ? 'glass-panel shadow-luxury' : 'bg-transparent'}`}>
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-display text-xl transition-transform group-hover:rotate-12">H</div>
                    <span className="font-display text-2xl font-bold tracking-tight text-brand-primary">Historical Wellness</span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <Link to="/practitioners" className="text-sm font-semibold hover:text-brand-secondary transition-colors uppercase tracking-widest text-brand-primary/80">Practitioners</Link>
                    <Link to="/store" className="text-sm font-semibold hover:text-brand-secondary transition-colors uppercase tracking-widest text-brand-primary/80">Store</Link>
                    <Link to="/forum" className="text-sm font-semibold hover:text-brand-secondary transition-colors uppercase tracking-widest text-brand-primary/80">Community</Link>
                </div>

                <div className="flex items-center gap-6">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link to="/dashboard" className="w-10 h-10 rounded-full border-2 border-brand-accent flex items-center justify-center font-bold text-brand-primary overflow-hidden shadow-sm">
                                {user.name?.[0]?.toUpperCase()}
                            </Link>
                            <button onClick={logout} className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-700">Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-bold uppercase tracking-widest text-brand-primary hover:text-brand-secondary">Sign In</Link>
                            <Link to="/register" className="btn-premium !py-3 !px-6 text-sm">Join Us</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
