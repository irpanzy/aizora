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
import { columns } from "./columns";
import { getLocations } from "./lib/data";
import Link from "next/link";

export default async function LocationPage() {
    const locations = await getLocations();

    return (
        <div className="space-y-4">
            <div className="text-right">
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
