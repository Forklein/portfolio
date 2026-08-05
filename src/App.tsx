import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Collaboration from "./components/Collaboration";
// import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Analytics />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Collaboration />
      {/* <TechStack /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App;