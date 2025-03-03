import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import Link from 'next/link';
import { columns } from './columns';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { getCustomers } from './lib/data';


export default async function CustomerPage() {
    const customers = await getCustomers()

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
                        <BreadcrumbPage>Customers</BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Customers</CardTitle>
                    <CardDescription>
                        Manage your Customers and view their sales performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={customers} />
                </CardContent>
            </Card>
        </div>
    );
}
