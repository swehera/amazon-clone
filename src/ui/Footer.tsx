import React from "react";
import FooterTitle from "./FooterTitle";
import Link from "next/link";
import { knowUs } from "@/constant";

const Footer = () => {
  return (
    <div className="w-full bg-[#232F3E] text-gray-200 mt-5">
      <Link
        href={"/"}
        className=" flex items-center justify-center text-white bg-[#37475A] py-3"
      >
        <p className=" text-sm">Back to top</p>
      </Link>
      <div className="max-w-5xl mx-auto px-4 py-10 flex items-start justify-between gap-10 flex-wrap">
        <div>
          <FooterTitle title="Get to Know Us" />
          <div className="flex flex-col gap-2 mt-3">
            {knowUs?.map(({ title, link }: { title: string; link: string }) => (
              <Link
                key={title}
                href={link}
                className="text-sm hover:text-white hover:underline underline-offset-2 decoration-[1px] duration-200"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <FooterTitle title="Make Money with Us" />
          <div className="flex flex-col gap-2 mt-3">
            {knowUs?.map(({ title, link }: { title: string; link: string }) => (
              <Link
                key={title}
                href={link}
                className="text-sm hover:text-white hover:underline underline-offset-2 decoration-[1px] duration-200"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <FooterTitle title="Amazon Payment Products" />
          <div className="flex flex-col gap-2 mt-3">
            {knowUs?.map(({ title, link }: { title: string; link: string }) => (
              <Link
                key={title}
                href={link}
                className="text-sm hover:text-white hover:underline underline-offset-2 decoration-[1px] duration-200"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <FooterTitle title="Let Us Help You" />
          <div className="flex flex-col gap-2 mt-3">
            {knowUs?.map(({ title, link }: { title: string; link: string }) => (
              <Link
                key={title}
                href={link}
                className="text-sm hover:text-white hover:underline underline-offset-2 decoration-[1px] duration-200"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
