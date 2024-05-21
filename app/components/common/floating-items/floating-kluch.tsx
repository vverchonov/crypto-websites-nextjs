import { motion } from "framer-motion";

export const FloatingKluch = (props: any) => {
  return (
    <div
      className={
        "absolute left-0 -bottom-0 tranfrom z-0  select-none " +
        props.customTranslate
      }
    >
      <motion.div className="flex w-fit" style={{ y: props.y }}>
        <motion.div
          className="w-fit flex justify-center"
          initial={{
            transform: "translateZ(8px) translateY(-2px) translateX(0px)",
          }}
          animate={{
            transform: "translateZ(12px) translateY(-16px) translateX(10px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img
            className={"w-1/12 drop-shadow-2xl " + props.customClass}
            src="./block6/kluch.webp"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};