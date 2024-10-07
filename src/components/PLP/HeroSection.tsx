import { FC } from "react";
import Typography from "@/src/components/common/Typography";
import BreadcrumbArrow from "@/public/assets/icons/BreadcrumbArrow";
import Link from "next/link";

const HeroSection: FC = () => {
  return (
    <div className='h-96 bg-[url("/assets/images/HeroBackground.png")] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-2'>
      <Typography variant="h1" className="text-5xl font-medium" value="Shop" />
      <div className="flex flex-row items-center justify-center gap-1">
        <Link href="/">
          <Typography
            variant="p"
            className="font-medium hover:underline"
            value="Home"
          />
        </Link>

        <BreadcrumbArrow className="h-4 w-4" />
        <Link href="/shop">
          <Typography
            variant="p"
            className="font-medium hover:underline"
            value="Shop"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
