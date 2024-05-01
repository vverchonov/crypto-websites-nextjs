"use client";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyIcon } from "./icons/copy-icon";
import { CA } from "@/app/[locale]/urls";
import { BigText } from "./text/big-text";

export const CopyCa = (props: any) => {
  const onCopy = () => {
    navigator.clipboard.writeText(CA);
    toast.success("Link copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={onCopy}
      className="text-center text-xl cursor-pointer flex flex-row gap-4 align-center justify-center items-center select-non flex z-50"
    >
      <BigText text={`CA: ${CA}`} />
      <CopyIcon />
    </button>
  );
};
