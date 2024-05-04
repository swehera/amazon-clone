"use client";
import { imgFive, imgFour, imgOne, imgThree, imgTwo } from "@/images";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
    >
      <div>
        <Image
          width={1920}
          height={1080}
          src={"https://i.ibb.co/zQs07Qj/imgOne.jpg"}
          alt="img-one"
        />
      </div>

      <div>
        <Image
          width={1920}
          height={1080}
          src={"https://i.ibb.co/dLJ8c93/imgTwo.jpg"}
          alt="img-two"
        />
      </div>
      <div>
        <Image
          width={1920}
          height={1080}
          src={"https://i.ibb.co/fQK7My6/imgThree.jpg"}
          alt="img-two"
        />
      </div>
      <div>
        <Image
          width={1920}
          height={1080}
          src={"https://i.ibb.co/37BTjgQ/imgFour.jpg"}
          alt="img-two"
        />
      </div>
      <div>
        <Image
          width={1920}
          height={1080}
          src={"https://i.ibb.co/Qm6mRsv/imgFive.jpg"}
          alt="img-two"
        />
      </div>
      <div>
        <Image
          width={1920}
          height={1080}
          src={"https://i.ibb.co/Qb6FhPS/imgSix.jpg"}
          alt="img-two"
        />
      </div>
    </Carousel>
  );
};

export default Banner;

// https://i.ibb.co/Qm6mRsv/imgFive.jpg
// https://i.ibb.co/37BTjgQ/imgFour.jpg
// https://i.ibb.co/zQs07Qj/imgOne.jpg
// https://i.ibb.co/fQK7My6/imgThree.jpg
// https://i.ibb.co/dLJ8c93/imgTwo.jpg
