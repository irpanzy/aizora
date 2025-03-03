import { redirect } from 'next/navigation'
import React from 'react'
import { getBrandById } from '../../lib/data'
import { Tedit } from '@/types'
import FormEdit from '../../components/form-edit'

export default async function EditPage({ params }: Tedit) {
    const brand = await getBrandById(params.id)

    if (!brand) {
        return redirect('/dashboard/brands');
    }

    return (
        <div>
            <FormEdit type='edit' data={brand} />
        </div>
    )
}
