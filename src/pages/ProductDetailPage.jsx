import React, { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('olive');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400"
  ];

  const colors = [
    { name: 'Olive', value: 'olive', color: 'bg-green-700' },
    { name: 'Black', value: 'black', color: 'bg-black' },
    { name: 'Navy', value: 'navy', color: 'bg-blue-900' }
  ];

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={productImages[selectedImage]} 
              alt="Product"
              className="w-full aspect-square object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex gap-3">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-black' : 'border-gray-200'
                } hover:border-gray-400 transition-colors`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Product Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-gray-900">$260</span>
              <span className="text-xl text-gray-500 line-through">$300</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">-40%</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
              breathable fabric, it offers superior comfort and style.
            </p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Select Colors</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-10 h-10 rounded-full ${color.color} border-2 ${
                    selectedColor === color.value ? 'border-gray-800' : 'border-gray-300'
                  } hover:border-gray-600 transition-colors`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Choose Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-full">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="p-3 hover:bg-gray-100 transition-colors"
                disabled={quantity === 1}
              >
                <Minus size={16} className={quantity === 1 ? 'text-gray-400' : 'text-gray-600'} />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="p-3 hover:bg-gray-100 transition-colors"
              >
                <Plus size={16} className="text-gray-600" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="flex-1 bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;