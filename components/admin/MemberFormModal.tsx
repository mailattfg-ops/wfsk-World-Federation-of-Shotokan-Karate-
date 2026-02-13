'use client'

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { addMember, updateMember } from "@/lib/actions/members";
import { ImageUpload } from "./ImageUpload";
import { toast } from "@/components/ui/Toaster";

interface MemberFormModalProps {
    isOpen: boolean;
    onClose?: () => void;
    editingMember?: any;
    role: string;
    country?: string;
    category: string;
}

export default function MemberFormModal({ isOpen, onClose, editingMember, role, country, category }: MemberFormModalProps) {
    const [isPending, startTransition] = useTransition();
    const [showRankBelt, setShowRankBelt] = useState(
        editingMember ? editingMember.show_belt : false
    );
    const router = useRouter();

    if (!isOpen) return null;

    const handleClose = () => {
        router.push(`?category=${category}`);
        if (onClose) onClose();
    };

    async function handleSubmit(formData: FormData) {
        // Validation for belt details
        if (showRankBelt) {
            const beltDan = formData.get('belt_dan');
            if (!beltDan) {
                toast.error("Belt/Dan is required when 'Show Rank/Belt' is enabled");
                return;
            }
        }

        startTransition(async () => {
            try {
                const result = editingMember
                    ? await updateMember(editingMember.id, formData)
                    : await addMember(formData);

                if (result.success) {
                    toast.success(editingMember ? "Member updated successfully" : "Member registered successfully");
                    handleClose();
                } else {
                    toast.error(result.error || "An unexpected error occurred");
                }
            } catch (err) {
                toast.error("Failed to process request. Check file size or connection.");
            }
        });
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border transition-all duration-500 scale-in-center no-scrollbar bg-[#111111] border-white/10`}>
                <header className={`px-8 py-6 border-b flex items-center justify-between border-white/20`}>
                    <div>
                        <span className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded mb-2 inline-block bg-white text-red-600`}>
                            {editingMember ? 'Update Resource' : 'System Registry'}
                        </span>
                        <h2 className="text-xl font-black text-white uppercase tracking-tighter">
                            {editingMember ? 'Edit Member' : 'Register New Member'}
                        </h2>
                    </div>
                    <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </header>

                <form action={handleSubmit} className="p-8 space-y-6">
                    <input type="hidden" name="role" value={role} />
                    {country && <input type="hidden" name="country" value={country} />}
                    <input type="hidden" name="image_url" value={editingMember?.image_url || "https://res.cloudinary.com/placeholder"} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
                        {/* Col 1: Identity Info & Visibility */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Full Identity Name</label>
                                <input
                                    name="name"
                                    required
                                    defaultValue={editingMember?.name}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-sm transition-all placeholder:text-white/10"
                                    placeholder="Enter full name"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Official Position</label>
                                <input
                                    name="position"
                                    required
                                    defaultValue={editingMember?.position}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-sm transition-all placeholder:text-white/10"
                                    placeholder="e.g. Chief Instructor"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Rank / Belt</label>
                                <input
                                    name="belt_dan"
                                    disabled={!showRankBelt}
                                    defaultValue={editingMember?.belt_dan}
                                    className={`w-full px-5 py-4 bg-white/5 border rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-sm transition-all placeholder:text-white/10 ${!showRankBelt ? 'opacity-30 border-white/5 cursor-not-allowed' : 'border-white/10'}`}
                                    placeholder={showRankBelt ? "e.g. Black Belt Dan 2 holder" : "Rank Disabled"}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Identity Visibility</label>
                                <div className="flex-1 flex items-center px-4 py-4 bg-white/5 border border-white/10 rounded-2xl gap-2">
                                    <input
                                        type="checkbox"
                                        name="show_belt"
                                        id="modal_show_belt"
                                        checked={showRankBelt}
                                        onChange={(e) => setShowRankBelt(e.target.checked)}
                                        value="true"
                                        className="w-4 h-4 accent-red-500"
                                    />
                                    <label htmlFor="modal_show_belt" className="text-[10px] font-black text-white/60 uppercase tracking-widest cursor-pointer select-none">Show Rank/Belt</label>
                                </div>
                            </div>
                        </div>

                        {/* Col 2: Profile Photo (Aligned to end with Col 1) */}
                        <div className="space-y-4 flex flex-col min-h-full">
                            <ImageUpload
                                name="image_file"
                                label="Member Profile Photo"
                                defaultValue={editingMember?.image_url}
                                required={!editingMember}
                                fullHeight
                            />
                        </div>

                        {/* Col 3: Belt Color selection (Aligned to end with Col 1) */}
                        <div className="space-y-4">
                            <div className={`space-y-4 transition-all duration-300 ${showRankBelt ? 'opacity-100' : 'opacity-30 pointer-events-none grayscale'}`}>
                                <div className="animate-in slide-in-from-top-2 duration-300">
                                    <label className="block text-[10px] font-black uppercase text-white/40 mb-4 tracking-widest">Official Belt Color</label>
                                    <div className="grid grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                                        {[
                                            { name: 'White', color: '#FFFFFF' },
                                            { name: 'Yellow', color: '#FACC15' },
                                            { name: 'Orange', color: '#F97316' },
                                            { name: 'Green', color: '#22C55E' },
                                            { name: 'Blue', color: '#3B82F6' },
                                            { name: 'Brown', color: '#78350F' },
                                            { name: 'Black', color: '#000000' },
                                            { name: 'Red', color: '#E81E26' },
                                        ].map((c) => (
                                            <label key={c.color} className="relative group cursor-pointer flex flex-col items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="belt_color"
                                                    value={c.color}
                                                    defaultChecked={editingMember?.belt_color === c.color || (c.name === 'Red' && !editingMember?.belt_color)}
                                                    disabled={!showRankBelt}
                                                    className="peer sr-only"
                                                />
                                                <div
                                                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center group-hover:scale-110 peer-checked:ring-2 peer-checked:ring-violet-500 peer-checked:ring-offset-2 peer-checked:ring-offset-[#111111] border-transparent shadow-xl`}
                                                    style={{ backgroundColor: c.color }}
                                                >
                                                    <div className="opacity-0 peer-checked:opacity-100 transition-opacity">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.name === 'White' || c.name === 'Yellow' ? '#000' : '#fff'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                </div>
                                                <span className="text-[7px] font-black uppercase tracking-tighter text-white/40 group-hover:text-white transition-colors">{c.name}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="pt-4 flex gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className={`w-1/3 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all underline underline-offset-8 decoration-white/0 hover:decoration-white/20`}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 bg-red-600 text-white hover:bg-red-700`}
                        >
                            {isPending ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>{editingMember ? 'Updating...' : 'Submitting...'}</span>
                                </>
                            ) : (
                                editingMember ? 'Confirm Update' : 'Register Now'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
