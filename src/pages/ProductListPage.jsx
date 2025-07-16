import React, { useState } from 'react';
import { ChevronDown, Filter, Star, Heart, Container } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../features/api/apiSlice';
import { Toaster } from 'react-hot-toast';
import Flex from '../layouts/Flex';
import ProductCardSkeleton from '../components/skeletons/ProductCardSkeleton';
import { MdAddShoppingCart } from 'react-icons/md';
import CartButton from '../layouts/CartButton';
import ProductCard from '../components/productCard/ProductCard';


const ProductListPage = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState([]);
  const dispatch = useDispatch();
    const { data: products, isLoading, error } = useGetAllProductsQuery();
  
    if (isLoading)
      return (
        <>
          <div className="py-[70px] font-secondary">
            <Toaster position="bottom-center" reverseOrder={false} />
            <Container>
              <h2 className="text-subheading-sm md:text-subheading font-black text-center mb-[55px]">
                Products
              </h2>
              <Flex className="md:justify-start justify-center text-center md:text-left md:gap-y-0 gap-y-10 gap-x-[20px]">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </Flex>
            </Container>
          </div>
        </>
      );
    if (error)
      return <p className="text-center text-red-500">Something went wrong.</p>;


  const colors = [
    { name: 'Green', value: 'green', color: 'bg-green-500' },
    { name: 'Red', value: 'red', color: 'bg-red-500' },
    { name: 'Yellow', value: 'yellow', color: 'bg-yellow-500' },
    { name: 'Orange', value: 'orange', color: 'bg-orange-500' },
    { name: 'Light Blue', value: 'lightblue', color: 'bg-cyan-400' },
    { name: 'Blue', value: 'blue', color: 'bg-blue-500' },
    { name: 'Purple', value: 'purple', color: 'bg-purple-500' },
    { name: 'Pink', value: 'pink', color: 'bg-pink-500' },
    { name: 'Black', value: 'black', color: 'bg-black' },
  ];

  const handleColorChange = (value) => {
    setSelectedColors(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };



  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <span>Home</span> <span className="mx-2">></span> <span className="text-gray-900">Casual</span>
        </nav>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-72 flex-shrink-0">
          <div className="border border-gray-200 rounded-lg p-6">
            {/* Filters Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              <Filter size={20} className="text-gray-600" />
            </div>

            {/* T-shirts Category */}
            <div className="mb-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">T-shirts</span>
                  <span className="text-gray-500">›</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Shorts</span>
                  <span className="text-gray-500">›</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Shirts</span>
                  <span className="text-gray-500">›</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Hoodie</span>
                  <span className="text-gray-500">›</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Jeans</span>
                  <span className="text-gray-500">›</span>
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-4">Price</h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="200"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-4">Colors</h3>
              <div className="grid grid-cols-5 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange(color.value)}
                    className={`w-8 h-8 rounded-full ${color.color} border-2 ${
                      selectedColors.includes(color.value) ? 'border-gray-800' : 'border-gray-300'
                    } hover:border-gray-600 transition-colors`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                  <button
                    key={size}
                    className="py-2 px-3 text-xs border border-gray-300 rounded hover:border-gray-400 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-4">Dress Style</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Casual</span>
                  <span className="text-gray-500">›</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Formal</span>
                  <span className="text-gray-500">›</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Party</span>
                  <span className="text-gray-500">›</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Gym</span>
                  <span className="text-gray-500">›</span>
                </div>
              </div>
            </div>

            {/* Apply Filter Button */}
            <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Apply Filter
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Casual</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Showing 1-10 of 100 Products</span>
              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid - 3 columns */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {products.map((product) => (
<ProductCard product={product}/>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Previous</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded">1</button>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">2</button>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">3</button>
            <span className="px-3 py-2 text-gray-500">...</span>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">8</button>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">9</button>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">10</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;