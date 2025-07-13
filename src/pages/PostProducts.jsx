import React, { useState } from "react";
import { useAddProductMutation } from "../features/api/apiSlice";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [addProduct]= useAddProductMutation()

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.name==="price" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Product Submitted:", product);
    await addProduct(product)
  };

  return (
    <div className="mt-[10%] flex items-center justify-center bg-white text-black px-4 py-10">
      <div className="w-full max-w-2xl border border-black p-8 rounded-lg shadow-md font-primary">
        <h2 className="text-2xl font-semibold text-center uppercase mb-6 tracking-wide">
          Add Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Product title"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Product description"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-medium">Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="">Select category</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="beauty">Beauty</option>
              {/* Add more as needed */}
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="block mb-1 text-sm font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Paste image URL"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 uppercase tracking-wider hover:bg-white hover:text-black hover:border hover:border-black transition-all"
          >
            Post Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
