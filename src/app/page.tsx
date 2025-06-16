import { prisma } from '@/lib/prisma'
import AddToCartButton from '@/components/AddToCartButton'

export const revalidate = 0

export default async function Storefront() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="grid gap-6 p-6 md:p-10">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="border rounded p-4 space-y-2">
            <h2 className="font-medium">{p.name}</h2>
            <p className="text-sm text-gray-600">${p.price.toFixed(2)}</p>
            <AddToCartButton product={{ id: p.id, name: p.name, price: p.price }} />
          </div>
        ))}
      </div>
    </div>
  )
}
