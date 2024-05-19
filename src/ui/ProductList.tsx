import Image from "next/image";
import { ProductType } from "../../type";
import Link from "next/link";
import FormattedPrice from "./FormattedPrice";
import SavedPrice from "./SavedPrice";
import { useState } from "react";
import ViewMoreText from "./ViewMoreText";

interface Props {
  products: ProductType[];
}

const ProductList = ({ products }: Props) => {
  // console.log("Data", products);

  return (
    <div className=" mt-24 md:mt-0">
      <div className=" gap-10  grid grid-cols-1 md:grid-cols-4">
        {products.map((item: ProductType) => (
          <div
            key={item?._id}
            className=" mx-4 md:mx-0 px-5 pt-2  pb-6 bg-white rounded-md"
          >
            <div>
              <div className=" group overflow-hidden">
                <Image
                  src={item?.image}
                  alt="product-image"
                  width={300}
                  height={300}
                  className="w-full h-60 md:h-72 object-contain group-hover:scale-110 duration-500"
                />
              </div>
              {/* {item?.isNew && (
              <span className="absolute top-2 right-2 inline-block bg-black text-gray-200 rounded-md text-xs p-1">
                New Arrival
              </span>
            )} */}
              <div className=" mt-2 flex flex-col gap-y-2">
                <hr className=" bg-slate-700 mt-2" />
                <p className=" text-sm  text-gray-700">{item?.category}</p>
                <p className=" font-semibold text-gray-700">
                  {item?.title.substring(0, 18)}
                </p>
                <ViewMoreText text={item?.description} />
                <FormattedPrice amount={item?.price} />

                <button className=" bg-amazonBlue text-white font-semibold w-full py-3 rounded-md">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
