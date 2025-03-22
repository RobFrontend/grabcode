"use client";

import { useEffect, useState } from "react";

function Cookiesy() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 cookiesy">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <p>
          Ta strona używa plików cookies, aby zapewnić najlepsze doświadczenia
          użytkownika.
        </p>
        <button onClick={handleAccept}>Akceptuję</button>
      </div>
    </div>
  );
}

export default Cookiesy;
