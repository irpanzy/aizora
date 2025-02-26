import { redirect } from 'next/navigation'
import React from 'react'
import { getLocationById } from '../../lib/data'
import FormLocation from '../../components/form-location'
import { Tedit } from '@/types'

export default async function EditPage({ params }: Tedit) {
  const data = await getLocationById(params.id)

  if (!data) {
    return redirect('/dashboard/categories');
  }

  return (
    <div>
      <FormLocation type='edit' data={data} />
    </div>
  )
}
