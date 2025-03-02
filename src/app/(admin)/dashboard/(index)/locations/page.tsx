import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { columns } from "./columns";
import { getLocations } from "./lib/data";
import Link from "next/link";

export default async function LocationPage() {
    const locations = await getLocations();

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
                        <BreadcrumbPage>Locations</BreadcrumbPage>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/dashboard/locations/create">Create Location</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Button size="sm" className="h-8 gap-1" asChild>
                    <Link href="/dashboard/locations/create">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Location
                        </span>
                    </Link>
                </Button>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Locations</CardTitle>
                    <CardDescription>
                        Manage your locations and view their sales performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={locations} />
                </CardContent>
            </Card>
        </div>
    );
}
