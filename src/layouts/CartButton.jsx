import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart';
import { MdAddShoppingCart } from 'react-icons/md';

const CartButton = ({product}) => {
  const dispatch= useDispatch()
  return (
                  <button
                    className="cursor-pointer flex items-center mt-2 bg-black rounded-[10px] gap-x-3 text-white px-5 py-3"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add To Cart <span><MdAddShoppingCart size={24} />
    </span>
                  </button>
  )
}

export default CartButton