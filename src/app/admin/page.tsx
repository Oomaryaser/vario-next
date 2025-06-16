import { prisma } from '@/lib/prisma'

export default async function AdminDashboard() {
  const orders = await prisma.order.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })

  const totalOrders = orders.length
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-xl font-bold">{totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-xl font-bold">${totalRevenue.toFixed(2)}</p>
        </div>
      </div>
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Order ID</th>
            <th className="p-2 text-left">User Email</th>
            <th className="p-2 text-left">Total</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b">
              <td className="p-2">{o.id}</td>
              <td className="p-2">{o.user.email}</td>
              <td className="p-2">${o.total.toFixed(2)}</td>
              <td className="p-2">{o.status}</td>
              <td className="p-2">{o.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
