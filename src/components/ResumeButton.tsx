import { useLocation } from "react-router-dom";

const ResumeButton = () => {
  const location = useLocation();

  // Only show on Projects pages
  const shouldRender = ["/projects"].includes(location.pathname);
  if (!shouldRender) return null;

  return (
    <a
        href="/Nicholas%20Ang%20-%20Resume1.pdf"       
        download
        className={`text-xs fixed bottom-20 left-6 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-transform duration-300 hover:scale-105 z-50`}
        style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
        }}
    >
        Download Resume
    </a>
  );
};

export default ResumeButton;