import SkillCard from "./SkillCard_OLD";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Le mie competenze
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            title="Frontend"
            skills={["React", "TypeScript", "Tailwind", "Redux"]}
          />

          <SkillCard
            title="Backend"
            skills={["Laravel", "PHP", "Node.js", "MySQL"]}
          />

          <SkillCard
            title="Tools & Cloud"
            skills={["AWS", "Git", "Docker", "Postman"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;