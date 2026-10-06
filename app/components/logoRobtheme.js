"use client";
import Image from "next/image";
import IconWhite from "@/public/trustRobsonDark.png";
import IconNavy from "@/public/trustRobsonWhite.png";
import { useTheme } from "../context/ThemeContext";
function LogoRobtheme() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? IconNavy : IconWhite}
      alt="Logo Robson Fotobudka 360"
      className="max-h-[10rem] w-auto"
    />
  );
}

export default LogoRobtheme;
