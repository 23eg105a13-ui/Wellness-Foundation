import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import Navbar from '../components/Navbar';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'PATIENT' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        // Clear existing session if user tries to reach register page while logged in
        if (localStorage.getItem('token')) {
            console.log("Existing session found, clearing for new registration...");
            localStorage.clear();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/register', formData);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
            window.location.reload();
        } catch (err) {
            console.error("Registration error:", err);
            const message = err.response?.data?.message || err.message || 'Registration failed. Please verify your information.';
            setError(message);
        }
    };

    return (
        <div className="min-h-screen flex relative font-sans">
            <Navbar />
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Wellness"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-primary/50"></div>
                <div className="relative z-10 flex flex-col justify-center p-20 text-white">
                    <h2 className="text-6xl font-display font-bold leading-none mb-8">Begin Your<br /><span className="italic text-brand-accent">Healing</span> Journey.</h2>
                    <p className="text-wellness-50/70 text-xl leading-relaxed max-w-md">Join thousands shaping a new relationship with their health through the power of alternative therapies.</p>
                    <div className="mt-16 grid grid-cols-3 gap-8">
                        {['2.4K+ Practitioners', '18K+ Members', '500+ Products'].map(s => (
                            <div key={s} className="border-t border-white/20 pt-6">
                                <p className="font-bold text-sm text-brand-accent">{s.split('+')[0]}+</p>
                                <p className="text-xs text-white/50 mt-1">{s.split(' ').slice(1).join(' ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-10 bg-brand-stone">
                <div className="w-full max-w-lg animate-reveal">
                    <div className="mb-12">
                        <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Create Account</span>
                        <h1 className="text-5xl font-display font-bold text-brand-primary">Welcome to<br />Historical Wellness.</h1>
                    </div>

                    {error && (
                        <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-r-2xl text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/50">Full Name</label>
                                <input type="text" placeholder="Your full name" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all duration-300 font-medium"
                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/50">Role</label>
                                <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all duration-300 font-medium appearance-none"
                                    value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                                    <option value="PATIENT">Patient / Seeker</option>
                                    <option value="GUARDIAN">Wellness Guardian</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/50">Email Address</label>
                            <input type="email" placeholder="your@email.com" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all duration-300 font-medium"
                                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/50">Password</label>
                            <input type="password" placeholder="Create a strong password" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all duration-300"
                                value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                        </div>

                        <p className="text-[10px] text-slate-400 leading-relaxed">By creating an account, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>. Your wellness journey is personal and protected.</p>

                        <button type="submit" className="btn-premium w-full !text-base !py-5 shadow-2xl shadow-brand-primary/20">
                            Create My Sanctuary →
                        </button>
                    </form>

                    <p className="mt-10 text-center text-slate-500 font-medium text-sm">
                        Already a member? <Link to="/login" className="font-black text-brand-primary hover:text-brand-secondary transition-colors border-b border-brand-primary/20">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
