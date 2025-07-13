import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { doc, setDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

const SignUp = () => {
  const navigate= useNavigate()
  const [user, setUser] = useState({
    name: "",
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
  const submitHandler = async () => {
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      await updateProfile(res.user, {
        displayName: user.name,
      });
      console.log(res.user.uid);
      
      await setDoc(doc(db, "users", res.user.uid), {
        name: res.user.displayName,
        email: res.user.email,
        role: "user"
      })
      setIsLoading(false);
      setUser({
        name: "",
        email: "",
        password: "",
      });
      setErrmsg("");
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
      setTimeout(()=>{
        navigate("/login")
      },2000)

    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErrmsg(err.message);
    }
  };
  return (
    <div className="mt-[10%] flex items-center justify-center bg-white text-black font-primary px-4">
            <Toaster position="bottom-center" reverseOrder={false} />
      <div className="w-full max-w-md border border-black p-8 rounded-md shadow-md">
        <h2
          className="text-center mb-6 tracking-wider uppercase"
          style={{
            fontSize: "var(--text-title)",
            fontFamily: "var(--font-primary)",
          }}
        >
          Sign Up
        </h2>
        <p className="text-center text-red-400">{errmsg}</p>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
            {showPass ? (
              <FaEyeSlash
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[55%] right-3 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[55%] right-3 cursor-pointer"
              />
            )}
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
            Create Account
          </button>
}
          
          
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:text-black">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
