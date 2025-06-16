'use client'
import { useCart } from '@/components/cart-context'

export default function CartPage() {
  const { items, removeItem, updateQty } = useCart()
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
              <li key={item.id} className="flex justify-between items-center py-2">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                    className="border p-1 w-16 rounded"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="font-semibold">Total: ${total.toFixed(2)}</div>
          <button
            onClick={() => console.log(items)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  )
}
