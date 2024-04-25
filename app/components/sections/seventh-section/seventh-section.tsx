import { AppearWrapper } from "../../common/appear-wrapper";

export const SeventhSection = (props: any) => {
  const { y } = props;

  return (
    <div className="seventh-block w-full flex justify-center blurred-border-top overflow-x-clip">
      <div
        className="seventh-block min-h-screen w-full pt-48 p-4 lg:px-64 pb-48
        max-w-screen-2xl"
      >
        <AppearWrapper>
          <p className="text-6xl font-bold text-white text-center leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </AppearWrapper>
      </div>
    </div>
  );
};