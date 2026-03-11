import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import api from '../api/axios';

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'];
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Booking = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [sessionType, setSessionType] = useState('video');
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const confirmBooking = async () => {
        setLoading(true);
        try {
            const bookingData = {
                practitionerName: "Dr. Amara Singh",
                practitionerTitle: "Ayurvedic Medicine",
                dateTime: `Feb ${selectedDay + 17}, ${selectedTime}`,
                type: sessionType
            };
            await api.post('/bookings', bookingData);
            setStep(3);
            setTimeout(() => navigate('/dashboard'), 3000);
        } catch (error) {
            console.error('Booking failed:', error);
            alert('Failed to confirm booking. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="pt-32 pb-24 bg-brand-stone min-h-screen">
                <div className="section-container max-w-4xl">
                    <div className="mb-12">
                        <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Schedule Your Session</span>
                        <h1 className="text-5xl font-display font-bold text-brand-primary">Book with Dr. Amara</h1>
                    </div>

                    {step === 1 && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-reveal">
                            <div className="lg:col-span-2 space-y-8">
                                {/* Session Type */}
                                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium">
                                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-6">Session Format</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[{ k: 'video', label: 'Video Call', icon: '🎥' }, { k: 'phone', label: 'Phone', icon: '📞' }, { k: 'inperson', label: 'In-Person', icon: '📍' }].map(t => (
                                            <button key={t.k} onClick={() => setSessionType(t.k)}
                                                className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${sessionType === t.k ? 'border-brand-primary bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'border-slate-200 hover:border-brand-primary/40'}`}>
                                                <span className="text-3xl mb-3 block">{t.icon}</span>
                                                <span className={`text-xs font-black uppercase tracking-widest ${sessionType === t.k ? 'text-white' : 'text-brand-primary'}`}>{t.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Calendar */}
                                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium">
                                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-6">Select a Day</h3>
                                    <div className="grid grid-cols-7 gap-3">
                                        {daysOfWeek.map((d, i) => (
                                            <button key={d} onClick={() => setSelectedDay(i)}
                                                className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 border-2 transition-all duration-300 ${selectedDay === i ? 'border-brand-primary bg-brand-primary text-white' : 'border-slate-200 hover:border-brand-primary/30'}`}>
                                                <span className={`text-[9px] font-black uppercase tracking-widest ${selectedDay === i ? 'text-white/70' : 'text-slate-400'}`}>{d}</span>
                                                <span className={`text-lg font-display font-bold ${selectedDay === i ? 'text-white' : 'text-brand-primary'}`}>{i + 17}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium">
                                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-6">Available Times</h3>
                                    <div className="grid grid-cols-4 gap-4">
                                        {timeSlots.map(t => (
                                            <button key={t} onClick={() => setSelectedTime(t)}
                                                className={`py-4 rounded-2xl border-2 text-sm font-bold transition-all duration-300 ${selectedTime === t ? 'border-brand-primary bg-brand-primary text-white shadow-md' : 'border-slate-200 hover:border-brand-primary/30 text-brand-primary'}`}>
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div>
                                <div className="bg-white rounded-[2.5rem] p-8 shadow-luxury sticky top-28">
                                    <div className="flex gap-4 mb-6 pb-6 border-b border-slate-100">
                                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-2xl object-cover" alt="Dr. Amara" />
                                        <div>
                                            <h4 className="font-display font-bold text-brand-primary">Dr. Amara Singh</h4>
                                            <p className="text-xs text-slate-400">Ayurvedic Medicine</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between text-sm"><span className="text-slate-500">Format</span><span className="font-bold capitalize">{sessionType}</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-slate-500">Day</span><span className="font-bold">{selectedDay !== null ? `Feb ${selectedDay + 17}` : '—'}</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-slate-500">Time</span><span className="font-bold">{selectedTime || '—'}</span></div>
                                        <div className="flex justify-between pt-4 border-t border-slate-100"><span className="font-black">Session Fee</span><span className="text-2xl font-display font-bold text-brand-primary">$120</span></div>
                                    </div>
                                    <button onClick={() => setStep(2)} disabled={selectedDay === null || !selectedTime} className="btn-premium w-full !py-5 shadow-xl shadow-brand-primary/20">
                                        Confirm & Pay →
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-reveal max-w-xl mx-auto">
                            <div className="bg-white rounded-[3rem] p-12 shadow-luxury">
                                <h2 className="text-3xl font-display font-bold text-brand-primary mb-8">Payment Details</h2>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Card Number</label>
                                        <input className="w-full px-6 py-4 bg-brand-stone border border-slate-200 rounded-2xl outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium" placeholder="•••• •••• •••• ••••" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expiry</label>
                                            <input className="w-full px-6 py-4 bg-brand-stone border border-slate-200 rounded-2xl outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium" placeholder="MM / YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">CVV</label>
                                            <input className="w-full px-6 py-4 bg-brand-stone border border-slate-200 rounded-2xl outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium" placeholder="•••" />
                                        </div>
                                    </div>
                                    <div className="p-5 bg-brand-accent/20 rounded-2xl flex gap-3 text-sm">
                                        <span>🔒</span>
                                        <p className="text-brand-primary font-medium">Your payment is secured by 256-bit SSL encryption. We never store your card data.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <button onClick={() => setStep(1)} className="btn-outline flex-1" disabled={loading}>← Back</button>
                                    <button onClick={confirmBooking} className="btn-premium flex-1 !py-5 shadow-xl" disabled={loading}>
                                        {loading ? 'Processing...' : 'Pay $120 →'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center py-24 animate-reveal">
                            <div className="w-28 h-28 rounded-full bg-green-50 mx-auto flex items-center justify-center text-6xl mb-8 shadow-xl">✅</div>
                            <h2 className="text-4xl font-display font-bold text-brand-primary mb-4">Booking Confirmed!</h2>
                            <p className="text-slate-500 text-xl">A confirmation email has been sent. Redirecting you to your dashboard…</p>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default Booking;
