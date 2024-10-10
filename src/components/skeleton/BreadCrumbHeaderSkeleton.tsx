import { FC } from "react";

export const BreadCrumbHeaderSkeleton: FC = () => {
  return (
    <div className="bg-beige flex flex-row items-center p-4 md:px-16 md:py-6 gap-1 md:gap-3 animate-pulse">
      <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-6 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-6 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-36 bg-gray-300 rounded-md"></div>
    </div>
  );
};
