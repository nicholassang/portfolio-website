import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <div className="scale-90 pt-10 max-w-6xl mt-5 mx-auto p-4 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
      <div className="w-full h-px bg-gray-300 dark:bg-gray-700" />
    </>
  );
};

export default Projects;