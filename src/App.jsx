import Hero from "./Components/Hero";
import InputSection from "./Components/InputSection";
import Navbar from "./Components/Navbar";
import Statistics from "./Components/Statistics";

function App() {
  return (
    <div className="flex flex-col m-auto w-full">
      <Navbar />
      <Hero />
      <InputSection />
      <div className="bg-grey relative">
        <Statistics />
      </div>
    </div>
  );
}

export default App;
