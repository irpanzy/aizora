import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <Skeleton className="h-8 w-32" />
            </div>
            <div className="inline-flex">
                <div className="flex flex-col space-y-3 p-4">
                    <Skeleton className="h-8 w-[125px]" />
                    <Skeleton className="h-4 w-[350px]" />
                    <div className="flex flex-col space-y-3 p-4">
                        <div className="flex space-x-[540px]">
                            <Skeleton className="h-10 w-[125px]" />
                            <Skeleton className="h-10 w-[115px]" />
                        </div>
                        <div className="flex space-x-4">
                            <Skeleton className="h-14 w-[650px]" />
                            <div className="flex space-x-4">
                                <Skeleton className="h-14 w-[50px]" />
                                <Skeleton className="h-14 w-[50px]" />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Skeleton className="h-14 w-[650px]" />
                            <div className="flex space-x-4">
                                <Skeleton className="h-14 w-[50px]" />
                                <Skeleton className="h-14 w-[50px]" />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Skeleton className="h-14 w-[650px]" />
                            <div className="flex space-x-4">
                                <Skeleton className="h-14 w-[50px]" />
                                <Skeleton className="h-14 w-[50px]" />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Skeleton className="h-14 w-[650px]" />
                            <div className="flex space-x-4">
                                <Skeleton className="h-14 w-[50px]" />
                                <Skeleton className="h-14 w-[50px]" />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Skeleton className="h-14 w-[650px]" />
                            <div className="flex space-x-4">
                                <Skeleton className="h-14 w-[50px]" />
                                <Skeleton className="h-14 w-[50px]" />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Skeleton className="h-14 w-[650px]" />
                            <div className="flex space-x-4">
                                <Skeleton className="h-14 w-[50px]" />
                                <Skeleton className="h-14 w-[50px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}