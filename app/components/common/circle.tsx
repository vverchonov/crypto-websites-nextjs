export const Circle = (props: any) => {
  return (
    <div
      className={
        "flex transform translate-y-1/4 -rotate-[16deg] grow " +
        props.customClass
      }
    >
      <svg
        viewBox="0 0 180 90"
        fill={props.fill || "none"}
        className={"w-full h-full"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="90" cy="45" rx="90" ry="45" />
      </svg>
    </div>
  );
};