import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  skills: string[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;