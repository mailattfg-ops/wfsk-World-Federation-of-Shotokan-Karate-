'use client'

import { useState, useTransition } from 'react'
import { ConfirmModal } from './ConfirmModal'

interface DeleteButtonProps {
    onDelete: () => Promise<any>;
    confirmMessage?: string;
    title?: string;
}

export function DeleteButton({
    onDelete,
    confirmMessage = "Are you sure you want to remove this item?",
    title = "Confirm Deletion"
}: DeleteButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [showModal, setShowModal] = useState(false);

    const handleConfirm = () => {
        startTransition(async () => {
            await onDelete();
        });
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                disabled={isPending}
                className="p-2.5 border border-white/5 text-zinc-600 hover:text-red-500 hover:border-red-500/20 hover:bg-red-500/5 rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50 flex items-center justify-center bg-white/2"
                title="Remove Item"
            >
                {isPending ? (
                    <svg className="animate-spin h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                )}
            </button>

            <ConfirmModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
                title={title}
                message={confirmMessage}
                confirmText="Delete Now"
                isDestructive={true}
            />
        </>
    );
}
