import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100, percentage
  details?: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 80, details: "Comfortable with TS features, typing, and React + Node integration" },
      { name: "Python", level: 60, details: "Used for scripting, automation, and some backend work. I also mainly code algorithms & data structures questions with Python" },
      { name: "Java", level: 40, details: "Familiar with core Java and OOP concepts, worked in many school projects with Java" },
      { name: "C++", level: 20, details: "Basic knowledge of syntax and algorithms, mainly build with CMake, and dabbled with Emscripten C++" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", level: 80, details: "Comfortable with hooks, context API, state management, and building responsive web apps. Most, if not all, of my projects I use React" },
      { name: "Node.js", level: 60, details: "Building REST APIs, server-side logic, and working with Express and databases" },
      { name: "Express", level: 60, details: "Relatively experienced with routing, middleware, REST APIs, and server setup" },
      { name: "FastAPI", level: 60, details: "Used for creating fast Python REST APIs with automatic docs and validation" },
      { name: "Vue", level: 40, details: "Basic understanding of components, reactivity, and Vue CLI projects. I touched Vue in one of my school projects" },
      { name: "Spring", level: 20, details: "Familiar with Spring Boot basics and dependency injection, was taught the fundamentals in my coursework" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 80, details: "Familiar with designing schemas, writing queries, indexing, and optimization for large datasets. I took Advanced Databases as my coursework, so I have knowledge of Bloom Filters and Query Optimization" },
      { name: "MySQL", level: 40, details: "Mainly used MySQL for my projects before I switched to PostgreSQL for industry relevance" },
      { name: "DynamoDB", level: 40, details: "Basic knowledge of NoSQL concepts, tables, and key-value operations, I understand how DynamoDB works architecturally through my 2 AWS certifications (Associate Solutions Architect and Associate Developer)" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS EC2", level: 60, details: "Used for one of my projects, and am familar with how it can be integrated in larger scale productions" },
      { name: "Lightsail", level: 60, details: "Deploying simple applications on Lightsail before" },
      { name: "AWS Lambda", level: 40, details: "Mainly used Lambda for REST API connections for a serverless architecture" },
      { name: "API Gateway", level: 40, details: "Configuring endpoints, request/response mapping, and authorization with AWS projects" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", level: 80, details: "I used Github to store all my projects, so I am confident in its features" },
      { name: "Git", level: 80, details: "Familiar with git commands for Github, such as branching and commit history tracking" },
      { name: "Docker", level: 60, details: "Used docker to containerize some of my projects for portability" },
      { name: "Docker Compose", level: 40, details: "For projects that requires many different containers, I will use Docker Compose. Though I am not too familiar with yaml files, I am confident I can quickly learn it" },
      { name: "Nginx", level: 40, details: "Used as reverse proxy and load balancer for most of my deployments. I put it lower than the rest because I do not fully understand how forward proxies can be used, as I mean used Nginx for reverse proxies for my servers" },
    ],
  },
];

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SkillsSection = () => {
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const toggleSkill = (skillName: string) => {
    setExpandedSkills((prev) => ({ ...prev, [skillName]: !prev[skillName] }));
  };

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
              {category.skills.map((skill, i) => {
                const isExpanded = expandedSkills[skill.name] || false;
                return (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <button
                      onClick={() => toggleSkill(skill.name)}
                      className="flex justify-between items-center mb-1 text-sm font-medium w-full focus:outline-none"
                    >
                      <span>{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span>{skill.level}%</span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </div>
                    </button>

                    <div className="w-full h-4 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden mb-1">
                      <div
                        className="h-full rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <AnimatePresence>
                      {isExpanded && skill.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-700 dark:text-gray-300 mt-1"
                        >
                          {skill.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;