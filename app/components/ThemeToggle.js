"use client";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="thememode">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
