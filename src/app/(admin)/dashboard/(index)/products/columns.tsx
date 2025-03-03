"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getImageUrl } from "@/lib/supabase"
import { dateFormat, rupiahFormat } from "@/lib/utils"
import { ProductStatus } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Edit } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FormDelete from "./components/form-delete"

export type Tcolumn = {
    id: number
    name: string
    image_url: string
    category_name: string
    brand_name: string
    price: number
    total_sales: number
    stock: ProductStatus
    createdAt: Date
}

export const columns: ColumnDef<Tcolumn>[] = [
    {
        accessorKey: "image_url",
        header: "Product Image",

        cell: ({ row }) => {
            const product = row.original

            return <div className="inline-flex items-center gap-5">
                <Image src={getImageUrl(product.image_url, "products")} alt="Product Image" width={80} height={80} />
            </div>;
        }
    },
    {
        accessorKey: "name",
        header: "Product Name",
    },
    {
        accessorKey: "price",
        header: "Price",

        cell: ({ row }) => {
            const product = row.original

            return rupiahFormat(product.price)
        },
    },
    {
        accessorKey: "stock",
        header: "Status",

        cell: ({ row }) => {
            const product = row.original

            return <Badge variant={'outline'}>{product.stock}</Badge>
        },
    },
    {
        accessorKey: "total_sales",
        header: "Total Sales",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
            const product = row.original

            return dateFormat(product.createdAt)
        }
    },
    {
        accessorKey: "actions",
        header: "Actions",
        id: "actions",
        cell: ({ row }) => {
            const product = row.original;

            return (
                <div className="space-x-4 inline-flex">
                    <Button size="sm" asChild>
                        <Link
                            href={`/dashboard/products/edit/${product.id}`}
                        >
                            <Edit className="w-4 h-4 mr-2" />
                        </Link>
                    </Button>
                    <FormDelete id={product.id} />
                </div>
            );
        },
    },
] 