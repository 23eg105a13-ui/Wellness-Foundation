import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Link } from 'react-router-dom';

const goals = [
    { id: 'stress', label: 'Reduce Stress', icon: '🧘', desc: 'Anxiety, overwhelm, burnout' },
    { id: 'pain', label: 'Manage Pain', icon: '💆', desc: 'Chronic pain, migraines, tension' },
    { id: 'sleep', label: 'Better Sleep', icon: '🌙', desc: 'Insomnia, fatigue, restlessness' },
    { id: 'energy', label: 'Boost Energy', icon: '⚡', desc: 'Low energy, brain fog, lethargy' },
    { id: 'immunity', label: 'Build Immunity', icon: '🛡️', desc: 'Frequent illness, inflammation' },
    { id: 'detox', label: 'Detox & Cleanse', icon: '🌿', desc: 'Digestive issues, toxin buildup' },
];

const AIRecommendations = () => {
    const [step, setStep] = useState(1);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const toggle = (id) => setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);

    const analyze = () => {
        setLoading(true);
        setTimeout(() => { setLoading(false); setDone(true); setStep(3); }, 2500);
    };

    return (
        <MainLayout>
            {/* Hero */}
            <div className="pt-40 pb-24 bg-gradient-to-br from-brand-primary via-wellness-800 to-brand-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,163,115,0.15),transparent_60%)]"></div>
                <div className="section-container text-center relative z-10">
                    <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Powered by Intelligence</span>
                    <h1 className="text-6xl font-display font-bold text-white mb-6">Your Personal <em>AI Healer</em></h1>
                    <p className="text-wellness-50/70 text-xl max-w-2xl mx-auto">Tell us where you are, and our AI will guide you to exactly where you need to be on your wellness journey.</p>
                </div>
            </div>

            <div className="bg-brand-stone py-24">
                <div className="section-container max-w-4xl">
                    {/* Step Indicator */}
                    <div className="flex items-center justify-center gap-6 mb-20">
                        {['Goals', 'Details', 'Your Plan'].map((s, i) => (
                            <div key={s} className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${step > i ? 'bg-brand-primary text-white' : step === i + 1 ? 'bg-brand-secondary text-brand-primary' : 'bg-white border-2 border-slate-200 text-slate-400'}`}>{i + 1}</div>
                                <span className={`font-bold text-sm uppercase tracking-widest ${step === i + 1 ? 'text-brand-primary' : 'text-slate-400'}`}>{s}</span>
                                {i < 2 && <div className="w-12 h-px bg-slate-200 ml-3"></div>}
                            </div>
                        ))}
                    </div>

                    {step === 1 && (
                        <div className="animate-reveal">
                            <h2 className="text-4xl font-display font-bold text-brand-primary mb-4 text-center">What brings you to us?</h2>
                            <p className="text-center text-slate-500 mb-12 font-medium">Select all that apply. The more you share, the better we can help.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {goals.map(g => (
                                    <button key={g.id} onClick={() => toggle(g.id)}
                                        className={`p-8 rounded-3xl text-left border-2 transition-all duration-300 hover:-translate-y-1 ${selected.includes(g.id) ? 'border-brand-primary bg-brand-primary text-white shadow-xl shadow-brand-primary/20' : 'border-slate-200 bg-white hover:border-brand-primary/30'}`}>
                                        <span className="text-4xl mb-4 block">{g.icon}</span>
                                        <h3 className={`font-display font-bold text-lg mb-2 ${selected.includes(g.id) ? 'text-white' : 'text-brand-primary'}`}>{g.label}</h3>
                                        <p className={`text-sm font-medium ${selected.includes(g.id) ? 'text-white/70' : 'text-slate-400'}`}>{g.desc}</p>
                                    </button>
                                ))}
                            </div>
                            <div className="text-center">
                                <button className="btn-premium shadow-2xl shadow-brand-primary/20" onClick={() => setStep(2)} disabled={!selected.length}>
                                    Continue — {selected.length} goal{selected.length !== 1 ? 's' : ''} selected →
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-reveal max-w-2xl mx-auto">
                            <h2 className="text-4xl font-display font-bold text-brand-primary mb-4 text-center">Tell us about yourself</h2>
                            <p className="text-center text-slate-500 mb-12 font-medium">This helps us find the most compatible practitioners for your unique needs.</p>
                            <div className="space-y-6 bg-white rounded-[2.5rem] p-10 shadow-premium">
                                {[
                                    { label: 'How long have you dealt with these concerns?', opts: ['Under 1 month', '1-6 months', '6+ months', 'Several years'] },
                                    { label: 'Preferred therapy style?', opts: ['Remote/Online', 'In-person', 'Flexible'] },
                                    { label: 'Your wellness budget per month?', opts: ['< $50', '$50–$150', '$150–$300', '$300+'] },
                                ].map(q => (
                                    <div key={q.label}>
                                        <p className="font-bold text-brand-primary mb-4">{q.label}</p>
                                        <div className="flex flex-wrap gap-3">
                                            {q.opts.map(o => (
                                                <span key={o} className="px-5 py-2.5 border border-slate-200 rounded-full text-sm font-medium cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-all">{o}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-10 justify-center">
                                <button className="btn-outline" onClick={() => setStep(1)}>← Back</button>
                                <button className="btn-premium shadow-2xl" onClick={analyze}>Analyze My Profile ✨</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-reveal text-center">
                            {loading ? (
                                <div className="py-24">
                                    <div className="w-20 h-20 border-4 border-brand-accent border-t-brand-primary rounded-full animate-spin mx-auto mb-8"></div>
                                    <h2 className="text-3xl font-display font-bold text-brand-primary">Analyzing your wellness profile…</h2>
                                    <p className="text-slate-500 mt-4">Our AI is cross-referencing 2,400+ practitioners and 18 therapeutic modalities just for you.</p>
                                </div>
                            ) : (
                                <div>
                                    <div className="w-20 h-20 rounded-full bg-brand-accent/30 mx-auto flex items-center justify-center text-4xl mb-8">✨</div>
                                    <h2 className="text-4xl font-display font-bold text-brand-primary mb-4">Your Wellness Plan is Ready</h2>
                                    <p className="text-slate-500 text-lg mb-14 max-w-lg mx-auto">Based on your profile, we've identified 3 perfect-match practitioners and 5 essential products for you.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                                        {['Mindfulness Meditation', 'Ayurvedic Consultation', 'Breathwork Session'].map((r, i) => (
                                            <div key={r} className="bg-white rounded-3xl p-8 shadow-premium border border-brand-accent/20">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary">Match #{i + 1}</span>
                                                <h3 className="font-display font-bold text-xl text-brand-primary mt-3 mb-2">{r}</h3>
                                                <p className="text-slate-400 text-sm mb-6">98% compatibility based on your goals and preferences.</p>
                                                <Link to="/practitioners" className="btn-premium !py-3 !text-sm w-full">Book Session</Link>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="btn-outline" onClick={() => { setStep(1); setSelected([]); setDone(false); }}>Start Over</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default AIRecommendations;
