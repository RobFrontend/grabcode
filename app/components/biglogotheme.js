"use client";
import Image from "next/image";
import IconWhite from "@/public/logo2New.png";
import IconNavy from "@/public/logo2NewWhite.png";

import { useTheme } from "../context/ThemeContext";
function Biglogotheme() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? IconNavy : IconWhite}
      alt="Logo GrabCode Studio tworzenie stron internetowych Robert Grabowski Konin Poznan Warszawa Legionowo"
      className="w-auto max-h-[80rem]"
    />
  );
}

export default Biglogotheme;
