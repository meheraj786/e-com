import React, { useState } from "react";
import { useAddProductMutation } from "../features/api/apiSlice";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    normalPrice: "",
    offeredPrice: "",
    description: "",
    category: "",
    tags: "",
    image: "",
  });

  const [addProduct] = useAddProductMutation();

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "e-com app with firebase");
    data.append("cloud_name", "dlrycnxnh");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dlrycnxnh/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const result = await res.json();
      setProduct((prev) => ({
        ...prev,
        image: result.secure_url,
      }));
    } catch (error) {
      toast.error("Image upload failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "normalPrice" || name === "offeredPrice" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addProduct(product);
    if (res?.data || res?.success) {
      toast.success("Product Added");
      setProduct({
        title: "",
        normalPrice: "",
        offeredPrice: "",
        description: "",
        category: "",
        tags: "",
        image: "",
      });
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="mt-[5%] flex items-center justify-center bg-white text-black px-4 py-10">
      <Toaster position="bottom-center" reverseOrder={false} />
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
              className="w-full border border-black px-4 py-2"
              placeholder="Product title"
              required
            />
          </div>

          {/* Normal Price */}
          <div>
            <label className="block mb-1 text-sm font-medium">Normal Price/Optional ($)</label>
            <input
              type="number"
              name="normalPrice"
              value={product.normalPrice}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2"
              placeholder="Normal price"
              
            />
          </div>

          {/* Offered Price */}
          <div>
            <label className="block mb-1 text-sm font-medium">Offered Price or Main Price ($)</label>
            <input
              type="number"
              name="offeredPrice"
              value={product.offeredPrice}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2"
              placeholder="Offered price"
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
              className="w-full border border-black px-4 py-2 h-24 resize-none"
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
              className="w-full border border-black px-4 py-2"
              required
            >
              <option value="">Select category</option>
              <option value="casual">Casual</option>
              <option value="formal">Formal</option>
              <option value="party">Party</option>
              <option value="gym">Gym</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-1 text-sm font-medium">Tags</label>
            <input
              type="text"
              name="tags"
              value={product.tags}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2"
              placeholder="Comma separated tags"
              required
            />
          </div>

          {/* Image */}
          <div>
            {product.image && (
              <img
                src={product.image}
                className="w-[100px] h-[100px] object-cover mb-2"
                alt="Uploaded"
              />
            )}
            <label className="block mb-1 text-sm font-medium">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChangeImage}
              className="w-full border border-black px-4 py-2"
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
