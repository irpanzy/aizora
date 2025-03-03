"use client"

import { Badge } from "@/components/ui/badge"
import { rupiahFormat } from "@/lib/utils"
import { OrderStatus } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"

type Tproduct = {
    name: string
    image: string
}

export type TColumn = {
    id: number
    // name: string
    product: Tproduct[]
    customer_name: string
    price: number
    status: OrderStatus
}

export const columns: ColumnDef<TColumn>[] = [
    {
        accessorKey: "product",
        header: "Product",
        cell: ({ row }) => {
            const order = row.original

            return (
                <div className="flex flex-col gap-4 justify-start">
                    {order.product.map((item, index) => (
                        <div key={`${item.name + index}`} className="inline-flex items-center gap-5">
                            <Image src={item.image} width={80} height={80} alt={item.name} />
                        </div>
                    ))}
                </div>
            )
        }
    },
    {
        accessorKey: "name",
        header: "Product Name",
    },
    {
        accessorKey: "customer_name",
        header: "Customer Name",
    },
    {
        accessorKey: "price",
        header: "Total Price",
        cell: ({ row }) => rupiahFormat(row.original.price),
    },
    {
        accessorKey: "status",
        header: "Status Order",
        cell: ({ row }) => {
            return (
                <Badge variant={row.original.status === 'failed' ? 'destructive' : 'default'}>{row.original.status}</Badge>
            )
        }
    },
]