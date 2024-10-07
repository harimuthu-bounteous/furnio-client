import { FC } from "react";
import Button from "../common/Button";

const Pagination: FC = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4 md:gap-8 pb-8">
      <Button value="1" variant="v3" size="large" />
      <Button value="2" variant="v3" size="large" />
      <Button value="3" variant="v3" size="large" />
      <Button value="Next" variant="v3" size="large" />
    </div>
  );
};

export default Pagination;
