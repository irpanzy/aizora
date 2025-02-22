"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState, useFormStatus } from 'react-dom'
import { SignIn } from '../lib/actions'
import { ActionResult } from '@/types';
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { ModeToggle } from '@/components/ui/mode-toggle'

const initialState: ActionResult = {
    error: ''
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Loading..." : "Login"}
        </Button>
    )
}

export default function FormSignIn() {
    const [state, formAction] = useFormState(SignIn, initialState)

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center w-full">
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <ModeToggle />
                </div>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {state.error !== '' && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            {state.error}
                        </AlertDescription>
                    </Alert>
                )}
                <form action={formAction}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                name="password"
                                id="password"
                                type="password" />
                        </div>
                        <SubmitButton />
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
