import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { Mail } from "lucide-react";

const Hero = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-3 md:px-6 text-white"
    >
      <Particles
        id="particles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 40,
            },
            color: {
              value: "#10b981",
            },
            links: {
              enable: true,
              color: "#10b981",
              opacity: 0.08,
              distance: 150,
            },
            move: {
              enable: true,
              speed: 0.4,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: 1.5,
            },
          },
        }}
      />

      {/* Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Disponibile per collaborazioni freelance
        </span>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Giuseppe Pisani
        </h1>

        <div className="flex justify-center my-6">
          <img
            src="/profile.jpeg"
            alt="Giuseppe Pisani"
            className="h-25 w-25 rounded-full text-center object-cover border-4 border-zinc-800 shadow-lg"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-emerald-400 md:text-2xl">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Laravel Developer",
              2000,
              "React Developer",
              2000,
              "WordPress Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          Realizzo applicazioni web moderne, software gestionali,
          e-commerce e integrazioni API per aziende e web agency.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            <Mail size={20} />
            Contattami
          </a>
        </div>

        {/* <div className="mt-12 flex flex-wrap justify-center gap-5">

          {[
            "Laravel",
            "React",
            "TypeScript",
            "WordPress",
            "Shopify",
            "Docker",
            "API",
            "MySQL",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition hover:border-emerald-500 hover:text-emerald-400"
            >
              {skill}
            </span>
          ))}

        </div> */}

      </div>

      {/* <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500"
      >
        <ArrowDown size={30} />
      </a> */}
    </section>
  );
};

export default Hero;