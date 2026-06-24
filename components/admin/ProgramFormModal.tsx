'use client'

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { addProgram, updateProgram } from "@/lib/actions/programs";
import { ImageUpload } from "./ImageUpload";
import { toast } from "@/components/ui/Toaster";

interface ProgramFormModalProps {
    isOpen: boolean;
    onClose?: () => void;
    editingProgram?: any;
}

export default function ProgramFormModal({ isOpen, onClose, editingProgram }: ProgramFormModalProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    if (!isOpen) return null;

    const handleClose = () => {
        router.push('/admin/programs');
        if (onClose) onClose();
    };

    async function handleSubmit(formData: FormData) {
        // Convert comma-separated badges into a JSON array string for the server action
        const badgesString = formData.get('badges_input') as string || '';
        const badgesArray = badgesString
            .split(',')
            .map(b => b.trim())
            .filter(Boolean);
        formData.set('badges', JSON.stringify(badgesArray));

        startTransition(async () => {
            try {
                const result = editingProgram
                    ? await updateProgram(editingProgram.id, formData)
                    : await addProgram(formData);

                if (result.success) {
                    toast.success(editingProgram ? "Program updated successfully" : "Program created successfully");
                    handleClose();
                } else {
                    toast.error(result.error || "An unexpected error occurred");
                }
            } catch (err) {
                toast.error("Failed to process request. Check connection.");
            }
        });
    }

    // Pre-populate badges field as a comma-separated string
    const defaultBadges = editingProgram?.badges ? editingProgram.badges.join(', ') : '13-40 Years, All Levels';

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] rounded-3xl shadow-2xl border border-white/10 transition-all duration-300 scale-in-center no-scrollbar">
                <header className="px-5 py-5 md:px-8 md:py-6 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">
                            {editingProgram ? 'Edit Program Card' : 'Create New Program Card'}
                        </h2>
                    </div>
                    <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </header>

                <form action={handleSubmit} className="p-5 md:p-8 space-y-4 md:space-y-6">
                    <input type="hidden" name="image_url" value={editingProgram?.image_url || "/images/who_we_are_image1.webp"} />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 lg:gap-y-8">
                        {/* Col 1: Text Fields */}
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Program Title</label>
                                <input
                                    name="title"
                                    required
                                    defaultValue={editingProgram?.title}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                    placeholder="e.g. Kick Boxing training"
                                />
                            </div>

                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Badges / Tags (Comma separated)</label>
                                <input
                                    name="badges_input"
                                    required
                                    defaultValue={defaultBadges}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                    placeholder="e.g. 13-40 Years, All Levels"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Display Order</label>
                                    <input
                                        type="number"
                                        name="display_order"
                                        required
                                        defaultValue={editingProgram?.display_order ?? 0}
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Program Description</label>
                                <textarea
                                    name="description"
                                    required
                                    defaultValue={editingProgram?.description}
                                    rows={4}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10 resize-none min-h-[120px]"
                                    placeholder="Enter program description details..."
                                />
                            </div>
                        </div>

                        {/* Col 2: Media Upload */}
                        <div className="flex flex-col">
                            <ImageUpload
                                name="image_file"
                                label="Program Cover Image"
                                defaultValue={editingProgram?.image_url}
                                required={!editingProgram}
                                fullHeight
                                maxSizeMB={4}
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="w-1/3 py-3 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all underline underline-offset-8 decoration-white/0 hover:decoration-white/20"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className={`flex-1 py-3 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 bg-red-600 text-white hover:bg-red-700`}
                        >
                            {isPending ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>{editingProgram ? 'Updating...' : 'Submitting...'}</span>
                                </>
                            ) : (
                                editingProgram ? 'Confirm Update' : 'Create Program'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
