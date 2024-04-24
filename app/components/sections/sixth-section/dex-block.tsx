import { useRef } from "react";
import { FloatingUfo } from "../../common/floating-items/floating-ufo";
import { useScroll } from "framer-motion";
import { useParallax } from "../second-section/second-section";
import { FLoatingFire } from "../../common/floating-items/floating-fire";
import { FloatingKluch } from "../../common/floating-items/floating-kluch";

export const DexBlock = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  return (
    <>
      <div className="min-h-screen flex flex-row lg:flex-col justify-center h-full items-center content-center w-full gap-8 pt-28 p-4 lg:px-36 pb-28 max-w-screen-2xl">
        <div className="flex w-full flex-col lg:flex-row w-full items-center">
          <div className="ms-auto w-full lg:w-2/4 h-full">
            <div className="w-full h-full relative" id="dexscreener-embed">
              <FLoatingFire y={y} />
              <img src="./block6/ufo.png" />
            </div>
          </div>
          <div className="ms-auto w-full lg:w-2/4 h-full relative">
            <div className="w-full h-full relative" id="dexscreener-embed">
              <iframe
                className="w-full h-full dex z-50 relative"
                src="https://dexscreener.com/solana/ERCD6qtvn4sWhmNBLyPXfoKghjFRM3gxAYKxNzcw9a5x?embed=1&theme=dark&trades=0"
              ></iframe>
              <FloatingUfo y={y} />
            </div>
          </div>
        </div>
        <div className="lg:w-full relative">
          <FloatingKluch y={y} />
        </div>
      </div>
    </>
  );
};
