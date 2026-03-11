import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import Navbar from '../components/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
            window.location.reload();
        } catch (err) {
            setError(err.response?.data?.message || 'The credentials provided do not match our records.');
        }
    };

    return (
        <div className="min-h-screen bg-brand-silk flex items-center justify-center relative p-6 font-sans">
            <Navbar />

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518310383802-640c2de31012?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center shrink-0">
                <div className="absolute inset-0 bg-brand-primary/80 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative w-full max-w-xl animate-reveal">
                <div className="glass-panel rounded-[3rem] p-16 shadow-luxury">
                    <div className="text-center mb-12">
                        <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Secure Portal</span>
                        <h1 className="text-5xl font-display font-bold text-brand-primary mb-4">Welcome Back</h1>
                        <p className="text-slate-500 font-medium italic">Your sanctuary awaits.</p>
                    </div>

                    {error && (
                        <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-xl text-xs font-bold uppercase tracking-widest animate-pulse">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60 ml-2">Email Identity</label>
                            <input
                                type="email"
                                className="w-full px-8 py-5 bg-white/50 border border-brand-primary/10 rounded-full focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all duration-500 font-medium"
                                placeholder="guardian@wellness.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60 ml-2">Security Key</label>
                            <input
                                type="password"
                                className="w-full px-8 py-5 bg-white/50 border border-brand-primary/10 rounded-full focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all duration-500"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-premium w-full !text-lg !py-5 shadow-2xl">
                            Enter Sanctuary
                        </button>
                    </form>

                    <div className="mt-12 text-center pt-8 border-t border-brand-primary/5">
                        <p className="text-slate-500 font-medium text-sm">
                            New to our marketplace?
                            <Link to="/register" className="ml-2 font-black text-brand-primary hover:text-brand-secondary transition-all border-b border-brand-primary/20">
                                Join Community
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
