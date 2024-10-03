import { FC } from "react";
import Typography from "@/src/components/common/Typography";
import BreadcrumbArrow from "@/public/assets/icons/BreadcrumbArrow";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className='h-96 bg-[url("/assets/images/HeroBackground.png")] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-2'>
      <Typography variant="h1" className="text-5xl font-medium">
        Shop
      </Typography>
      <div className="flex flex-row items-center justify-center gap-1">
        <Typography variant="p" className="font-medium">
          Home
        </Typography>
        <BreadcrumbArrow className="h-4 w-4" />
        <Typography variant="p" className="">
          Shop
        </Typography>
      </div>
    </div>
  );
};

export default HeroSection;
