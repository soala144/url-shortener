import React from "react";
import Buttons from "./Buttons";
const API_KEY = "7qTNEpl8HBS660N78jjpX0yj9JE0JOE9UAkbisq2YmRcT0h9KEpzW8N7IAmO";
const InputSection = ({
  setShortUrl,
  setLongUrl,
  longUrl,
  setIsOpen,
  setSavedUrl,
  setIsLoading,
  isLoading,
}) => {
  const handleShorten = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
      setIsOpen(true);
      setSavedUrl(longUrl);
      setLongUrl("");
    } catch (error) {
      console.error("Failed to shorten URL:", error);
    }
  };
  return (
    <div
      className="md:w-3/4 w-[95%] rounded m-auto opacity-80"
      style={{
        background: "url('/images/bg-shorten-desktop.svg'), #3a3054",
      }}
    >
      <div className="md:w-3/4 w-[95%] p-4 flex gap-4 flex-col md:flex-row justify-between items-center rounded-lg m-auto">
        <input
          type="text"
          placeholder="Shorten URL here ..."
          className="bg-white md:w-[82%] w-full  h-10 rounded px-3"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        {console.log(longUrl)}
        <button
          className="md:w-[5%] w-full py-3 px-5 text-lg rounded text-grey bg-green"
          onClick={handleShorten}
          disabled={isLoading}
        >
          Shorten URL
        </button>
      </div>
    </div>
  );
};

export default InputSection;
