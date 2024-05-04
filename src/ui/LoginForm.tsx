"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  // const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(user);

    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      const data = await response.json();

      console.log(data);

      if (data?.success === true) {
        toast.success(data?.message);
        // router.push("/");
        console.log("This login data", data);
      } else {
        toast.error(data?.error);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-5 border border-gray-200 rounded-md p-10">
      <h2 className="text-2xl font-medium">Sign in</h2>
      <div className="flex flex-col mt-2 gap-2">
        <label className="text-sm font-semibold">Enter your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
        />
      </div>
      <div className="flex flex-col mt-2 gap-2">
        <label className="text-sm font-semibold">Enter your Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="border border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
        />
      </div>
      <button
        onClick={handleLogin}
        className="text-sm bg-[#f0c14b] text-amazonBlack w-full py-2 mt-4 rounded-lg"
      >
        Continue
      </button>
      <button
        onClick={() => signIn()}
        className="text-sm uppercase bg-amazonBlue text-white w-full py-2 mt-5 rounded-md hover:text-amazonWhite duration-200"
      >
        Login with OAuth
      </button>
      <Link href={"/registration"}>
        <button className="text-sm bg-amazonWhite border border-gray-200 text-amazonBlack w-full py-2 mt-4 rounded-lg">
          Create your amazon account
        </button>
      </Link>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
