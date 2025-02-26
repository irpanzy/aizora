import { redirect } from 'next/navigation'
import React from 'react'
import { getCategoryById } from '../../lib/data'
import FormCategory from '../../components/form-category'
import { Tedit } from '@/types'

export default async function EditPage({ params }: Tedit) {
  const category = await getCategoryById(params.id)

  if (!category) {
    return redirect('/dashboard/categories');
  }

  return (
    <div>
      <FormCategory type='edit' data={category} />
    </div>
  )
}
