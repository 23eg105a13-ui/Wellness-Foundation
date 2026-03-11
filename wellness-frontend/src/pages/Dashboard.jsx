import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import api from '../api/axios';

const Dashboard = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await api.get('/bookings/my');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user.email) {
            fetchBookings();
        }
    }, [user.email]);

    return (
        <MainLayout>
            <div className="pt-32 pb-20 bg-brand-stone">
                <div className="section-container">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-reveal">
                        <div>
                            <span className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block underline decoration-2 underline-offset-8">User Sanctuary</span>
                            <h1 className="text-6xl font-display font-bold text-brand-primary">Hello, <span className="text-brand-primary/50">{user.name}</span></h1>
                            <p className="text-slate-500 text-lg mt-4 font-medium italic">Today is a beautiful day for your holistic growth.</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => navigate('/profile')} className="btn-outline !py-3">Edit Profile</button>
                            <button onClick={() => navigate('/store')} className="btn-premium !py-3 shadow-2xl shadow-brand-primary/20">Marketplace Hub</button>
                        </div>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        {[
                            { t: 'Active Sessions', v: bookings.length.toString().padStart(2, '0'), c: 'brand-primary' },
                            { t: 'Cart Items', v: '00', c: 'brand-secondary' },
                            { t: 'Wellness Score', v: '9.2', c: 'wellness-600' },
                            { t: 'Loyalty Tier', v: 'Gold', c: 'brand-primary' }
                        ].map((m, i) => (
                            <div key={m.t} className="glass-panel p-8 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 group cursor-pointer border-none shadow-premium hover:shadow-luxury">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{m.t}</p>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-display font-bold text-brand-primary tracking-tighter">{m.v}</span>
                                    <div className={`w-2 h-10 bg-${m.c} rounded-full opacity-20 group-hover:opacity-100 transition-opacity`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Activity Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 space-y-10">
                            <div className="glass-panel rounded-[3.5rem] p-10 shadow-premium">
                                <h3 className="text-2xl font-display font-bold mb-8 text-brand-primary border-b border-brand-stone pb-6">Upcoming Sessions</h3>
                                <div className="space-y-6">
                                    {loading ? (
                                        <p className="text-center py-10 text-slate-400 font-medium">Loading your sessions...</p>
                                    ) : bookings.length > 0 ? (
                                        bookings.map(s => (
                                            <div key={s.id} className="flex items-center justify-between p-6 bg-wellness-50 rounded-3xl hover:bg-white transition-colors cursor-pointer group shadow-sm">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-primary font-bold text-xl group-hover:scale-110 transition-transform">
                                                        {s.practitionerName.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-brand-primary">{s.practitionerTitle}</h4>
                                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                                                            {s.dateTime} • Practitioner: {s.practitionerName}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="text-brand-primary font-black">→</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-10">
                                            <p className="text-slate-400 font-medium mb-4">No upcoming sessions found.</p>
                                            <button onClick={() => navigate('/practitioners')} className="text-brand-primary font-bold hover:underline">Book your first session</button>
                                        </div>
                                    )}
                                    {bookings.length > 0 && (
                                        <button className="w-full py-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-brand-primary transition-colors">View All Schedule</button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="bg-brand-primary rounded-[3.5rem] p-10 text-white shadow-luxury relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                                <h3 className="text-xl font-display font-bold mb-6 text-brand-accent">AI Insights</h3>
                                <p className="text-wellness-50/70 font-medium text-sm leading-relaxed mb-8 italic">
                                    "Your recent activity suggests a focus on holistic growth. We recommend exploring deeper AI discovery based on your preferences."
                                </p>
                                <button onClick={() => navigate('/ai-discovery')} className="btn-premium !bg-brand-accent !text-brand-primary w-full shadow-none font-black text-xs uppercase">Get Deep Analysis</button>
                            </div>

                            <div className="glass-panel rounded-[3.5rem] p-10">
                                <h3 className="text-xl font-display font-bold mb-6">Account Summary</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Identity</span>
                                        <span className="text-sm font-bold truncate text-brand-primary ml-4">{user.email}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Account Tier</span>
                                        <span className="px-3 py-1 bg-brand-silk rounded-full text-[10px] font-black uppercase tracking-widest text-brand-secondary border border-brand-secondary/20">{user.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
