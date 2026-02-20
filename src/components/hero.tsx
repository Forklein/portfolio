const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Ciao, sono Giuseppe 👋
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Full Stack Developer
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
          >
            Vedi progetti
          </a>

          <a
            href="#contact"
            className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          >
            Contattami
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;