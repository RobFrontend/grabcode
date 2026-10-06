"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CookieContext = createContext(null);

export function CookieProvider({ children }) {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const [consentSaved, setConsentSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const updateGoogleConsent = ({ analytics, marketing }) => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push([
      "consent",
      "update",
      {
        analytics_storage: analytics ? "granted" : "denied",
        ad_storage: marketing ? "granted" : "denied",
        ad_user_data: marketing ? "granted" : "denied",
        ad_personalization: marketing ? "granted" : "denied",
      },
    ]);
  };

  // Odczyt zapisanej zgody przy wejściu na stronę
  useEffect(() => {
    const saved = localStorage.getItem("cookiePreferences");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        const savedPreferences = {
          necessary: true,
          analytics: parsed.analytics ?? false,
          marketing: parsed.marketing ?? false,
        };

        setPreferences(savedPreferences);
        setConsentSaved(true);

        updateGoogleConsent(savedPreferences);
      } catch {
        localStorage.removeItem("cookiePreferences");
      }
    }

    setLoaded(true);
  }, []);

  const savePreferences = (newPreferences) => {
    const preferencesToSave = {
      necessary: true,
      analytics: newPreferences.analytics,
      marketing: newPreferences.marketing,
    };

    setPreferences(preferencesToSave);

    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(preferencesToSave),
    );

    setConsentSaved(true);
    setSettingsOpen(false);

    updateGoogleConsent(preferencesToSave);
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const openCookieSettings = () => {
    setSettingsOpen(true);
  };

  const closeCookieSettings = () => {
    setSettingsOpen(false);
  };

  return (
    <CookieContext.Provider
      value={{
        preferences,
        savePreferences,
        acceptAll,
        rejectAll,
        consentSaved,
        loaded,
        settingsOpen,
        openCookieSettings,
        closeCookieSettings,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookies() {
  const context = useContext(CookieContext);

  if (!context) {
    throw new Error("useCookies musi być używane wewnątrz CookieProvider");
  }

  return context;
}
