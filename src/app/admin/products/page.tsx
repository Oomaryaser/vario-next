import Link from 'next/link'
import { db } from '@/lib/db'

export default async function ProductsAdminPage() {
  const products = await db.product.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Products</h1>
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Created</th>
            <th className="p-2" />
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.name}</td>
              <td className="p-2">${p.price.toFixed(2)}</td>
              <td className="p-2">{p.createdAt.toDateString()}</td>
              <td className="p-2 text-right">
                <Link
                  href={`/admin/products/${p.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
