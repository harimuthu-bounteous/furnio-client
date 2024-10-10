"use client";
import { FC, useState } from "react";
import Typography from "../common/Typography";
import { cn } from "@/src/utils/cn";
import Image from "next/image";

interface TabNavigationProps {
  descriptionImages: {
    ImageUrl: string;
    Alt: string;
  }[];
}

const TabNavigation: FC<TabNavigationProps> = ({ descriptionImages }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full px-6 md:px-28 py-8">
      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-200">
        <button
          onClick={() => handleTabClick("description")}
          className={`px-6 py-2 focus:outline-none ${
            activeTab === "description"
              ? "border-b-2 border-black font-bold"
              : "text-gray-500"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => handleTabClick("additionalInfo")}
          className={`px-6 py-2 focus:outline-none ${
            activeTab === "additionalInfo"
              ? "border-b-2 border-black font-bold"
              : "text-gray-500"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => handleTabClick("reviews")}
          className={cn(
            "px-6 py-2 focus:outline-none",
            activeTab === "reviews"
              ? "border-b-2 border-black font-bold"
              : "text-gray-500"
          )}
        >
          Reviews [5]
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 min-h-[28rem] md:min-h-[33rem]">
        {activeTab === "description" && (
          <>
            <div>
              <Typography
                value="Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road."
                variant="p"
                className="text-gray-700 text-sm md:text-base"
              />

              <Typography
                value="Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio..."
                variant="p"
                className="text-gray-700  text-sm md:text-base mt-4"
              />
            </div>
            <div className="flex flex-col md:flex-row mt-8 justify-around gap-5">
              {descriptionImages.map((descImage) => {
                return (
                  <div className="bg-beige p-4 rounded-lg" key={descImage.Alt}>
                    <Image
                      src={descImage.ImageUrl}
                      alt={descImage.Alt}
                      className="w-full max-h-[33rem]"
                      height={600}
                      width={600}
                      priority
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
        {activeTab === "additionalInfo" && (
          <div>
            <p className="text-gray-700">
              Here you can add additional information about the product...
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <p className="text-gray-700">This product has 5 reviews...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabNavigation;
