import React from "react";
const statistics = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    img: "src/assets/images/icon-brand-recognition.svg",
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    img: "src/assets/images/icon-detailed-records.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    img: "src/assets/images/icon-fully-customizable.svg",
  },
];
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
      <div className="flex w-full m-auto mt-20">
        {statistics.map((stats) => (
          <>
            <div className="w-[45%] bg-white px-5 relative">
              <figure className=" absolute rounded-full -top-6 left-1/5 transform bg-firstpurple -translate-x-1/2 h-12 w-12 justify-center flex items-center">
                <img
                  src={stats.img}
                  alt=""
                  className=" w-1/2 m-auto object-contain "
                />
              </figure>
              <h4 className="text-primary mb-4 mt-15 font-bold text-2xl">
                {stats.title}
              </h4>
              <p className="">{stats.description}</p>
            </div>

            <div className="w-[4%] bg-green h-1 items-center mt-[80px]"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
