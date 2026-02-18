interface ThemeToggleProps {
  dark: boolean;
  setDark: (val: boolean) => void;
}

const ThemeToggle = ({ dark, setDark }: ThemeToggleProps) => {
  const toggle = () => setDark(!dark);

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded-lg border font-medium"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        borderColor: "var(--text-color)",
      }}
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;