import stressGameMDX from "../projects/stress-game.mdx";
import popularMoviesMDX from "../projects/popular-movies-filming-locations.mdx";
import iwanttorageMDX from "../projects/i-want-to-rage.mdx";
import faceRecognitionMDX from "../projects/face-recognition.mdx";
import ecoedgeMDX from "../projects/eco-edge.mdx";
import heapsUnifyMDX from "../projects/heaps-unify.mdx";
import schoolfinderzMDX from "../projects/schoolfinderz.mdx";
import betterreadmeMDX from "../projects/better-readme.mdx";
import magicOfPiMDX from "../projects/magic-of-pi.mdx";

interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  MDXComponent?: any;
  github: string,
  website: string | null,
  skills: string[],
  year: number
}

const projects: Project[] = [
  {
    title: "Stress Card Game",
    slug: "stress-game",
    description: "A 1v1 childhood card game with matchmaking and roomhandling.",
    image: "stress-game.png",
    MDXComponent: stressGameMDX,
    github: "https://github.com/nicholassang/Stress-Card-Game",
    website: "https://www.stressgame.nicholassang.com/",
    skills: ["Typescript", "React", "Node.js", "Express", "AWS"],
    year: 2026
  },
  {
    title: "Popular Movies Filming Locations Globe",
    slug: "popular-movies-filming-locations",
    description: "Display the current top 100 movie filming locations on a globe.",
    image: "popular-movies-filming-locations.png",
    MDXComponent: popularMoviesMDX,
    github: "https://github.com/nicholassang/Popular-Movies-Filming-Locations",
    website: "https://popularmoviesfilminglocations.nicholassang.com/",
    skills: ["Typescript", "React", "Python", "Selenium", "Docker", "Docker Compose", "AWS"],
    year: 2026
  },
  {
    title: "I Want To Rage",
    slug: "i-want-to-rage",
    description: "A browser extension that allows you to take your frustrations out on your computer",
    image: "i-want-to-rage.png",
    MDXComponent: iwanttorageMDX,
    github: "https://github.com/nicholassang/iwanttorage",
    website: "",
    skills: ["Javascript", "HTML2 Canvas"],
    year: 2026
  },
  {
    title: "[CS102] FaceRecognition GUI",
    slug: "face-recognition",
    description: "Group Project creating a GUI Class Attendance System using Java design patterns",
    image: "face-recognition.jpg",
    MDXComponent: faceRecognitionMDX,
    github: "https://github.com/nicholassang/FaceRecognitionCS102",
    website: "",
    skills: ["Java", "OpenCV"],
    year: 2025
  },
  {
    title: "[CS460] EcoEdge Project",
    slug: "ecoedge-project",
    description: "Group Project on embedded systems to simulate a windturbine",
    image: "ecoedge.jpg",
    MDXComponent: ecoedgeMDX,
    github: "https://github.com/nicholassang/EcoEdge-Project",
    website: "",
    skills: ["Python", "C++", "Arduino", "RaspberryPi"],
    year: 2025
  },
  {
    title: "[HEAPS] Unify Social Calendars",
    slug: "unify-social-calendars",
    description: "Team-based programme on a muti-user calendar application",
    image: "unify.jpg",
    MDXComponent: heapsUnifyMDX,
    github: "https://github.com/nicholassang/HEAPS-Unify",
    website: "",
    skills: ["React", "Node.js", "Express"],
    year: 2025
  },
  {
    title: "[IS206] Schoolfinderz Application",
    slug: "schoolfinderz",
    description: "Group project on developing an application with Google Maps API",
    image: "schoolfinderz.png",
    MDXComponent: schoolfinderzMDX,
    github: "https://github.com/nicholassang/-IS206-Schoolfinderz",
    website: "https://wad2-proj.vercel.app/",
    skills: ["Vue", "Node.js", "Express", "Google Maps API"],
    year: 2025
  },
  {
    title: "BetterReadME",
    slug: "better-readme",
    description: "A multi-language supported CLI tool, that generates ReadMe files for you.",
    image: "better-readme.png",
    MDXComponent: betterreadmeMDX,
    github: "https://github.com/nicholassang/BetterReadME",
    website: "",
    skills: ["C++", "Python"],
    year: 2024
  },
  {
    title: "Magic Of Pi",
    slug: "magic-of-pi",
    description: "Simple simulation with pi using Monte Carlo, testing the performance of C++ webassembly against vanilla javascript",
    image: "magic-of-pi.png",
    MDXComponent: magicOfPiMDX,
    github: "https://github.com/nicholassang/MagicOfPI",
    website: "https://nicholassang.github.io/MagicOfPI/",
    skills: ["Javascript", "WebAssembly C++"],
    year: 2024
  },
];

export default projects;