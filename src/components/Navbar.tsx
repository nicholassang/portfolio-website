import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import ScrollLink from "./ScrollLink";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Detect system preference on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");

      if (!saved) {
        setDark(e.matches);
      }
    };

    // Initial check
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
    else if (saved === "light") setDark(false);
    else setDark(mediaQuery.matches);

    // Listen for system changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Apply theme
  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add("dark");
    else html.classList.remove("dark");

    // Update CSS variables
    html.style.setProperty("--bg-color", dark ? "#1f2937" : "#ffffff");
    html.style.setProperty("--text-color", dark ? "#f3f4f6" : "#111111");

    // Persist
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold tracking-wider">
          {"{{/* Nicholas Ang /*}}"}
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <li key={link.label}>
                <ScrollLink to={link.href} label={link.label} />
              </li>
            ) : (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive ? "text-cyan-600" : "hover:text-cyan-600"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
          <li>
            <ThemeToggle dark={dark} setDark={setDark} />
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Mobile Drawer */}
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setMenuOpen(false)}
          />

          {/* Side Drawer */}
          <div
            className={`fixed top-0 left-0 h-screen w-72 shadow-lg z-50 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            }}
          >
            <div className="flex flex-col gap-6 p-8 text-lg font-medium">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <ScrollLink
                    key={link.label}
                    to={link.href}
                    label={link.label}
                    onClick={() => setMenuOpen(false)}
                  />
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className="hover:text-cyan-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}

              <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
                <ThemeToggle dark={dark} setDark={setDark} />
              </div>
            </div>
          </div>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
