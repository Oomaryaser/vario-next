'use server'

import { prisma } from '@/lib/prisma'

export async function updateProduct(data: {
  id: number
  name: string
  description: string
  price: number
}) {
  await prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
    },
  })
}
