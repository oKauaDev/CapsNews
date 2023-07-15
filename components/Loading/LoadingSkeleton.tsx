import React from "react";
import "@/app/globals.css";

const LoadingSkeleton = () => {
  return (
    <div className="fixed w-screen h-screen bg-transparence-500 flex items-center justify-center">
      <div className="custom-loader" />
    </div>
  );
};

export default LoadingSkeleton;
