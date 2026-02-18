import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  github?: string;
  website?: string;
  skills?: string[];
  year?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  slug,
  github,
  website,
  skills = [],
  year,
}: ProjectCardProps) => {
  return (
    <div className="group border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <Link to={`/projects/${slug}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />

          {/* Year Badge */}
          {year && (
            <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
              {year}
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">

        {/* Title */}
        <Link to={`/projects/${slug}`}>
          <h3 className="font-bold text-lg group-hover:text-cyan-600">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 border rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        {(github || website) && (
          <div className="flex gap-3 mt-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400"
              >
                <FaGithub />
              </a>
            )}

            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;