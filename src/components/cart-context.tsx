'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type CartItem = { id: number; name: string; price: number; qty: number }

interface CartContextState {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'qty'>) => void
  removeItem: (id: number) => void
  updateQty: (id: number, qty: number) => void
}

const CartContext = createContext<CartContextState | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Omit<CartItem, 'qty'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((i) => i.id !== id))

  const updateQty = (id: number, qty: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
