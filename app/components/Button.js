import React from "react";

const Button = (props) => {
  const { text, dark, light } = props;
  return (
    <button
      className={
        " rounded-full text-sm   py-1 px-4 sm:text-lg md:text-xl  " +
        (dark
          ? "bg-black text-white hover:bg-white hover:text-black border border-slate-900 hover:duration-200"
          : "") +
        (light
          ? "bg-white text-black border border-slate-900 hover:text-white hover:bg-black "
          : "")
      }
    >
      {text}
    </button>
  );
};

export default Button;
