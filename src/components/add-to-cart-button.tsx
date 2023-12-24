'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton(props: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(props.productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
