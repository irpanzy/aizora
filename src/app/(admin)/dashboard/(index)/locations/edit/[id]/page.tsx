import { redirect } from 'next/navigation'
import React from 'react'
import { getLocationById } from '../../lib/data'
import FormEdit from '../../components/form-edit'
import { Tedit } from '@/types'

export default async function EditPage({ params }: Tedit) {
  const location = await getLocationById(params.id)

  if (!location) {
    return redirect('/dashboard/location');
  }

  return (
    <div>
      <FormEdit type='edit' data={location} />
    </div>
  )
}
