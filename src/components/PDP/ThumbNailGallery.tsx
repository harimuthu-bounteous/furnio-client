"use client";
import { FC, useState } from "react";

interface ThumbNailGalleryProps {
  images: { image: string; alt: string }[];
}

const ThumbNailGallery: FC<ThumbNailGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 p-6 md:p-0 w-full md:w-1/2">
      <div className="flex flex-row md:flex-col gap-2 md:gap-4">
        {images.map((image, index) => {
          if (image !== selectedImage)
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.image}
                  alt={`Thumbnail ${image.alt}`}
                  className="w-20 h-20 rounded-lg bg-beige object-contain transition-transform transform group-hover:rotate-6 group-hover:scale-110 duration-300"
                />
              </div>
            );
        })}
      </div>

      <div className="w-full max-w-lg h-72 md:h-96">
        <img
          src={selectedImage.image}
          alt={selectedImage.alt}
          className="w-full h-full rounded-lg bg-beige"
        />
      </div>
    </div>
  );
};

export default ThumbNailGallery;
