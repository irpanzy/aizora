"use client";

import { Button } from "@/components/ui/button";
import { getImageUrl } from "@/lib/supabase";
import { Brand } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FormDelete from "./components/form-delete";

export const columns: ColumnDef<Brand>[] = [
    {
        accessorKey: "name",
        header: "Logo Brand",
        cell: ({ row }) => {
            const brand = row.original;

            return <div className="inline-flex items-center gap-5">
                <Image src={getImageUrl(brand.logo)} alt="Product Image" width={80} height={80} />
            </div>;
        }
    },
    {
        accessorKey: "name",
        header: "Brand Name",
    },
    {
        accessorKey: "actions",
        header: "Actions",
        id: "actions",
        cell: ({ row }) => {
            const brand = row.original;

            return (
                <div className="space-x-4 inline-flex">
                    <Button size="sm" asChild>
                        <Link
                            href={`/dashboard/brands/edit/${brand.id}`}
                        >
                            <Edit className="w-4 h-4 mr-2" />
                        </Link>
                    </Button>
                    <FormDelete id={brand.id} />
                </div>
            );
        },
    },
];
