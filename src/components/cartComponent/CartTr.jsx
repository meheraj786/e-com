import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  modifyQuantityOfAnItem,
  removeItemFromCart,
} from "../../features/cart";

const CartTr = ({ item }) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  return (
    <>
      <tr key={item.id} className="border-t border-black">
        <td className="p-3 border text-center border-black">
          <figure>
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 mx-auto object-cover rounded"
            />
          </figure>
        </td>
        <td className="p-3 border text-center border-black">{item.title}</td>
        <td className="p-3 border text-center border-black">
          ${item.price.toFixed(2)}
        </td>
        <td className="p-3 border text-center border-black">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (itemQuantity > 1) {
                  dispatch(
                    modifyQuantityOfAnItem({
                      id: item.id,
                      quantity: itemQuantity - 1,
                    })
                  );
                  setItemQuantity(itemQuantity - 1);
                } else {
                  return;
                }
              }}
              className="px-2 py-1 border border-black"
            >
              −
            </button>
            <input
              type="number"
              min="1"
              value={itemQuantity}
              onChange={(e) => {
                dispatch(
                  modifyQuantityOfAnItem({
                    id: item.id,
                    quantity: Number(e.target.value),
                  })
                );
                setItemQuantity(e.target.value);
              }}
              className="w-12 text-center border border-black"
            />
            <button
              onClick={() =>{
                dispatch(
                  modifyQuantityOfAnItem({
                    id: item.id,
                    quantity: itemQuantity + 1,
                  })
                )
                setItemQuantity(itemQuantity + 1)
              }}
              className="px-2 py-1 border border-black"
            >
              +
            </button>
          </div>
        </td>
        <td className="p-3 border text-center border-black">
          ${(item.price * item.quantity).toFixed(2)}
        </td>
        <td className="p-3 border text-center border-black">
          <button
            onClick={() => dispatch(removeItemFromCart(item.id))}
            className="text-red-500 hover:text-red-700 cursor-pointer text-[24px]"
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartTr;
