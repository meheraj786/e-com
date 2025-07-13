import React from "react";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white text-black py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center uppercase mb-10 tracking-wider font-primary">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Add Product */}
          <Link
            to="/postproducts"
            className="border border-black p-6 rounded-md text-center hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">➕ Add Product</h2>
            <p className="text-sm text-gray-600">Post new products to store</p>
          </Link>

          {/* Manage Products (Optional for later) */}
          <Link
            to="/manage-products"
            className="border border-black p-6 rounded-md text-center hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">📦 Manage Products</h2>
            <p className="text-sm text-gray-600">Edit or delete products</p>
          </Link>

          {/* Orders (Optional for future expansion) */}
          <Link
            to="/orders"
            className="border border-black p-6 rounded-md text-center hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">📋 Orders</h2>
            <p className="text-sm text-gray-600">View all placed orders</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
