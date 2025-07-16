import React from 'react'
import CartButton from '../../layouts/CartButton'

const ProductCard = ({product}) => {
  return (
                <div className="card h-[517px] shadow-sm p-3 rounded-[10px] w-full md:w-[295px]">
              <div>
                <figure>
                  <img
                    className="img mb-[16px] object-cover rounded-[20px] w-full h-[250px] bg-[#F0EEED]"
                    src={product.image}
                  />
                </figure>
              </div>
              <span className="text-gray-400">{product.category}</span>

              <div className="h-[28%] w-full overflow-hidden">
                <h3 className="text-[26px] truncate  font-bold">
                  {product.title}
                </h3>
                <span className="my-[8px]">{product.rating}</span>
                <p className="text-subtitle-sm flex items-center md:text-subtitle font-bold">
                  ${product.offeredPrice || "200"} 
                  {
                    product.normalPrice && (
<span className='text-gray-600 mx-5 line-through'>{`$ ${product?.normalPrice}`}</span>
                    )
                  }
                  {
                    product.normalPrice && <span className='text-red-800 text-[12px] px-2 py-1 rounded-sm bg-red-300'> {Math.round(
        ((product.normalPrice - product.offeredPrice) / product.normalPrice) * 100
      )}% OFF</span>
                  }
                  
                </p>
                <p className="text-subtitle-sm md:text-subtitle text-gray-400 line-clamp-2">
                  {product.description}
                </p>
              </div>
<CartButton product={product}/>
            </div>
  )
}

export default ProductCard