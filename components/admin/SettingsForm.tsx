'use client'

import { useState } from 'react'

interface SettingsFormProps {
    setting: any;
    onUpdate: (formData: FormData) => Promise<any>;
}

export default function SettingsForm({ setting, onUpdate }: SettingsFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus('idle');
        try {
            await onUpdate(formData);
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form action={handleSubmit} className="flex flex-col md:flex-row md:items-end gap-6">
            <input type="hidden" name="id" value={setting.id} />
            <div className="flex-1 space-y-2">
                <label className="block text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                    Setting Key: <span className="text-zinc-800">{setting.key}</span>
                </label>
                <input
                    name="key"
                    type="hidden"
                    value={setting.key}
                />
                <input
                    name="value"
                    defaultValue={setting.value}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all font-medium"
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 whitespace-nowrap min-w-[140px] flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-600 text-white' :
                        status === 'error' ? 'bg-red-600 text-white' :
                            'bg-[#111111] text-white hover:bg-black'
                    } disabled:opacity-50`}
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Saving...</span>
                    </>
                ) : (
                    status === 'success' ? 'Saved!' :
                        status === 'error' ? 'Failed' :
                            'Save Change'
                )}
            </button>
        </form>
    );
}
