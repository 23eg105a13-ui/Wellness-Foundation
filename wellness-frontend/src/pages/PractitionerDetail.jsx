import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const allPractitioners = [
    { id: 1, name: 'Dr. Amara Singh', title: 'Ayurvedic Medicine & Detox', exp: '12 yrs', rating: 4.9, reviews: 214, price: 120, location: 'Mumbai, IN (Remote Available)', bio: 'Dr. Amara Singh is a board-certified Ayurvedic physician with over 12 years of experience helping clients overcome chronic illness, restore balance, and achieve vibrant health through traditional Indian healing wisdom. She is renowned for her personalized approach and compassionate care.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800', tags: ['Ayurveda', 'Panchakarma', 'Detox', 'Herbal Medicine', 'Nutrition'], credentials: 'B.A.M.S, M.D. (Ayurveda)', languages: 'English, Hindi, Sanskrit' },
    { id: 2, name: 'James Okafor', title: 'Mindfulness & Cognitive Behavioral Therapy', exp: '8 yrs', rating: 4.8, reviews: 187, price: 95, location: 'London, UK (Remote Available)', bio: 'James Okafor is a certified mindfulness coach and CBT practitioner with 8 years of experience helping individuals overcome anxiety, depression, and stress. His evidence-based methods combine modern psychology with ancient mindfulness practices for lasting results.', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800', tags: ['Mindfulness', 'CBT', 'Anxiety', 'Stress', 'Depression'], credentials: 'MSc Psychology, MBSR Certified', languages: 'English, French' },
    { id: 3, name: 'Dr. Lena Park', title: 'Acupuncture & Traditional Chinese Medicine', exp: '15 yrs', rating: 5.0, reviews: 302, price: 150, location: 'Seoul, KR (Remote Available)', bio: 'Dr. Lena Park is a world-renowned acupuncturist and TCM expert with 15 years of clinical experience. She has treated thousands of patients for chronic pain, hormonal imbalances, and stress-related disorders using time-tested Traditional Chinese Medicine protocols.', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800', tags: ['Acupuncture', 'TCM', 'Pain Relief', 'Hormonal Balance', 'Cupping'], credentials: 'Ph.D. TCM, Licensed Acupuncturist', languages: 'English, Korean, Mandarin' },
    { id: 4, name: 'Sofia Reyes', title: 'Breathwork & Yoga Therapy', exp: '6 yrs', rating: 4.7, reviews: 134, price: 80, location: 'Barcelona, ES (Remote Available)', bio: 'Sofia Reyes is a certified yoga therapist and breathwork facilitator specializing in stress reduction and emotional healing. Her integrated approach combines pranayama, somatic movement, and mindful breathing to restore vitality and inner peace.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800', tags: ['Yoga', 'Breathwork', 'Stress', 'Somatic', 'Pranayama'], credentials: 'RYT-500, YACEP, Trauma-Informed', languages: 'English, Spanish, Catalan' },
    { id: 5, name: 'Ravi Menon', title: 'Naturopathy & Integrative Nutrition', exp: '10 yrs', rating: 4.9, reviews: 257, price: 110, location: 'Bangalore, IN (Remote Available)', bio: 'Ravi Menon is a leading naturopath and integrative nutrition expert with a decade of experience helping clients reverse lifestyle diseases, optimize gut health, and achieve sustainable wellness through food-as-medicine principles.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800', tags: ['Naturopathy', 'Nutrition', 'Detox', 'Gut Health', 'Lifestyle'], credentials: 'BNYS, Certified Nutritionist', languages: 'English, Hindi, Tamil, Kannada' },
    { id: 6, name: 'Claire Dubois', title: 'Reiki & Energy Healing', exp: '9 yrs', rating: 4.8, reviews: 176, price: 100, location: 'Paris, FR (Remote Available)', bio: 'Claire Dubois is a Reiki Master Teacher and energy healer with 9 years of experience guiding individuals through deep energetic transformation. Her sessions are known for creating profound shifts in emotional blockages, chronic fatigue, and spiritual disconnection.', img: 'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?auto=format&fit=crop&q=80&w=800', tags: ['Reiki', 'Energy Healing', 'Chakra', 'Aura', 'Spiritual'], credentials: 'Reiki Master Teacher (Level III)', languages: 'English, French, Italian' },
];

const PractitionerDetail = () => {
    const { id } = useParams();
    const [tab, setTab] = useState('about');

    const p = allPractitioners.find(pr => pr.id === parseInt(id));
    if (!p) return <Navigate to="/practitioners" />;

    return (
        <MainLayout>
            <div className="pt-32 bg-brand-stone min-h-screen">
                {/* Hero */}
                <div className="bg-brand-primary">
                    <div className="section-container max-w-5xl py-16">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <img src={p.img} className="w-48 h-48 rounded-[2.5rem] object-cover shadow-luxury border-4 border-white/20 shrink-0" alt={p.name} />
                            <div className="text-white flex-1">
                                <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Verified Practitioner</span>
                                <h1 className="text-5xl font-display font-bold mb-3">{p.name}</h1>
                                <p className="text-white/70 text-xl mb-6">{p.title}</p>
                                <div className="flex flex-wrap gap-6 text-sm font-bold">
                                    <span className="text-brand-accent">★ {p.rating} ({p.reviews} reviews)</span>
                                    <span className="text-white/60">📍 {p.location}</span>
                                    <span className="text-white/60">🗂 {p.exp} experience</span>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-6">
                                    {p.tags.map(t => <span key={t} className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">{t}</span>)}
                                </div>
                            </div>
                            <div className="bg-white rounded-[2rem] p-8 shadow-luxury text-center min-w-[200px] shrink-0">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Session from</p>
                                <p className="text-5xl font-display font-bold text-brand-primary mb-1">${p.price}</p>
                                <p className="text-xs text-slate-500 mb-8">/session</p>
                                <Link to={`/booking/${p.id}`} className="btn-premium w-full mb-4 !py-4 block text-center">Book Now</Link>
                                <button className="w-full py-3 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-secondary transition-colors">Message</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-container max-w-5xl">
                    {/* Tabs */}
                    <div className="flex gap-8 border-b border-slate-200 mb-12">
                        {['about', 'reviews', 'availability'].map(t => (
                            <button key={t} onClick={() => setTab(t)} className={`pb-4 font-black text-sm uppercase tracking-widest capitalize transition-all border-b-2 ${tab === t ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400 hover:text-brand-primary'}`}>{t}</button>
                        ))}
                    </div>

                    {tab === 'about' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-reveal">
                            <div className="md:col-span-2 space-y-8">
                                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium">
                                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-6">About</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">{p.bio}</p>
                                </div>
                                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium">
                                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-6">Specializations</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {p.tags.map(s => (
                                            <div key={s} className="flex items-center gap-3">
                                                <span className="w-2 h-2 bg-brand-secondary rounded-full shrink-0"></span>
                                                <span className="text-sm font-semibold text-brand-primary">{s}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {[{ t: 'Credentials', v: p.credentials }, { t: 'Languages', v: p.languages }, { t: 'Session Format', v: 'Video, Phone, In-Person' }, { t: 'Response Time', v: 'Usually within 2 hours' }].map(i => (
                                    <div key={i.t} className="bg-white rounded-3xl p-8 shadow-premium">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{i.t}</p>
                                        <p className="font-bold text-brand-primary">{i.v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {tab === 'reviews' && (
                        <div className="space-y-6 animate-reveal">
                            {[{ n: 'Priya M.', r: 5, c: `${p.name}'s approach is deeply personalized and life-changing. I feel completely transformed.`, d: '3 days ago' }, { n: 'Tom K.', r: 5, c: `I've seen many practitioners over the years. None compare to the depth of knowledge and care here.`, d: '2 weeks ago' }].map(r => (
                                <div key={r.n} className="bg-white rounded-3xl p-8 shadow-premium">
                                    <div className="flex justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center font-bold text-brand-primary">{r.n[0]}</div>
                                            <div>
                                                <p className="font-bold text-brand-primary">{r.n}</p>
                                                <p className="text-xs text-slate-400">{r.d}</p>
                                            </div>
                                        </div>
                                        <div className="text-brand-secondary font-bold">{'★'.repeat(r.r)}</div>
                                    </div>
                                    <p className="text-slate-600 italic">"{r.c}"</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {tab === 'availability' && (
                        <div className="text-center py-20 animate-reveal">
                            <p className="text-6xl mb-6">📅</p>
                            <h3 className="text-2xl font-display font-bold text-brand-primary mb-4">Real-time booking available</h3>
                            <p className="text-slate-500 mb-8">Click below to choose your preferred date and time with {p.name}.</p>
                            <Link to={`/booking/${p.id}`} className="btn-premium">View Available Slots →</Link>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default PractitionerDetail;
