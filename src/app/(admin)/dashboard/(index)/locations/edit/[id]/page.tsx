import { redirect } from 'next/navigation'
import React from 'react'
import { getLocationById } from '../../lib/data'
import FormLocation from '../../components/form-location'

type Tparams = {
  id: string
}

interface EditPageProps {
  params: Tparams
}

export default async function EditPage({ params }: EditPageProps) {
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
