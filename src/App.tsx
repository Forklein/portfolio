import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  )
}

export default App;