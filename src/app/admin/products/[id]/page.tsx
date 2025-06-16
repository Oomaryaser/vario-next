import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import EditProductForm from './edit-form'

interface Props { params: { id: string } }

export default async function EditProductPage({ params }: Props) {
  const product = await prisma.product.findUnique({ where: { id: Number(params.id) } })
  if (!product) return notFound()
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Edit Product</h1>
      <EditProductForm product={product} />
    </div>
  )
}
