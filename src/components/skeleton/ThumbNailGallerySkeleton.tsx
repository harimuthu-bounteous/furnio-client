import { FC } from "react";

export const ThumbNailGallerySkeleton: FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 p-6 md:p-0 w-full md:w-1/2 animate-pulse">
      <div className="flex flex-row md:flex-col gap-2 md:gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="w-20 h-20 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
      <div className="w-full max-w-lg h-72 md:h-96 bg-gray-300 rounded-lg"></div>
    </div>
  );
};
