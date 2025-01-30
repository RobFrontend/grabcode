"use client";
import Image from "next/image";
import IconWhite from "@/public/logowhiteround.png";
import IconNavy from "@/public/logonavyround.png";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
function Logotheme() {
  // const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   if (savedTheme === "dark") {
  //     setIsDark(true);
  //     console.log(isDark);
  //   }
  //   if (savedTheme !== "dark") {
  //     setIsDark(false);
  //   }
  // }, [isDark]);
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? IconNavy : IconWhite}
      alt="Logo GrabCode Studio tworzenie stron internetowych Robert Grabowski Konin Poznan Warszawa Legionowo"
      className="nav-logo"
    />
  );
}

export default Logotheme;
