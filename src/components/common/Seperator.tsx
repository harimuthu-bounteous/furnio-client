interface SeparatorProps {
  orientation: "horizontal" | "vertical";
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  orientation,
  className = "",
}) => {
  return (
    <div
      className={`${
        orientation === "horizontal" ? "border-t" : "border-l"
      } border-black border-2 bg-black ${className}`}
      style={{
        width: orientation === "horizontal" ? "100%" : "10px",
        height: orientation === "horizontal" ? "10px" : "100%",
      }}
    />
  );
};

export default Separator;
