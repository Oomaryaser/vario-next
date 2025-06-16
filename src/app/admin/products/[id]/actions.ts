'use server'

import { db } from '@/lib/db'

export async function updateProduct(data: {
  id: number
  name: string
  description: string
  price: number
}) {
  await db.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
    },
  })
}
