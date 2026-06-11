import ExperienceCard from "../components/ExperienceCard";
import experiences from "../data/experience";

const Experience = () => {
  return (
    <div className = "pt-5 mt-5 p-4">
      <div className="scale-90 max-w-6xl pt-5 mt-5 mx-auto p-4 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map(e => (
          <ExperienceCard key={e.title} {...e} />
        ))}
      </div>
      <div className="w-full h-px bg-gray-300 dark:bg-gray-700" />
    </div>
  );
};

export default Experience;