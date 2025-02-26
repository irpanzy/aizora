import { redirect } from 'next/navigation'
import React from 'react'
import { getBrandById } from '../../lib/data'
import { Tedit } from '@/types'
import FormBrand from '../../components/form-brand'

export default async function EditPage({ params }: Tedit) {
    const brand = await getBrandById(params.id)

    if (!brand) {
        return redirect('/dashboard/brands');
    }

    return (
        <div>
            <FormBrand type='edit' data={brand} />
        </div>
    )
}
