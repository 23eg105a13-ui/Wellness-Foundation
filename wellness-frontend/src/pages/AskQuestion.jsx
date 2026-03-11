import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const AskQuestion = () => {
    const [form, setForm] = useState({ title: '', category: '', body: '' });

    return (
        <MainLayout>
            <div className="pt-32 pb-24 bg-brand-stone min-h-screen">
                <div className="section-container max-w-3xl">
                    <div className="mb-12">
                        <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Share Your Questions</span>
                        <h1 className="text-5xl font-display font-bold text-brand-primary">Ask the Community</h1>
                        <p className="text-slate-500 text-lg mt-4 font-medium">Our global community of wellness seekers and practitioners will guide you with honest, caring answers.</p>
                    </div>

                    <div className="bg-white rounded-[3rem] p-12 shadow-luxury">
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60">Question Title</label>
                                <input
                                    value={form.title}
                                    onChange={e => setForm({ ...form, title: e.target.value })}
                                    className="w-full px-8 py-5 bg-brand-stone border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all text-lg font-medium"
                                    placeholder="e.g., What is the best Ayurvedic remedy for stress?"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60">Topic Category</label>
                                <select
                                    value={form.category}
                                    onChange={e => setForm({ ...form, category: e.target.value })}
                                    className="w-full px-8 py-5 bg-brand-stone border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all font-medium appearance-none">
                                    <option value="">Select a category…</option>
                                    <option>Ayurveda</option>
                                    <option>Mindfulness & Meditation</option>
                                    <option>Yoga & Breathwork</option>
                                    <option>Traditional Chinese Medicine</option>
                                    <option>Naturopathy</option>
                                    <option>Energy Healing</option>
                                    <option>Nutrition & Detox</option>
                                    <option>General Wellness</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60">Detail Your Question</label>
                                <textarea
                                    rows={8}
                                    value={form.body}
                                    onChange={e => setForm({ ...form, body: e.target.value })}
                                    className="w-full px-8 py-5 bg-brand-stone border border-slate-200 rounded-3xl focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary outline-none transition-all font-medium resize-none leading-relaxed"
                                    placeholder="Share your context, symptoms, previous attempts, and what kind of guidance you're looking for. The more detail you share, the more precise the help you'll receive."
                                />
                                <p className="text-right text-[10px] text-slate-400 font-bold">{form.body.length} / 2000 characters</p>
                            </div>

                            <div className="p-6 bg-brand-accent/20 rounded-2xl">
                                <h4 className="font-bold text-brand-primary text-sm mb-2">💡 Tips for Great Responses</h4>
                                <ul className="text-xs text-slate-600 space-y-1">
                                    <li>• Be specific about your goals and current health situation.</li>
                                    <li>• Mention any therapies you've already tried.</li>
                                    <li>• Add relevant details like age, lifestyle factors, or duration of concerns.</li>
                                </ul>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Link to="/forum" className="btn-outline">← Back to Forum</Link>
                                <button className="btn-premium flex-1 !py-5 shadow-xl shadow-brand-primary/20">Post Question →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AskQuestion;
