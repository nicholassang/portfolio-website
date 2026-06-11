interface Experience {
  title: string;
  description: string;
  image: string;
  MDXComponent?: any;
  github: string,
  website: string | null,
  skills: string[],
  year: number
}

const experiences: Experience[] = [
  {
    title: "GovTech Systems Engineer Intern",
    description: "Internship at GovTech where I worked under the Smart City Technology Disvision (SCTD) in the Open Digital Platform (ODP) project.",
    image: "govtech.png",
    MDXComponent: null,
    github: "",
    website: "",
    skills: ["Terraform", "AWS", "Azure", "Java", "Springboot", "Kubernetes", "Docker"],
    year: 2026
  }
];

export default experiences;