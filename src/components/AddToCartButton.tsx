'use client'
import { CartItem, useCart } from './cart-context'

export default function AddToCartButton({ product }: { product: Omit<CartItem, 'qty'> }) {
  const { addItem } = useCart()
  return (
    <button
      onClick={() => addItem(product)}
      className="bg-blue-600 text-white px-2 py-1 rounded"
    >
      Add to Cart
    </button>
  )
}
