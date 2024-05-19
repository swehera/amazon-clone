"use client";

import FormattedPrice from "@/ui/FormattedPrice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
interface Product {
  category: string;
  title: string;
  price: number;
  description: string;
  image: string; // Add the image property with the appropriate type
  // Add other properties if necessary
}

const SingleProduct = ({ searchParams }: any) => {
  const { id } = searchParams;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      setProduct(await response.json());
      setLoading(false);
    };
    getData();
  }, [id]);

  console.log("id", id);

  return (
    <div>
      {loading ? (
        <div className="py-10 flex flex-col gap-2 items-center justify-center">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <p className="text-lg font-semibold">Product is loading...</p>
        </div>
      ) : (
        <div className=" flex items-center justify-center mt-4">
          <div className=" px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-y-3  bg-white w-[70%] rounded-md">
            <div className=" flex items-center justify-center">
              <Image
                src={product?.image || "/placeholder-image.jpg"} // Provide a fallback image
                alt="product-image"
                width={500}
                height={500}
                className="w-80 h-auto"
              />
            </div>
            <div className=" flex flex-col  justify-center gap-y-3 px-4 py-2 border border-gray-700 rounded-md">
              <p className=" text-sm font-semibold">{product?.category}</p>
              <p className=" text-xl font-semibold">{product?.title}</p>
              <p>
                Price: <FormattedPrice amount={product?.price} />
              </p>
              <p className=" text-sm tracking-wide text-gray-500">
                {product?.description}
              </p>
              <button className=" bg-amazonBlue text-white font-semibold w-full py-3 rounded-md">
                add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
