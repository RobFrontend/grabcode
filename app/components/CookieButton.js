"use client";

import { useCookies } from "@/app/context/CookieContext";

import { PiCookieBold } from "react-icons/pi";

export default function CookieSettingsButton() {
  const { openCookieSettings } = useCookies();

  return (
    <button onClick={openCookieSettings} aria-label="Cookie settings">
      Pliki cookies
    </button>
    // <button
    //   onClick={openCookieSettings}
    //   className="fixed bottom-6 right-6 z-50 rounded-full drop-shadow-lg hover:scale-105 transition cursor-pointer text-[var(--accent-color)]"
    //   aria-label="Cookie settings"
    // >
    //   <PiCookieBold size={30} /> Pliki cookies
    // </button>
  );
}
