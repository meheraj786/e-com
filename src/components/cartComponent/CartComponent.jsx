import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart} from '../../features/cart'
import CartTr from './CartTr'

const CartComponent = ({cartItems, total}) => {
  const dispatch= useDispatch()




  return (
<>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-black text-sm text-left">
          <thead className="bg-gray-100 uppercase">
            <tr>
              <th className="px-4 py-3 border border-black">Image</th>
              <th className="px-4 py-3 border border-black">Product Title</th>
              <th className="px-4 py-3 border border-black">Price</th>
              <th className="px-4 py-3 border border-black">Quantity</th>
              <th className="px-4 py-3 border border-black">Subtotal</th>
              <th className="px-4 py-3 border border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                
                <CartTr item={item}/>
              ))
            )}
          </tbody>
        </table>
      </div>

      {cartItems.length > 0 && (
            <div className="mt-6 text-right">
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            Total: ${total.toFixed(2)}
          </h2>
          <button
            className="text-red-400 underline text-sm"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}</>
  )
}

export default CartComponent