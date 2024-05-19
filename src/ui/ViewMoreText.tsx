"use client";

import { useState } from "react";

const ViewMoreText = ({ text }: { text: string }) => {
  const [viewDetails, setViewDetails] = useState(false);
  return viewDetails ? (
    <p className="text-sm text-gray-500 cursor-pointer">
      {text}{" "}
      <span
        onClick={() => setViewDetails(false)}
        className="font-semibold text-black"
      >
        View less
      </span>
    </p>
  ) : (
    <p
      onClick={() => setViewDetails((prev) => !prev)}
      className="text-sm text-gray-500 cursor-pointer"
    >
      {text.substring(0, 80)}...{" "}
      <span className=" font-semibold text-black">View more</span>
    </p>
  );
};

export default ViewMoreText;
