import { FC } from "react";

export const ProductInfoSkeleton: FC = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto px-8 md:px-4 md:py-2 bg-white rounded-md animate-pulse">
      <div className="h-8 w-64 bg-gray-300 mb-4"></div>
      <div className="h-6 w-32 bg-gray-300 mb-3"></div>

      <div className="flex items-center gap-4 my-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-6 w-6 bg-gray-300 rounded"></div>
          ))}
        </div>
        <div className="w-0.5 h-8 bg-gray-300 mx-2"></div>
        <div className="w-40 h-6 bg-gray-300"></div>
      </div>

      <div className="h-16 w-full bg-gray-300 mb-6"></div>

      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 mt-4">
        <div className="w-full h-12 bg-gray-300 rounded-md"></div>
        <div className="w-full h-12 bg-gray-300 rounded-md"></div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="h-6 w-32 bg-gray-300"></div>
        <div className="h-6 w-64 bg-gray-300"></div>
        <div className="h-6 w-48 bg-gray-300"></div>
        <div className="h-6 w-80 bg-gray-300"></div>
      </div>
    </div>
  );
};
