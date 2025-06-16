'use client'
import { useCart } from '@/components/cart-context'

export default function CartPage() {
  const { items, removeItem } = useCart()
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="divide-y">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} × {item.qty}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="font-semibold">Total: ${total.toFixed(2)}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </>
      )}
    </div>
  )
}
