import stressGameMDX from "../projects/stress-game.mdx";
import popularMoviesMDX from "../projects/popular-movies-filming-locations.mdx";
import iwanttorageMDX from "../projects/i-want-to-rage.mdx";
import faceRecognitionMDX from "../projects/face-recognition.mdx";
import ecoedgeMDX from "../projects/eco-edge.mdx";
import heapsUnifyMDX from "../projects/heaps-unify.mdx";
import schoolfinderzMDX from "../projects/schoolfinderz.mdx";
import betterreadmeMDX from "../projects/better-readme.mdx";
import magicOfPiMDX from "../projects/magic-of-pi.mdx";
import odoodeploymentMDX from "../projects/odoo-deployment.mdx";
import artstudiocafeMDX from "../projects/art-studio-cafe.mdx";
import tpchq13MDX from "../projects/tpch-q13.mdx";
import finsightMDX from "../projects/finsight.mdx";
import brainbotMDX from "../projects/brainbot.mdx";
import orderBookMDX from "../projects/orderbook.mdx";
import tradingBotMDX from "../projects/tradingbot.mdx";


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
    title: "Order Book Implementations",
    slug: "order-book-implementations",
    description: "Implementations of order book algorithms for high-frequency trading under different simulated market conditions.",
    image: "order-book.png",
    MDXComponent: orderBookMDX,
    github: "https://github.com/nicholassang/Order-Book-Implementations",
    website: "",
    skills: ["C++", "CMake"],
    year: 2026
  },
  {
    title: "[SGxHK Quant Trading Hackathon] Trading Bot",
    slug: "trading-bot",
    description: "A deployed bot earning profits through cryptocurrency trading.",
    image: "trading-bot.jpg",
    MDXComponent: tradingBotMDX,
    github: "https://github.com/nicholassang/Quant-Trading-Hack-SG-HK-26",
    website: "",
    skills: ["Python", "AWS", "Termux", "Apscheduler"],
    year: 2026
  },
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
    title: "[IS214] Azure Kubernetes Odoo Deployment",
    slug: "is214-azure-kubernetes-odoo-deployment",
    description: "CI/CD of an Odoo system deployment on Azure Kubernetes Service, including scaling and monitoring",
    image: "esm-odoo.png",
    MDXComponent: odoodeploymentMDX,
    github: "https://github.com/nicholassang/IS214-e08g04t07-odoo17",
    website: "",
    skills: ["Azure Kubernetes", "Azure DevOps", "Azure CLI", "Docker", "Docker Compose"],
    year: 2026
  },
  {
    title: "[IS213] Art Studio Cafe Booking System",
    slug: "is213-art-studio-cafe-booking-system",
    description: "A microservice architecture project on a booking system for an art studio cafe",
    image: "art-cafe.png",
    MDXComponent: artstudiocafeMDX,
    github: "https://github.com/nicholassang/IS213-Art-Studio-Cafe-Booking-Microservice",
    website: "",
    skills: ["RabbitMQ", "Kong API Gateway", "FastAPI", "Python", "Docker", "AWS EC2", "PostgreSQL"],
    year: 2026
  },
  {
    title: "[CS465] TPCH Q13 Specialised Preprocessor",
    slug: "cs465-specialised-preprocessor",
    description: "A specialised preprocessor for TPCH Q13, competing against DuckDb",
    image: "tpch-q13.png",
    MDXComponent: tpchq13MDX,
    github: "https://github.com/nicholassang/IS465-TPCH-Q13-Specialised-Preprocessor",
    website: "",
    skills: ["Python", "C++", "DuckDB"],
    year: 2026
  },
  {
    title: "[IS469] Finsight",
    slug: "is469-finsight",
    description: "A RAG application on financial data for Microsoft Corporation SEC filings",
    image: "finsight.png",
    MDXComponent: finsightMDX,
    github: "https://github.com/nicholassang/IS469-Finsight-Project",
    website: "https://finsight-project-is469.vercel.app/",
    skills: ["RAG", "Python", "Ollama", "OpenAI", "StreamLit"],
    year: 2026
  },
  {
    title: "[CS203] Brainbot",
    slug: "cs203-brainbot-gen-alpha-slang-learning-platform",
    description: "A SpringBoot Gen Alpha Slang Learning Platform with educational content using Agile Methodology",
    image: "brainbot.png",
    MDXComponent: brainbotMDX,
    github: "https://github.com/nicholassang/CS203-BrainBot",
    website: "",
    skills: ["SpringBoot", "Java"],
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