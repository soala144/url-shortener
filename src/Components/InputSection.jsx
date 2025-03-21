import React from "react";
import Buttons from "./Buttons";

const InputSection = () => {
  return (
    <div
      className="w-3/4 m-auto "
      style={{
        backgroundImage: "url('src/assets/images/bg-shorten-desktop.svg')",
      }}
    >
      <div className="w-3/4 p-4 flex justify-between items-center rounded-lg m-auto">
        <input type="text" placeholder="place a URL" className="bg-gray" />
        <Buttons borderRadius="4px">Shorten URL</Buttons>
      </div>
    </div>
  );
};

export default InputSection;
