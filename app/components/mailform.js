// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [send, setSend] = useState("Wyślij");
//   const [isSent, setIsSent] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [userMail, setUserMail] = useState("");
//   const [userMsg, setUserMsg] = useState("");

//   function handleName(e) {
//     setUserName(e.target.value);
//   }
//   function handleMail(e) {
//     setUserMail(e.target.value);
//   }
//   function handleMsg(e) {
//     setUserMsg(e.target.value);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         access_key: process.env.NEXT_PUBLIC_MAIL_API_KEY,

//         // name: e.target.name.value,
//         // email: e.target.email.value,
//         // message: e.target.message.value,
//         name: userName,
//         email: userMail,
//         message: userMsg,
//       }),
//     });

//     const result = await response.json();

//     if (result.success) {
//       console.log(result);
//       setUserName("");
//       setUserMail("");
//       setUserMsg("");
//       setIsSent(true);
//       setSend("Wysłano");
//       setInterval(() => {
//         setSend("Wyślij");
//         setIsSent(false);
//       }, 3000);
//     } else {
//       setSend("Błąd wysyłania");
//     }
//   }

//   return (
//     <>
//       {isSent && (
//         <p className="text-center text-3xl -translate-x-1/2  top-4 fixed left-1/2 z-50 bg-green-700 text-white px-6 py-3 rounded-md">
//           WYSŁANO
//         </p>
//       )}
//       {send === "Błąd wysyłania" && (
//         <p className="text-center text-3xl -translate-x-1/2  top-4 fixed left-1/2 z-50 bg-red-700 text-white px-6 py-3 rounded-md">
//           Błąd wysyłania!
//         </p>
//       )}
//       <form className="contactform" onSubmit={handleSubmit}>
//         {/* <form action={send} className="grid gap-4"> */}
//         <div className="grid grid-cols-2 gap-6">
//           <label htmlFor="name">
//             Imię/firma*
//             <input
//               className="w-full h-24"
//               type="text"
//               name="name"
//               placeholder="Jan Nowak / JN Company"
//               required
//               value={userName}
//               onChange={(e) => handleName(e)}
//             />
//           </label>
//           <label htmlFor="email">
//             E-mail*
//             <input
//               className="w-full h-24"
//               type="email"
//               name="email"
//               placeholder="jannowak@mail.com"
//               required
//               value={userMail}
//               onChange={(e) => handleMail(e)}
//             />
//           </label>
//         </div>
//         <div className="grid grid-cols-2 gap-6">
//           <label htmlFor="email">
//             Telefon (opcjonalnie)
//             <input
//               className="w-full h-24"
//               placeholder="np. 500 123 456"
//               value={userMail}
//               onChange={(e) => handleMail(e)}
//             />
//           </label>
//           <label>
//             Czego potrzebujesz?*<br></br>
//             <select className="w-full" required>
//               <option>Wybierz z listy</option>
//               <option>Landing Page</option>
//               <option>Strona firmowa</option>
//               <option>Rozbudowany serwis</option>
//               <option>Sklep internetowy</option>
//               <option>Przebudowa istniejącej strony</option>
//               <option>Jeszcze nie wiem</option>
//             </select>
//           </label>
//         </div>
//         <div className="grid grid-cols-2 gap-6">
//           <label>
//             Orientacyjny budżet*<br></br>
//             <select className="w-full" required>
//               <option>Wybierz z listy</option>
//               <option>do 3 000 zł</option>
//               <option>3 000-5 000 zł</option>
//               <option>5 000-8 000 zł</option>
//               <option>8 000-15 000 zł</option>
//               <option>15 000+ zł</option>
//               <option>Jeszcze nie wiem</option>
//             </select>
//           </label>
//           <label htmlFor="email">
//             Adres obecnej strony (opcjonalnie)
//             <input
//               className="w-full h-24"
//               placeholder="np. https://twojastrona.pl"
//             />
//           </label>
//         </div>
//         <label htmlFor="message">
//           Wiadomość*
//           <textarea
//             className="w-full h-24"
//             name="message"
//             placeholder="Treść wiadomości..."
//             required
//             value={userMsg}
//             onChange={(e) => handleMsg(e)}
//           ></textarea>
//         </label>

//         <button type="submit" className="btn">
//           {send}
//         </button>
//       </form>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),

      projectType: String(formData.get("projectType") || ""),
      budget: String(formData.get("budget") || ""),

      website: String(formData.get("website") || ""),
      message: String(formData.get("message") || ""),

      consent: formData.get("consent") === "on",

      // honeypot
      company: String(formData.get("company") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Nie udało się wysłać wiadomości.");
      }

      setStatusType("success");
      setStatus(
        "Dziękuję! Twoja wiadomość została wysłana. Odezwę się możliwie szybko.",
      );

      form.reset();

      setTimeout(() => {
        setStatus("");
        setStatusType("");
      }, 7000);
    } catch (error) {
      console.error(error);

      setStatusType("error");
      setStatus(
        "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na kontakt@grabcode.pl.",
      );

      setTimeout(() => {
        setStatus("");
        setStatusType("");
      }, 7000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="contactform relative flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      {/* Imię / e-mail */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <label htmlFor="name">
          Imię / firma*
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jan Nowak / JN Company"
            minLength={2}
            required
            className="w-full h-24"
          />
        </label>

        <label htmlFor="email">
          E-mail*
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jannowak@mail.com"
            required
            className="w-full h-24"
          />
        </label>
      </div>

      {/* Telefon / typ projektu */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <label htmlFor="phone">
          Telefon (opcjonalnie)
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="np. 500 123 456"
            className="w-full h-24"
          />
        </label>

        <label htmlFor="projectType">
          Czego potrzebujesz?*
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            required
            className="w-full"
          >
            <option value="" disabled>
              Wybierz z listy
            </option>

            <option value="landing-page">Landing Page</option>

            <option value="strona-firmowa">Strona firmowa</option>

            <option value="rozbudowany-serwis">Rozbudowany serwis</option>

            <option value="sklep-internetowy">Sklep internetowy</option>

            <option value="przebudowa">Przebudowa istniejącej strony</option>

            <option value="nie-wiem">Jeszcze nie wiem</option>
          </select>
        </label>
      </div>

      {/* Budżet / obecna strona */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <label htmlFor="budget">
          Orientacyjny budżet*
          <select
            id="budget"
            name="budget"
            defaultValue=""
            required
            className="w-full"
          >
            <option value="" disabled>
              Wybierz z listy
            </option>

            <option value="do-3000">Do 3 000 zł</option>

            <option value="3000-5000">3 000-5 000 zł</option>

            <option value="5000-8000">5 000-8 000 zł</option>

            <option value="8000-15000">8 000-15 000 zł</option>

            <option value="15000-plus">15 000+ zł</option>

            <option value="nie-wiem">Jeszcze nie wiem</option>
          </select>
        </label>

        <label htmlFor="website">
          Adres obecnej strony (opcjonalnie)
          <input
            id="website"
            name="website"
            placeholder="https://twojastrona.pl"
            className="w-full h-24"
          />
        </label>
      </div>

      {/* Wiadomość */}
      <label htmlFor="message">
        Wiadomość*
        <textarea
          id="message"
          name="message"
          placeholder="Napisz kilka zdań o swojej firmie, projekcie i tym, czego potrzebujesz..."
          minLength={10}
          required
          className="w-full min-h-40"
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none -z-10"
      />

      {/* Zgoda */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 accent-[#e6b000]"
        />

        <label htmlFor="consent" className="text-sm leading-relaxed">
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
          odpowiedzi na zapytanie zgodnie z{" "}
          <Link
            href="/polityka-prywatnosci"
            target="_blank"
            className="underline underline-offset-2"
          >
            Polityką prywatności
          </Link>
          .*
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Wysyłanie..." : "Wyślij zapytanie →"}
      </button>

      <p className="text-center text-sm opacity-60">
        🔒 Twoje dane wykorzystam wyłącznie do odpowiedzi na zapytanie.
      </p>

      {/* Status */}
      {status && (
        <div
          className={`
            absolute inset-0 z-20
            flex items-center justify-center
            p-6
            backdrop-blur-sm
            rounded-2xl
            ${statusType === "success" ? "bg-green-950/80" : "bg-red-950/80"}
          `}
          onClick={() => {
            setStatus("");
            setStatusType("");
          }}
        >
          <div className="max-w-lg text-center text-white">
            <h3 className="text-2xl font-semibold">
              {statusType === "success"
                ? "Wiadomość wysłana!"
                : "Coś poszło nie tak"}
            </h3>

            <p className="mt-4 leading-relaxed">{status}</p>

            <p className="mt-6 text-sm opacity-70">Kliknij, aby zamknąć.</p>
          </div>
        </div>
      )}
    </form>
  );
}
