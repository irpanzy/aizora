import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { columns } from "./columns";
import Link from "next/link";
import { getOrders } from "./lib/data";
export default async function OrderPage() {
    const orders = await getOrders()

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Breadcrumb className="flex">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>Orders</BreadcrumbPage>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                        Manage your orders and view their sales performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={orders} />
                </CardContent>
            </Card>
        </div>
    );
}
