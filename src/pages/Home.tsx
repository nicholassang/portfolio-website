import { motion } from "framer-motion";
import SkillsSection from "../components/SkillsSection";

const HomePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      {/* ================= HOME ================= */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div className="w-64 h-80 md:w-80 md:h-96 flex-shrink-0" whileHover={{ scale: 1.05 }}>
          <img
            src="/nicholassang.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div className="max-w-xl text-center md:text-left" variants={sectionVariants}>
          <h1 className="text-5xl font-bold mb-4">Hi! I’m Nicholas.</h1>
          <p className="text-lg opacity-80 mb-6">
            I’m a Software Engineering student at Singapore Management University (SMU), passionate about creating full-stack applications.
          </p>
          <a
            href="/projects"
            className="inline-block px-6 py-3 border rounded-lg hover:bg-gray-400 duration-50"
          >
            Check out my projects !
          </a>
        </motion.div>
      </motion.section>

      <div className="w-full h-px my-12 bg-gray-300 dark:bg-gray-700" />

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-6 md:px-20 scroll-mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div className="w-80 h-80 md:w-96 md:h-96 flex-shrink-0" whileHover={{ scale: 1.05 }}>
          <img
            src="/nicholassang%20overseas.png"
            alt="About Me"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div className="max-w-xl text-center md:text-left" variants={sectionVariants}>
          <h2 className="text-4xl font-semibold mb-10">{"{{ About Me }}"}</h2>
          <div className="text-lg leading-relaxed space-y-4 opacity-80">
            <p>
              I love building new projects, facing challenges, and sometimes failing - all as a way to learn modern technologies more deeply.
            </p>
            <p className="font-semibold italic opacity-100">
              “Failure is simply the opportunity to begin again, this time more intelligently.” - Henry Ford
            </p>
            <p>
              Technology is constantly evolving, presenting complex problems that inspire me to grow and improve. I focus on writing cleaner, maintainable code to ensure my projects remain robust and scalable.
            </p>
            <p>
              Outside of coding, I enjoy playing board games, watching shows, and hiking - it’s how I recharge and stay curious.
            </p>
          </div>
        </motion.div>
      </motion.section>

      <div className="w-full h-px my-12 bg-gray-300 dark:bg-gray-700" />

      {/* ================= SKILLS ================= */}
      <SkillsSection/>

      <div className="w-full h-px mt-20 bg-gray-300 dark:bg-gray-700" />
    </div>
  );
};

export default HomePage;
