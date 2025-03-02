"use client";

import React, { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { AlertCircle, ChevronLeft } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import UploadImages from "./upload-images";
import { Product } from "@prisma/client";
import { ActionResult } from "@/types";
import { storeProduct, updateProduct } from "../lib/action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FormProductProps {
    children: ReactNode
    type: 'create' | 'edit'
    data?: Product | null
}

const initialFormState: ActionResult = {
    error: ""
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" size="sm" disabled={pending}>
            {pending ? "Loading..." : "Save Product"}
        </Button>
    );
}

export default function FormProduct({ children, type, data }: FormProductProps) {
    
    const updateProductById = (_: unknown, formData: FormData) => updateProduct(_, formData, data?.id ?? 0)
    const [state, formAction] = useFormState(type === "create" ? storeProduct : updateProductById, initialFormState)

    return (
        <form action={formAction}>
            <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                    <Breadcrumb className="flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/dashboard">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/dashboard/products">Products</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbPage>Create Product</BreadcrumbPage>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            asChild
                        >
                            <Link href="/dashboard/products">
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Link>
                        </Button>
                        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                            Product Controller
                        </h1>
                        <div className="hidden justify-end ml-[282px] md:flex">
                            <SubmitButton />
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <Card
                                x-chunk="dashboard-07-chunk-0"
                                className="w-full sm:w-[500px] lg:w-full"
                            >
                                <CardHeader>
                                    <CardTitle>Product Details</CardTitle>
                                    <CardDescription>
                                        Product details help provide more context for the user.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {state.error !== "" && (
                                        <Alert
                                            variant="destructive"
                                            className="mb-4"
                                        >
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertTitle>Error</AlertTitle>
                                            <AlertDescription>
                                                {state.error}
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                name="name"
                                                className="w-full"
                                                defaultValue={data?.name}
                                            />
                                        </div>

                                        <div className="grid gap-3">
                                            <Label htmlFor="price">Price</Label>
                                            <Input
                                                id="price"
                                                type="number"
                                                name="price"
                                                className="w-full"
                                                defaultValue={Number(data?.price ?? 0)}
                                            />
                                        </div>

                                        <div className="grid gap-3">
                                            <Label htmlFor="description">
                                                Description
                                            </Label>
                                            <Textarea
                                                name="description"
                                                id="description"
                                                className="min-h-32"
                                                defaultValue={data?.description}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card x-chunk="dashboard-07-chunk-2">
                                <CardHeader>
                                    <CardTitle>Product Category</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6 sm:grid-cols-3">
                                        {children}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                            <Card x-chunk="dashboard-07-chunk-3">
                                <CardHeader>
                                    <CardTitle>Product Status</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="status">
                                                Status
                                            </Label>
                                            <Select name="stock" defaultValue={data?.stock}>
                                                <SelectTrigger
                                                    id="status"
                                                    aria-label="Select status"
                                                >
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ready">
                                                        Ready
                                                    </SelectItem>
                                                    <SelectItem value="preorder">
                                                        Preorder
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <UploadImages />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 md:hidden">
                        <SubmitButton />
                    </div>
                </div>
            </div>
        </form>
    );
}
