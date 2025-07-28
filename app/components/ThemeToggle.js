"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import sun from "@/public/sun_icon.svg";
import moon from "@/public/moon_icon.svg";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="thememode">
      {theme === "light" ? (
        <Image src={moon} alt="moon" className="themeicon" />
      ) : (
        <Image src={sun} alt="sun" className="themeicon themeicon-sun" />
      )}
    </button>
  );
}

function Night() {
  return <Image src={sun} alt="sun" />;
}
