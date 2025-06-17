'use client'
import { CartItem, useCart } from './cart-context'

export default function AddToCartButton({
  productId,
  name,
  price,
}: {
  productId: number
  name: string
  price: number
}) {
  const { addItem } = useCart()
  return (
    <button
      onClick={() => addItem({ id: productId, name, price })}
      className="bg-blue-600 text-white px-2 py-1 rounded"
    >
      Add to Cart
    </button>
  )
}
