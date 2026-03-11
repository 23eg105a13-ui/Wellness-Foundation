import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import api from '../api/axios';

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: user.name || '',
        bio: user.bio || 'Wellness enthusiast on a journey to holistic health.',
        healthFocus: user.healthFocus || 'Stress Management, Mindfulness',
        location: user.location || 'San Francisco, CA',
        age: user.age || 28,
        gender: user.gender || 'Not specified'
    });

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await api.get('/users/me');
            setUser(response.data);
            setFormData({
                name: response.data.name || '',
                bio: response.data.bio || 'Wellness enthusiast on a journey to holistic health.',
                healthFocus: response.data.healthFocus || 'Stress Management, Mindfulness',
                location: response.data.location || 'San Francisco, CA',
                age: response.data.age || 28,
                gender: response.data.gender || 'Not specified'
            });
            // Update local storage to keep it in sync
            localStorage.setItem('user', JSON.stringify({ ...JSON.parse(localStorage.getItem('user') || '{}'), ...response.data }));
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const response = await api.put('/users/profile', formData);
            setUser(response.data);
            localStorage.setItem('user', JSON.stringify({ ...JSON.parse(localStorage.getItem('user') || '{}'), ...response.data }));
            setIsEditing(false);
        } catch (error) {
            alert('Failed to update profile. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="pt-32 pb-24 bg-brand-stone min-h-screen">
                <div className="section-container max-w-5xl">
                    {/* Profile Header */}
                    <div className="relative mb-12 rounded-[3rem] overflow-hidden shadow-luxury">
                        <div className="h-64 bg-gradient-to-r from-brand-primary to-wellness-800 relative">
                            <img src="https://images.unsplash.com/photo-1518310383802-640c2de31012?auto=format&fit=crop&q=80&w=1920" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="cover" />
                        </div>
                        <div className="bg-white px-12 pb-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between -mt-16 relative">
                                <div className="flex items-end gap-8">
                                    <div className="w-32 h-32 rounded-[2rem] bg-brand-accent text-brand-primary flex items-center justify-center font-display font-bold text-5xl shadow-xl border-4 border-white shrink-0">
                                        {user.name?.[0]?.toUpperCase() || 'W'}
                                    </div>
                                    <div className="pb-4">
                                        {isEditing ? (
                                            <input
                                                className="text-4xl font-display font-bold text-brand-primary bg-slate-50 border-b-2 border-brand-primary outline-none px-2 py-1"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        ) : (
                                            <h1 className="text-4xl font-display font-bold text-brand-primary">{user.name || 'Wellness Member'}</h1>
                                        )}
                                        <div className="flex items-center gap-4 mt-2">
                                            <span className="px-4 py-1.5 bg-brand-primary text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full">{user.role || 'Patient'}</span>
                                            <span className="text-sm text-slate-400 font-medium">{user.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 pb-4">
                                    {isEditing ? (
                                        <>
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="btn-outline !py-3 !px-6 text-sm"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                disabled={loading}
                                                className="btn-premium !py-3 !px-6 text-sm"
                                            >
                                                {loading ? 'Saving...' : 'Save Changes'}
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="btn-outline !py-3 !px-6 text-sm"
                                            >
                                                Edit Profile
                                            </button>
                                            <button
                                                onClick={() => setShowUpgradeModal(true)}
                                                className="btn-premium !py-3 !px-6 text-sm"
                                            >
                                                Upgrade Plan
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="space-y-8">
                            {/* Stats */}
                            {[
                                { t: 'Sessions Completed', v: 12 },
                                { t: 'Products Ordered', v: 8 },
                                { t: 'Forum Contributions', v: 24 },
                                { t: 'Wellness Score', v: '9.2 / 10' },
                            ].map(s => (
                                <div key={s.t} className="bg-white rounded-3xl p-8 shadow-premium flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-500">{s.t}</span>
                                    <span className="text-3xl font-display font-bold text-brand-primary">{s.v}</span>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            {/* Account Details */}
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-premium">
                                <h3 className="text-2xl font-display font-bold text-brand-primary mb-8 pb-4 border-b border-slate-100">Personal Information</h3>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Bio', value: formData.bio, key: 'bio' },
                                        { label: 'Health Focus', value: formData.healthFocus, key: 'healthFocus' },
                                        { label: 'Location', value: formData.location, key: 'location' },
                                        { label: 'Age', value: formData.age, key: 'age', type: 'number' },
                                        { label: 'Gender', value: formData.gender, key: 'gender' },
                                    ].map(f => (
                                        <div key={f.label} className="flex flex-col gap-2 py-3 border-b border-slate-50 last:border-0">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{f.label}</span>
                                            {isEditing ? (
                                                f.key === 'bio' ? (
                                                    <textarea
                                                        className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-200 outline-none focus:border-brand-primary transition-all text-sm font-medium h-32"
                                                        value={f.value}
                                                        onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                                                    />
                                                ) : (
                                                    <input
                                                        type={f.type || 'text'}
                                                        className="w-full bg-slate-50 px-6 py-3 rounded-full border border-slate-200 outline-none focus:border-brand-primary transition-all text-sm font-bold"
                                                        value={f.value}
                                                        onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                                                    />
                                                )
                                            ) : (
                                                <span className="font-bold text-brand-primary text-sm">{f.value || '—'}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-premium">
                                <h3 className="text-2xl font-display font-bold text-brand-primary mb-8 pb-4 border-b border-slate-100">Recent Activity</h3>
                                <div className="space-y-5">
                                    {[
                                        { t: 'Booked session with Dr. Amara Singh', time: '2h ago', icon: '📅' },
                                        { t: 'Purchased Himalayan Rose Quartz Gua Sha', time: '3d ago', icon: '🛍️' },
                                        { t: 'Posted in Mindfulness forum', time: '1w ago', icon: '💬' },
                                    ].map(a => (
                                        <div key={a.t} className="flex items-start gap-5 p-5 rounded-2xl hover:bg-brand-stone transition-colors cursor-pointer">
                                            <span className="text-2xl w-10 flex-shrink-0">{a.icon}</span>
                                            <div>
                                                <p className="font-semibold text-brand-primary text-sm">{a.t}</p>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{a.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upgrade Modal Simulation */}
            {showUpgradeModal && (
                <div className="fixed inset-0 bg-brand-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                    <div className="bg-white rounded-[3rem] p-12 max-w-md w-full shadow-luxury animate-reveal">
                        <div className="text-center mb-10">
                            <div className="text-4xl mb-6">✨</div>
                            <h3 className="text-3xl font-display font-bold text-brand-primary mb-4">Ascend to Premium</h3>
                            <p className="text-slate-500 font-medium">Unlock exclusive access to senior practitioners, personalized AI wellness paths, and limited edition products.</p>
                        </div>
                        <div className="space-y-4">
                            <button
                                onClick={() => setShowUpgradeModal(false)}
                                className="btn-premium w-full !py-4"
                            >
                                Contact Concierge
                            </button>
                            <button
                                onClick={() => setShowUpgradeModal(false)}
                                className="w-full py-4 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-primary transition-colors"
                            >
                                Maybe Later
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default Profile;
