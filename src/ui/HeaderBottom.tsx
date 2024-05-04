"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
const HeaderBottom = () => {
  //   const navigation = [
  //     "Today's Deals",
  //     "Customer Service",
  //     "Registry",
  //     "Gift Cards",
  //     "Sell",
  //   ];

  const navigation = [
    { title: "Today's Deals", href: "/deals" },
    { title: "Customer Service", href: "/service" },
    { title: "Registry", href: "/registry" },
    { title: "Gift Cards", href: "/gift-cards" },
    { title: "sell", href: "/sell" },
  ];

  const { data: session } = useSession();
  // console.log("This is user auth info", session);

  return (
    <div className=" w-full h-9 px-2 bg-amazonBlueLight text-white flex">
      <p className=" hidden md:sideMenuHide">
        <IoMenu className=" text-2xl" />
        All
      </p>
      <div className=" flex items-center overflow-auto w-full">
        {navigation.map((item) => (
          <Link
            href={item?.href}
            key={item?.title}
            className="h-full flex items-center cursor-pointer whitespace-nowrap gap-x-1 text-sm font-[500] border border-transparent hover:border-white duration-200 px-2 rounded-sm"
          >
            {item?.title}
          </Link>
        ))}
        {session?.user && (
          <button
            onClick={() => signOut()}
            className=" text-sm text-red-500 hover:text-red-400 font-[500px] h-full border border-transparent hover:border-red-600 duration-200 px-2 rounded-sm"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderBottom;
