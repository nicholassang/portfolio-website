const Footer = () => {
  return (
    <footer
      className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-4"
      style={{
        color: "var(--text-color)",
        backgroundColor: "var(--bg-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nicholas Ang. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/nicholassang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-ang-zhe-hao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;