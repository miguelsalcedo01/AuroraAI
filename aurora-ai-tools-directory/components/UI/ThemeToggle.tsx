import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button
      className="bg-slate-500 hover:bg-slate-600 text-white transition-colors p-4 rounded-md"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
