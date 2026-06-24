import { getPrograms } from "@/lib/actions/programs";
import ProgramFormModal from "@/components/admin/ProgramFormModal";
import AdminProgramsClient from "./AdminProgramsClient";

export default async function ProgramsManagementPage({
    searchParams,
}: {
    searchParams: Promise<{ edit?: string; showModal?: string }>;
}) {
    const params = await searchParams;
    const showModal = params.showModal === "true";
    const editId = params.edit;

    const allPrograms = await getPrograms();

    // Determine the editing program if in edit mode
    const editingProgram = editId ? allPrograms.find((p: any) => p.id === editId) : null;

    return (
        <div className="flex flex-col h-full animate-in fade-in duration-700">
            <AdminProgramsClient
                initialPrograms={allPrograms}
                searchParams={params}
            />

            {/* Client-Side Modal for Add/Edit */}
            <ProgramFormModal
                isOpen={showModal}
                editingProgram={editingProgram}
            />
        </div>
    );
}
