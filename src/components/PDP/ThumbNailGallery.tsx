"use client";
import { FC, useState } from "react";

interface ThumbNailGalleryProps {
  images: string[];
}

const ThumbNailGallery: FC<ThumbNailGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex space-x-4 w-1/2">
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => {
          if (image !== selectedImage)
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-20 h-20 rounded-lg bg-beige object-contain transition-transform transform group-hover:rotate-6 group-hover:scale-110 duration-300"
                />
              </div>
            );
        })}
      </div>

      <div className="w-full max-w-lg h-96">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full rounded-lg bg-beige"
        />
      </div>
    </div>
  );
};

export default ThumbNailGallery;
