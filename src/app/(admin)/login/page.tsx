"use client";
import { loginLogo } from "@/images";
import "../../../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/ui/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto flex flex-col items-center mt-4">
        <Link href={"/"}>
          <Image src={loginLogo} alt="logo" />
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
