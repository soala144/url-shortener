import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col w-3/4 m-auto">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
