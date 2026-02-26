import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative -z-1 min-h-screen top-(--navbar-height) flex items-center justify-center px-6 bg-black text-white overflow-hidden">
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: {
            color: "transparent",
          },
          particles: {
            number: {
              value: 80,
            },
            color: {
              value: "#10b981",
            },
            links: {
              enable: true,
              color: "#10b981",
              distance: 150,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: 2,
            },
            opacity: {
              value: 0.5,
            },
          },
        }}
      />

      <div className="text-center max-w-2xl z-10">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <TypeAnimation
            sequence={[
              "Giuseppe Pisani",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-emerald-500 text-black px-6 py-3 rounded-xl hover:opacity-80 transition"
          >
            Vedi progetti
          </a>

          <a
            href="#contact"
            className="border border-emerald-500 px-6 py-3 rounded-xl hover:bg-emerald-500 hover:text-black transition"
          >
            Contattami
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;