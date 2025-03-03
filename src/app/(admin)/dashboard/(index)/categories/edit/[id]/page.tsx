import { redirect } from 'next/navigation'
import React from 'react'
import { getCategoryById } from '../../lib/data'
import FormEdit from '../../components/form-edit'
import { Tedit } from '@/types'

export default async function EditPage({ params }: Tedit) {
  const category = await getCategoryById(params.id)

  if (!category) {
    return redirect('/dashboard/categories');
  }

  return (
    <div>
      <FormEdit type='edit' data={category} />
    </div>
  )
}
