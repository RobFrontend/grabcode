"use client";
import Image from "next/image";
import IconWhite from "@/public/trustBalanceBook.png";
import IconNavy from "@/public/trustBalanceBookWhite.png";
import { useTheme } from "../context/ThemeContext";
function LogoBBtheme() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? IconNavy : IconWhite}
      alt="Logo BalanceBook"
      className="max-h-[10rem] w-auto"
    />
  );
}

export default LogoBBtheme;
