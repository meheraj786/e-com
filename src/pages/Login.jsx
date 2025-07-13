import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="mt-[10%] flex items-center justify-center bg-white text-black font-primary px-4">
      <div className="w-full max-w-md border border-black p-8 rounded-md shadow-md">
        <h2
          className="text-center mb-6 tracking-wider uppercase"
          style={{ fontSize: "var(--text-title)", fontFamily: "var(--font-primary)" }}
        >
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 uppercase tracking-wider hover:bg-white hover:text-black hover:border hover:border-black transition-all"
            style={{ fontFamily: "var(--font-primary)", fontSize: "var(--text-body)" }}
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline hover:text-black">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
