import { useState, useEffect } from "react";
import { HiChevronUp } from "react-icons/hi";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 5); // px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-10 p-3 rounded-full shadow-xl transition-opacity duration-300 hover:scale-110 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      aria-label="Scroll to top"
    >
      <HiChevronUp size={24} />
    </button>
  );
};

export default ScrollUpButton;