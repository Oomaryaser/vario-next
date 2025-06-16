import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import EditProductForm from './edit-form'

interface Props { params: { id: string } }

export default async function EditProductPage({ params }: Props) {
  const product = await db.product.findUnique({ where: { id: Number(params.id) } })
  if (!product) return notFound()
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Edit Product</h1>
      <EditProductForm product={product} />
    </div>
  )
}
