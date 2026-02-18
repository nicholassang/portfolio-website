import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects";

const components = {
  h1: (p: any) => (
    <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "1.5rem 0 1rem" }} {...p} />
  ),
  h2: (p: any) => {
    const id = p.children?.toString().toLowerCase().replace(/\s+/g, "-");
    return (
      <h2
        id={id}
        style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.25rem 0 0.75rem" }}
        {...p}
      />
    );
  },
  p: (p: any) => (
    <p style={{ fontSize: "1.1rem", margin: "0.75rem 0", lineHeight: 1.7 }} {...p} />
  ),
  ul: (p: any) => (
    <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", margin: "0.75rem 0" }} {...p} />
  ),
  li: (p: any) => (
    <li style={{ margin: "0.4rem 0" }} {...p} />
  ),
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2"));

    const mapped = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
    }));

    setHeadings(mapped);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [project]);

  if (!project) return <p style={{ padding: "1rem" }}>Project not found</p>;

  const MDXComponent = project.MDXComponent ?? null;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Get position relative to page
    const y = element.getBoundingClientRect().top + window.scrollY;

    // If first section, scroll to top
    if (id === headings[0]?.id) {
      window.scrollTo({
        top: 0, // force first section to top
        behavior: "smooth",
      });
    } else {
      // For other sections, scroll with navbar offset
      const offset = 112; // navbar height
      window.scrollTo({
        top: y - offset,
        behavior: "smooth",
      });
    }
  };
  
  return (
  <>
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-12">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/projects")}
        className="mb-8 text-cyan-500 hover:text-cyan-800 transition"
      >
        ← Back to Projects
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* MDX Content */}
        <div className="lg:col-span-3 ml-25">
          <h1 className="text-4xl font-bold mb-6">
            {project.title}
          </h1>

          {MDXComponent ? (
            <MDXComponent components={components} />
          ) : (
            <p>Blog not found.</p>
          )}
        </div>

        {/* Table of Contents */}
        <div className="hidden lg:block">
          <div className="sticky top-28 max-h-[70vh] overflow-y-auto border-l pl-6">
            <h3 className="font-bold mb-4 text-gray-300 dark:text-gray-400">
              Contents
            </h3>

            <ul className="space-y-3 text-sm">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  onClick={() => scrollTo(heading.id)}
                  className={`cursor-pointer transition-colors ${
                    activeId === heading.id
                      ? "text-cyan-600 font-medium"
                      : "text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  {heading.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-px bg-gray-300 dark:bg-gray-700" />
  </>
  );
};

export default ProjectDetail;
