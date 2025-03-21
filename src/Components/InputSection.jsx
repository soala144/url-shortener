import React from "react";
import Buttons from "./Buttons";

const InputSection = () => {
  return (
    <div
      className="w-3/4 m-auto "
      style={{
        background: "url('src/assets/images/bg-shorten-desktop.svg'), #3a3054",
      }}
    >
      <div className="w-3/4 p-4 flex justify-between items-center rounded-lg m-auto">
        <input
          type="text"
          placeholder="Shorten URL here ..."
          className="bg-white w-[82%] h-10 rounded px-3"
        />
        <Buttons borderRadius="4px" className="w-[5%]">
          Shorten URL
        </Buttons>
      </div>
    </div>
  );
};

export default InputSection;
