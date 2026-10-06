"use client";

import { useEffect, useState } from "react";
import { useCookies } from "../context/CookieContext";

function Cookiesy() {
  const {
    preferences,
    savePreferences,
    acceptAll,
    rejectAll,
    consentSaved,
    loaded,
    settingsOpen,
  } = useCookies();

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    setAnalytics(preferences.analytics);
    setMarketing(preferences.marketing);
  }, [loaded, preferences]);

  const handleSave = () => {
    savePreferences({
      necessary: true,
      analytics,
      marketing,
    });
  };

  if (!loaded) return null;

  if (consentSaved && !settingsOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-9999">
      <div className="container py-6 cookiesy rounded-t-2xl box-shadow">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-semibold mb-4">Ustawienia plików cookies</h2>

            <p>
              Używam plików cookies niezbędnych do działania strony oraz, za
              Twoją zgodą, plików analitycznych i marketingowych.
            </p>
            <p>Możesz wybrać, na które kategorie wyrażasz zgodę.</p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Niezbędne */}
            <label className="flex justify-between gap-4">
              <div>
                <p className="font-semibold">Niezbędne</p>
                <p className="opacity-70">
                  Wymagane do prawidłowego działania strony.
                </p>
              </div>

              <input
                type="checkbox"
                checked
                disabled
                aria-label="Niezbędne pliki cookies"
              />
            </label>

            {/* Analityczne */}
            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Analityczne</p>
                <p className="opacity-70">
                  Pomagają zrozumieć, w jaki sposób użytkownicy korzystają ze
                  strony, np. za pomocą Google Analytics.
                </p>
              </div>

              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Analityczne pliki cookies"
                className="cursor-pointer"
              />
            </label>

            {/* Marketingowe */}
            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Marketingowe</p>
                <p className="opacity-70">
                  Mogą być wykorzystywane do pomiaru skuteczności reklam i
                  personalizacji treści marketingowych.
                </p>
              </div>

              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                aria-label="Marketingowe pliki cookies"
                className="cursor-pointer"
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              type="button"
              onClick={rejectAll}
              className="px-5 py-3 border btnCookies3 font-semibold"
            >
              Tylko niezbędne
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-3 border  btnCookies2 font-semibold"
            >
              Akceptuję wybrane
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="px-5 py-3  btnCookies font-semibold"
            >
              Akceptuję wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookiesy;
