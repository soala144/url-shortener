import { useState } from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import InputSection from "./Components/InputSection";
import Linkview from "./Components/Linkview";
import Navbar from "./Components/Navbar";
import Statistics from "./Components/Statistics";

function App() {
  const [longUrl, setLongUrl] = useState("bb");
  const [shortUrl, setShortUrl] = useState("");
  return (
    <div className="flex flex-col m-auto w-full">
      {console.log(longUrl)}
      <Navbar />
      <Hero />
      <InputSection
        setLongUrl={setLongUrl}
        longUrl={longUrl}
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
      />
      <>
        <div className="bg-grey mt-[-40px]">
          <Linkview longUrl={longUrl} shortUrl={shortUrl} />
          <Statistics />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
