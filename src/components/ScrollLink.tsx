import { useNavigate, useLocation } from "react-router-dom";

interface ScrollLinkProps {
  to: string; 
  label: string;
  onClick?: () => void;
}

const ScrollLink = ({ to, label, onClick }: ScrollLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
    }

    onClick?.();
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="py-2 px-3 hover:text-cyan-600"
    >
      {label}
    </a>
  );
};

export default ScrollLink;