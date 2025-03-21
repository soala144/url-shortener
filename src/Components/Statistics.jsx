import React from "react";

const Statistics = () => {
  return (
    <div className="w-3/4 m-auto pt-30 ">
      <div className="items-center flex flex-col">
        <h2 className="text-primary  font-black text-3xl mb-2">
          Advanced Statistics
        </h2>
        <p className="text-gray-300 text-center">
          Track how your links are performing across the web with our <br />
          advanced statistics dashboard.
        </p>
      </div>
      <div>
        <div className="">
          <img
            src="src/assets/images/bg-shorten-desktop.svg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
