"use client";

import { useState } from "react";
import { SwitchLang } from "./switch-lang";

const imgClass = "cursor-pointer mb-4 w-44 md:mb-0 lg:w-56";

export const Banner = (props: any) => {
  const [showBanner, setShowBanner] = useState(true);

  const onClick = () => {
    document.body.style.overflow = "auto";
    setShowBanner(false);
  };

  const onHover = (e: any) => {
    const noButton = document.querySelector("#noButton");
    if (!noButton) {
      return;
    }
    //@ts-ignore
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    //@ts-ignore
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    //@ts-ignore
    noButton.style.position = "absolute";
    //@ts-ignore
    noButton.style.left = `${x}px`;
    //@ts-ignore
    noButton.style.top = `${y}px`;
  };

  return (
    <>
      {showBanner ? (
        <div className="w-full h-[100vh] bg-black justify-center align-center overflow-hidden">
          <div className="flex w-full p-4 justify-center align-center">
            <SwitchLang />
          </div>
          <div className="div-fw h-fit w-full flex justify-center align-center">
            <div className="flex md:flex-row flex-col justify-end md:items-center ml-0 space-x-0 lg:space-x-4 lg:mr-24">
              <div className="lg:min-w-56 min-w-44">
                <img
                  onClick={onClick}
                  className={imgClass + " "}
                  src="./banner/yes.webp"
                />
              </div>
              <div className="lg:min-w-56 min-w-44">
                <img
                  id="noButton"
                  onMouseEnter={onHover}
                  className={
                    imgClass + " transition transform duration-300 ease-in-out"
                  }
                  src="./banner/no.webp"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};