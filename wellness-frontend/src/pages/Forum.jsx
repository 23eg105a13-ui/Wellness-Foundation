import React from 'react';
import MainLayout from '../components/MainLayout';
import { Link } from 'react-router-dom';

const threads = [
    { id: 1, user: 'Amara S.', avatar: 'A', title: 'Has anyone tried Ayurvedic Panchakarma? What was your experience?', cat: 'Ayurveda', replies: 42, views: 1204, time: '2h ago', hot: true },
    { id: 2, user: 'Marcus L.', avatar: 'M', title: 'Daily breathwork vs meditation — which helped your anxiety more?', cat: 'Mindfulness', replies: 87, views: 3341, time: '5h ago', hot: true },
    { id: 3, user: 'Yuki T.', avatar: 'Y', title: 'Looking for a TCM practitioner in South East Asia — any recommendations?', cat: 'TCM', replies: 19, views: 508, time: '1d ago', hot: false },
    { id: 4, user: 'Sofia R.', avatar: 'S', title: 'My 30-day yoga journey — a complete transformation story', cat: 'Yoga', replies: 134, views: 8922, time: '3d ago', hot: true },
    { id: 5, user: 'Dr. Chen', avatar: 'D', title: 'Scientific evidence behind Reiki energy healing — let\'s discuss', cat: 'Reiki', replies: 66, views: 2105, time: '1w ago', hot: false },
];

const Forum = () => (
    <MainLayout>
        <div className="pt-32 pb-12 bg-brand-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,#D4A373,transparent_70%)]"></div>
            <div className="section-container text-center relative z-10">
                <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Wisdom in Circle</span>
                <h1 className="text-6xl font-display font-bold text-white mb-4">Community&nbsp;<em>Forum</em></h1>
                <p className="text-wellness-50/60 text-lg max-w-lg mx-auto mb-10">Real stories, honest questions, and shared wisdom from our global community of wellness seekers.</p>
                <Link to="/forum/ask" className="btn-premium !bg-brand-secondary !text-brand-primary inline-flex">Ask a Question →</Link>
            </div>
        </div>

        <div className="bg-brand-stone min-h-screen py-16">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-premium">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5">Categories</h4>
                            <ul className="space-y-3">
                                {['All Topics', 'Ayurveda', 'Mindfulness', 'Yoga', 'TCM', 'Naturopathy', 'Reiki', 'Nutrition'].map(c => (
                                    <li key={c} className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-sm font-semibold text-brand-primary/70 group-hover:text-brand-primary transition-colors">{c}</span>
                                        <span className="text-[9px] font-black text-slate-300">→</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-brand-primary rounded-3xl p-8 text-white">
                            <h4 className="font-display font-bold text-lg text-brand-accent mb-4">Share Your Story</h4>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">Your healing journey could inspire thousands. Start a thread today.</p>
                            <Link to="/forum/ask" className="block text-center py-3 bg-brand-accent text-brand-primary rounded-xl font-black text-xs uppercase tracking-widest">Start Thread</Link>
                        </div>
                    </div>

                    {/* Thread List */}
                    <div className="lg:col-span-3 space-y-5">
                        {threads.map(t => (
                            <div key={t.id} className="bg-white rounded-3xl p-8 shadow-premium hover:-translate-y-1 hover:shadow-luxury transition-all duration-300 group cursor-pointer">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounThank you for-full bg-brand-accent text-brand-primary flex items-center justify-center font-display font-bold text-xl shrink-0 rounded-2xl">
                                        {t.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <span className="px-3 py-1 bg-brand-primary/5 text-brand-primary rounded-full text-[9px] font-black uppercase tracking-[0.2em]">{t.cat}</span>
                                            {t.hot && <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-[9px] font-black uppercase tracking-widest">🔥 Trending</span>}
                                        </div>
                                        <h3 className="font-display font-bold text-brand-primary text-xl mb-3 group-hover:text-brand-secondary transition-colors leading-tight">{t.title}</h3>
                                        <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                            <span>{t.user}</span>
                                            <span>💬 {t.replies} replies</span>
                                            <span>👁 {t.views.toLocaleString()} views</span>
                                            <span>{t.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
);

export default Forum;
