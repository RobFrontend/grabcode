"use client";
import Image from "next/image";
import IconWhite from "@/public/logowhitebig.png";
import IconNavy from "@/public/logonavybig.png";

import { useTheme } from "../context/ThemeContext";
function Biglogotheme() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? IconNavy : IconWhite}
      alt="Logo GrabCode Studio tworzenie stron internetowych Robert Grabowski Konin Poznan Warszawa Legionowo"
    />
  );
}

export default Biglogotheme;
