"use client"

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ActionResult } from '@/types'
import { Label } from '@/components/ui/label'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { AlertCircle, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { Location } from '@prisma/client'
import { postLocation, updateLocation } from '../lib/action'

const initialState: ActionResult = {
  error: ''
}

interface FormLocationProps {
  type?: 'create' | 'edit'
  data?: Location | null
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' size="sm" disabled={pending}>
      {pending ? "Loading..." : "Save Location"}
    </Button>
  )
}

export default function FormLocation({ data = null, type = 'create' }: FormLocationProps) {
  const updateLocationById = (_: unknown, formData: FormData) => updateLocation(_, formData, data?.id)

  const [state, formAction] = useFormState(type === 'create' ? postLocation : updateLocationById, initialState)

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
                  <Link href="/dashboard/locations">Locations</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Create Location</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              asChild
            >
              <Link href="/dashboard/locations">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Location Controller
            </h1>
            <div className="hidden justify-end ml-10 md:flex">
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
                  <CardTitle>Location Details</CardTitle>
                  <CardDescription>
                    Location details help provide more context for the user.
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <SubmitButton />
          </div>
        </div>
      </div>
    </form>
  )
}
