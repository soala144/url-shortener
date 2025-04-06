import { useState } from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import InputSection from "./Components/InputSection";
import Linkview from "./Components/Linkview";
import Navbar from "./Components/Navbar";
import Statistics from "./Components/Statistics";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [savedUrl, setSavedUrl] = useState("");
  return (
    <div className="flex flex-col m-auto w-full">
      <Navbar />
      <Hero />
      <InputSection
        setLongUrl={setLongUrl}
        longUrl={longUrl}
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
        setIsOpen={setIsOpen}
        setSavedUrl={setSavedUrl}
      />
      <>
        <div className="bg-grey mt-[-40px]">
          <Linkview
            longUrl={longUrl}
            shortUrl={shortUrl}
            isOpen={isOpen}
            savedUrl={savedUrl}
          />
          <Statistics />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
