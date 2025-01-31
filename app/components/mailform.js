"use client";

import { useState } from "react";

export default function ContactForm() {
  const [send, setSend] = useState("Wyślij");
  const [isSent, setIsSent] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userMsg, setUserMsg] = useState("");

  function handleName(e) {
    setUserName(e.target.value);
  }
  function handleMail(e) {
    setUserMail(e.target.value);
  }
  function handleMsg(e) {
    setUserMsg(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_MAIL_API_KEY,

        // name: e.target.name.value,
        // email: e.target.email.value,
        // message: e.target.message.value,
        name: userName,
        email: userMail,
        message: userMsg,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setUserName("");
      setUserMail("");
      setUserMsg("");
      setIsSent(true);
      setSend("Wysłano");
      setInterval(() => {
        setSend("Wyślij");
        setIsSent(false);
      }, 3000);
    } else {
      setSend("Błąd wysyłania");
    }
  }

  return (
    <>
      {isSent && (
        <p className="text-center text-3xl -translate-x-1/2  top-4 fixed left-1/2 z-50 bg-green-700 text-white px-6 py-3 rounded-md">
          WYSŁANO
        </p>
      )}
      {send === "Błąd wysyłania" && (
        <p className="text-center text-3xl -translate-x-1/2  top-4 fixed left-1/2 z-50 bg-red-700 text-white px-6 py-3 rounded-md">
          Błąd wysyłania!
        </p>
      )}
      <form className="contactform" onSubmit={handleSubmit}>
        {/* <form action={send} className="grid gap-4"> */}
        <label htmlFor="name">
          Imię/Nazwa:
          <input
            className="w-full h-24"
            type="text"
            name="name"
            placeholder="Jan Nowak / JN Company"
            required
            value={userName}
            onChange={(e) => handleName(e)}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            className="w-full h-24"
            type="email"
            name="email"
            placeholder="jannowak@mail.com"
            required
            value={userMail}
            onChange={(e) => handleMail(e)}
          />
        </label>
        <label htmlFor="message">
          Wiadomość:
          <textarea
            className="w-full h-24"
            name="message"
            placeholder="Treść wiadomości..."
            required
            value={userMsg}
            onChange={(e) => handleMsg(e)}
          ></textarea>
        </label>
        {/* <label>
        Dodaj plik:
        <input type="file" name="file" onChange={(e) => handleFile(e)} />
        </label> */}
        <button type="submit" className="btn">
          {send}
        </button>
      </form>
    </>
  );
}
