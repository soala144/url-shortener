import React from "react";
import Buttons from "./Buttons";

const Linkview = ({ shortUrl, longUrl }) => {
  return (
    <div className="w-3/4 bg-white mt-20 items-center flex justify-between m-auto">
      <a href="" className="w-2/5  p-2">
        {longUrl}
      </a>
      <div className="w-[30%] flex gap-2 ml-6 ">
        <a href={shortUrl}>{shortUrl}</a>
        <Buttons>Copy</Buttons>
      </div>
    </div>
  );
};

export default Linkview;
