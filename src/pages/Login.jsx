import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase";
import { PropagateLoader } from "react-spinners";

const Login = () => {
  const navigate= useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler= async()=>{
    setIsLoading(true)
    try {
      const res= await signInWithEmailAndPassword(auth, user.email, user.password)
      if (res.user) {
        setIsLoading(false)
        setErrmsg("")
        setUser({
    email: "",
    password: "",
  })
        toast.success('Signup Successfully done',
  {
    style: {
      duration: 2000,
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  setTimeout(() => {
    navigate("/")
  }, 2000);
      }
      
    } catch (error) {
      setIsLoading(false)
      setErrmsg(error.message)
    }
  }

  return (
    <div className="mt-[10%] flex items-center justify-center bg-white text-black font-primary px-4">
            <Toaster position="bottom-center" reverseOrder={false} />
      <div className="w-full max-w-md border border-black p-8 rounded-md shadow-md">
        <h2
          className="text-center mb-6 tracking-wider uppercase"
          style={{ fontSize: "var(--text-title)", fontFamily: "var(--font-primary)" }}
        >
          Login
        </h2>
        <p className="text-center text-red-400">{errmsg}</p>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e)=>handleChange(e)}
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
              value={user.password}
              onChange={(e)=>handleChange(e)}
              className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
          </div>

{
  isLoading ? <PropagateLoader className="w-full py-2 text-center" /> : <button
            onClick={submitHandler}
            type="submit"
            className="w-full bg-black text-white py-2 uppercase tracking-wider hover:bg-white cursor-pointer hover:text-black hover:border hover:border-black transition-all"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "var(--text-body)",
            }}
          >
            Login
          </button>
}
        </div>

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
