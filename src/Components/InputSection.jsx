import React from "react";
import Buttons from "./Buttons";
const API_KEY = "7qTNEpl8HBS660N78jjpX0yj9JE0JOE9UAkbisq2YmRcT0h9KEpzW8N7IAmO";
const InputSection = ({ setShortUrl, setLongUrl, longUrl, setIsOpen }) => {
  const handleShorten = async () => {
    try {
      const response = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ url: longUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data?.data?.tiny_url) {
        setShortUrl(data.data.tiny_url);
      } else {
        console.error("Error in response data:", data);
      }
      setIsOpen(true);
      setLongUrl("");
    } catch (error) {
      console.error("Failed to shorten URL:", error);
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
        <Buttons borderRadius="4px" className="w-[5%]" onClick={handleShorten}>
          Shorten URL
        </Buttons>
      </div>
    </div>
  );
};

export default InputSection;
