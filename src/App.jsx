import Hero from "./Components/Hero";
import InputSection from "./Components/InputSection";
import Navbar from "./Components/Navbar";
import Statistics from "./Components/Statistics";

function App() {
  return (
    <div className="flex flex-col m-auto w-full">
      <Navbar />
      <Hero />
      <div className="bg-grey mt-16 ">
        <InputSection />
        <Statistics />
      </div>
    </div>
  );
}

export default App;
