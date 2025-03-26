import React from "react";
import Buttons from "./Buttons";

const InputSection = ({ setShortUrl, setLongUrl, longUrl }) => {
  const shortenUrl = async () => {
    try {
      const res = await fetch("/api/shorten/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: longUrl }),
      });
      const data = await res.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error("Error Shortening Url", error);
    }
  };
  return (
    <div
      className="w-3/4 m-auto opacity-80 "
      style={{
        background: "url('src/assets/images/bg-shorten-desktop.svg'), #3a3054",
      }}
    >
      <div className="w-3/4 p-4 flex justify-between items-center rounded-lg m-auto">
        <input
          type="text"
          placeholder="Shorten URL here ..."
          className="bg-white w-[82%] h-10 rounded px-3"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        {console.log(longUrl)}
        <Buttons borderRadius="4px" className="w-[5%]" onClick={shortenUrl}>
          Shorten URL
        </Buttons>
      </div>
    </div>
  );
};

export default InputSection;
