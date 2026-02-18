import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100, percentage
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 60 },
      { name: "Java", level: 40 },
      { name: "C++", level: 20 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", level: 80 },
      { name: "Node.js", level: 60 },
      { name: "Express", level: 60 },
      { name: "FastAPI", level: 60 },
      { name: "Vue", level: 40 },
      { name: "Spring", level: 20 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 60 },
      { name: "DynamoDB", level: 20 },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS EC2", level: 60 },
      { name: "Lightsail", level: 60 },
      { name: "AWS Lambda", level: 40 },
      { name: "API Gateway", level: 40 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", level: 80 },
      { name: "Git", level: 80 },
      { name: "Docker", level: 60 },
      { name: "Docker Compose", level: 40 },
      { name: "Nginx", level: 40 },
    ],
  },
];

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 scroll-mt-25"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="text-4xl font-semibold mb-12 text-center">{"{{ Technical Skills }}"}</h2>

      <div className="grid gap-10 w-full max-w-5xl md:grid-cols-2">
        {skillsData.map((category) => (
          <motion.div
            key={category.category}
            className="p-6 rounded-2xl shadow-md border transition-colors duration-300"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderColor: "var(--text-color)",
            }}
            variants={skillVariants}
          >
            <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-4 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
