"use client";
import { cart, logo } from "@/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { useSession } from "next-auth/react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const { data: session } = useSession();
  console.log(searchText);
  console.log("This is user auth info", session);

  return (
    <header className=" w-full  bg-amazonBlue h-[68px] flex items-center   px-[14px] gap-x-2 sticky top-0 z-50">
      {/*==========logo work start============ */}
      <Link href={"/"} className="headerStyle">
        <Image src={logo} alt="logo" className=" " />
      </Link>
      {/*=========logo work end================*/}

      {/*============location work start ===============*/}
      <div className="headerStyle cursor-pointer">
        <CiLocationOn className=" text-white text-xl mt-3 mr-[1px]" />
        <div>
          <p className=" text-textColor text-xs">Deliver to</p>
          <p className=" text-white font-semibold text-[14px]">Bangladesh</p>
        </div>
      </div>
      {/*============location work end==================*/}

      {/* ==========search bar work start============== */}
      <div className=" flex-1 border border-textColor bg-white h-10 rounded-md relative">
        <input
          type="text"
          placeholder="Search Amazon"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className=" w-full h-full rounded-[3px] px-4 outline-none border-[3px] border-transparent focus-visible:border-amazonYellow"
        />
        <span className=" cursor-pointer absolute right-0 w-10  h-full text-3xl bg-amazonYellow hover:bg-yellow-500 inline-flex items-center justify-center ">
          <MdSearch />
        </span>
        {searchText !== "" && (
          <IoMdClose
            onClick={() => setSearchText("")}
            className=" cursor-pointer hover:text-red-500  text-2xl absolute right-11 top-[7px]"
          />
        )}
      </div>
      {/* ==========search bar work end================ */}

      {/* ===============user sign/logout account work start================= */}
      {session?.user ? (
        <Link href={"/profile"} className="headerStyle flex items-center gap-1">
          <Image
            src={session?.user?.image!}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-sm text-white">
            <p>{session?.user?.name}</p>
            <p className="text-xs">{session?.user?.email}</p>
          </div>
        </Link>
      ) : (
        <Link
          href={"/login"}
          className=" cursor-pointer border border-transparent hover:border-white h-[70%] rounded-sm duration-200 p-2 flex items-center justify-center"
        >
          <div>
            <p className=" text-white text-xs">Hello, sign in</p>
            <div className=" flex">
              <p className=" text-white font-semibold text-sm ">
                Account & Lists
              </p>
              <MdArrowDropDown className=" mt-[1px] text-xl text-textColor" />
            </div>
          </div>
        </Link>
      )}

      {/* ===============user sign/logout account work end================= */}

      {/* ==================Return and Order Work start===================== */}
      <div className=" cursor-pointer border border-transparent hover:border-white h-[70%] rounded-sm duration-200 p-2 flex items-center justify-center">
        <div>
          <p className=" text-white text-xs">Returns</p>

          <p className=" text-white font-bold text-sm ">& Orders</p>
        </div>
      </div>
      {/* ==================Return and Order Work end===================== */}

      {/* ====================Cart Work start======================= */}
      <div className="headerStyle ">
        <Image src={cart} alt="cart" className=" relative" />
        <p className=" text-amazonYellow font-semibold absolute top-4 right-[61px]">
          0
        </p>
        <p className=" text-white font-semibold text-sm mt-1">Cart</p>
      </div>
      {/* ====================Cart Work end======================= */}
    </header>
  );
};

export default Header;
