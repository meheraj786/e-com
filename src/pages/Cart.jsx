import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Trash2, Minus, Plus } from "lucide-react";
import { clearCart, modifyQuantityOfAnItem, removeItemFromCart } from "../features/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleQuantityChange = (id, type) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      let newQuantity = item.quantity;
      if (type === 'increase') {
        newQuantity++;
      } else if (type === 'decrease' && item.quantity > 1) {
        newQuantity--;
      }
      dispatch(modifyQuantityOfAnItem({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let total = 0;
  cartItems.forEach((item) => (total += item.price * item.quantity));
  
  const subtotal = total;
  const discountPercentage = 20;
  const discountAmount = subtotal * (discountPercentage / 100);
  const deliveryFee = 15;
  const finalTotal = subtotal - discountAmount + deliveryFee;

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold text-black mb-10 uppercase tracking-wide">
        YOUR CART
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image || "/api/placeholder/100/100"} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                </div>

                {/* Price */}
                <div className="text-lg font-bold text-gray-900 mr-4">
                  ${item.price}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded-full">
                  <button
                    onClick={() => handleQuantityChange(item.id, 'decrease')}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={item.quantity === 1}
                  >
                    <Minus size={16} className={item.quantity === 1 ? 'text-gray-400' : 'text-gray-600'} />
                  </button>
                  <span className="px-4 py-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 'increase')}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} className="text-gray-600" />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                
                <div className="flex justify-between text-red-600">
                  <span>Discount (-{discountPercentage}%)</span>
                  <span>-${discountAmount.toFixed(0)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee}</span>
                </div>
                
                <hr className="my-4" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(0)}</span>
                </div>
              </div>

            <div className="mt-6 space-y-4">
              {/* Promo Code */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm"
                />
                <button className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button 
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                disabled={cartItems.length === 0}
              >
                Go to Checkout
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clear Cart Button */}
      {cartItems.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={handleClearCart}
            className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;