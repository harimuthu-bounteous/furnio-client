import { FC } from "react";

interface BreadcrumbArrowProps {
  className?: string;
}

const BreadcrumbArrow: FC<BreadcrumbArrowProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
    </svg>
  );
};

export default BreadcrumbArrow;
