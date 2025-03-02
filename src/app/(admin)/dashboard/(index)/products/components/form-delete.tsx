"use client";

import { Button } from "@/components/ui/button";
import { ActionResult } from "@/types";
import { Trash } from "lucide-react";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { deleteProduct } from "../lib/action";

const initialState: ActionResult = {
    error: "",
};

interface FormDeleteProps {
    id: number;
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="destructive"
            size="sm"
            disabled={pending}
        >
            <Trash className="w-4 h-4 mr-2" />
        </Button>
    );
}

export default function FormDelete({ id }: FormDeleteProps) {
    const deleteProductById = (_: unknown, formData: FormData) => deleteProduct(_, formData, id);

    const [state, formAction] = useFormState(deleteProductById, initialState
    );

    return (
        <form action={formAction}>
            <SubmitButton />
        </form>
    );
}
