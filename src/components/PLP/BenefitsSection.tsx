import { FC } from "react";
import Typography from "../common/Typography";
import { benefits } from "@/src/data/Benefits";

const BenefitsSection: FC = () => {
  return (
    <div className="bg-beige flex flex-row items-center justify-center gap-16">
      {benefits.map((benefit) => {
        return (
          <div key={benefit.id} className="flex flex-row px-8 py-28 gap-4">
            {benefit.icon}
            <div className="flex flex-col justify-center">
              <Typography
                value={benefit.title}
                variant="h3"
                className="text-2xl font-semibold"
              />
              <Typography
                value={benefit.description}
                variant="p"
                className="font-medium text-gray-400"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitsSection;
