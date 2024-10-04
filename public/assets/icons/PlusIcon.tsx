import { FC } from "react";

interface PlusIconProps {
  className?: string;
}

const PlusIcon: FC<PlusIconProps> = ({ className }) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.731 7.479H6.832V12.447H4.877V7.479H0.00100011V5.708H4.877V0.716999H6.832V5.708H11.731V7.479Z"
        fill="black"
        // className="hover:fill-white"
      />
    </svg>
  );
};

export default PlusIcon;
