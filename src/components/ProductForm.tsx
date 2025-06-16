'use client'
import { useState, useTransition } from 'react'
import type { Product } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function updateProduct(formData: FormData) {
  'use server'
  const id = Number(formData.get('id'))
  const name = String(formData.get('name'))
  const description = String(formData.get('description'))
  const price = parseFloat(String(formData.get('price')))

  await prisma.product.update({
    where: { id },
    data: { name, description, price },
  })
  revalidatePath('/admin/products')
}

export default function ProductForm({ product }: { product: Product }) {
  const [isPending, startTransition] = useTransition()
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description ?? '')
  const [price, setPrice] = useState(product.price)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(() => updateProduct(formData))
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="id" value={product.id} />
      <div>
        <label className="block text-sm">Name</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block text-sm">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block text-sm">Price</label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  )
}
