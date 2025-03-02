import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";

export default function UploadImages() {
    const ref = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<(string | null)[]>([null, null, null]);

    const openFolder = () => {
        if (ref.current) {
            ref.current.click();
        }
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length >= 3) {
            const newImages = [
                URL.createObjectURL(e.target.files[0]),
                URL.createObjectURL(e.target.files[1]),
                URL.createObjectURL(e.target.files[2]),
            ];
            setImages(newImages);
        }
    };

    return (
        <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                    Please upload 3 product images.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height={300}
                        src={images[0] || "/images/icon-upload.png"}
                        width={300}
                    />
                    <div className="grid grid-cols-3 gap-2">
                        <button>
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height={84}
                                src={images[1] || "/images/icon-upload.png"}
                                width={84}
                            />
                        </button>
                        <button>
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height={84}
                                src={images[2] || "/images/icon-upload.png"}
                                width={84}
                            />
                        </button>
                        <button
                            type="button"
                            onClick={openFolder}
                            className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
                        >
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                        </button>
                        <input
                            ref={ref}
                            onChange={onChange}
                            type="file"
                            name="images"
                            className="hidden"
                            accept="images/*"
                            multiple
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
