import { getBranches } from "@/lib/actions/branches";
import BranchFormModal from "@/components/admin/BranchFormModal";
import AdminBranchesClient from "./AdminBranchesClient";

export default async function BranchesManagementPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string; edit?: string; showModal?: string }>;
}) {
    const params = await searchParams;
    const showModal = params.showModal === "true";
    const editId = params.edit;

    const allBranches = await getBranches();

    // Determine the editing branch if in edit mode
    const editingBranch = editId ? allBranches.find((b: any) => b.id === editId) : null;

    return (
        <div className="flex flex-col h-full animate-in fade-in duration-700">
            <AdminBranchesClient
                initialBranches={allBranches}
                searchParams={params}
            />

            {/* Client-Side Modal for Add/Edit */}
            <BranchFormModal
                isOpen={showModal}
                editingBranch={editingBranch}
            />
        </div>
    );
}
