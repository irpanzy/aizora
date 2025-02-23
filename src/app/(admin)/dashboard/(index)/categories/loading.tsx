import { Skeleton } from "@/components/ui/skeleton"; // Impor komponen Skeleton

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen space-x-4">
            {/* Skeleton untuk gambar */}
            <Skeleton className="h-[150px] w-[150px] rounded-full" />

            {/* Skeleton untuk teks */}
            <div className="space-y-2">
                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
            </div>
        </div>
    );
}
