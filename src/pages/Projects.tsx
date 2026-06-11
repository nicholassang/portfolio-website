import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
        <div className="scale-97 sm:scale-95 max-w-6xl mx-auto p-4 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      <div className="w-full h-px bg-gray-300 dark:bg-gray-700" />
    </>
  );
};

export default Projects;