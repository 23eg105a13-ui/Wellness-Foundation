import React from 'react';
import MainLayout from '../components/MainLayout';

const notifs = [
    { id: 1, type: 'booking', icon: '📅', title: 'Session Confirmed', msg: 'Your Mindfulness Meditation session with Dr. Amara Singh is confirmed for tomorrow at 10:00 AM.', time: 'Just now', unread: true },
    { id: 2, type: 'order', icon: '📦', title: 'Order Shipped', msg: 'Your Tibetan Singing Bowl Set has been dispatched and will arrive in 3-5 business days.', time: '2h ago', unread: true },
    { id: 3, type: 'forum', icon: '💬', title: 'New Reply on Your Thread', msg: 'Marcus L. replied to your post in "Has anyone tried Panchakarma?"', time: '5h ago', unread: true },
    { id: 4, type: 'ai', icon: '✨', title: 'Your AI Wellness Report is Ready', msg: 'We\'ve analyzed your recent activity and have new practitioner recommendations for you.', time: '1d ago', unread: false },
    { id: 5, type: 'promo', icon: '🎁', title: 'Exclusive Member Offer', msg: 'Get 20% off your next session this weekend. Limited slots available.', time: '3d ago', unread: false },
];

const Notifications = () => (
    <MainLayout>
        <div className="pt-32 pb-24 bg-brand-stone min-h-screen">
            <div className="section-container max-w-3xl">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Activity Center</span>
                        <h1 className="text-5xl font-display font-bold text-brand-primary">Notifications</h1>
                    </div>
                    <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand-secondary transition-colors">Mark all as read</button>
                </div>

                <div className="space-y-4">
                    {notifs.map(n => (
                        <div key={n.id} className={`group flex gap-6 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${n.unread ? 'bg-white shadow-premium border border-brand-accent/20' : 'bg-white/50 shadow-sm'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${n.unread ? 'bg-brand-primary' : 'bg-slate-100'}`}>
                                {n.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h3 className={`font-display font-bold text-lg ${n.unread ? 'text-brand-primary' : 'text-slate-400'}`}>{n.title}</h3>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{n.time}</span>
                                        {n.unread && <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full shadow-sm"></div>}
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{n.msg}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </MainLayout>
);

export default Notifications;
