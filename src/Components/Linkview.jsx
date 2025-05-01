import React, { useState } from "react";
import Loader from "./Loader";

const Linkview = ({ isLoading, shortUrl, isOpen, savedUrl }) => {
  const [buttonText, setButtonText] = useState("Copy");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setButtonText("Error");
      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      {isOpen && (
        <div className="md:w-3/4 bg-white rounded-2xl mt-20 md:items-center w-[95%] py-7  flex-col md:flex-row flex justify-between m-auto">
          <a
            href=""
            className="md:w-2/5 text-primary text-2xl w-[90%] m-auto pb-3 md:p-2"
          >
            {savedUrl}
          </a>

          <div className="bg-grey w-full h-0.5 "></div>
          <div className="md:w-[30%]  w-[90%] m-auto  flex flex-col md:flex-row md:gap-2 md:ml-6 ">
            <a href={shortUrl} className="text-green text-xl pb-3">
              {shortUrl}
            </a>
            <button
              className="md:w-[5%]   py-3 px-5 text-lg rounded  text-grey bg-green"
              onClick={handleCopy}
            >
              {buttonText}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Linkview;
