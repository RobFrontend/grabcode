"use client";

// import { sendEmail } from "@/lib/resend";
import { POST } from "../api/send/route";
import { useState } from "react";

export default function ContactForm() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  // const [filename, setFilename] = useState("");
  function handleText(e) {
    setText(e.target.value);
  }
  function handleMail(e) {
    setEmail(e.target.value);
  }
  function handleName(e) {
    setUserName(e.target.value);
  }
  // function handleFile(e) {
  //   setFilename(e.target.value);
  // }
  function send() {
    // sendEmail(text);
    POST(email, userName, text);

    // POST();
    console.log(email, userName, text);
  }
  return (
    <form action={send} className="grid gap-4">
      <label>
        Imię/Nazwa:
        <input
          className="w-full h-24"
          type="text"
          name="name"
          required
          value={userName}
          onChange={(e) => handleName(e)}
        />
      </label>
      <label>
        E-mail:
        <input
          className="w-full h-24"
          type="email"
          name="email"
          required
          onChange={(e) => handleMail(e)}
        />
      </label>
      <label>
        Wiadomość:
        <textarea
          className="w-full h-24"
          name="message"
          required
          onChange={(e) => handleText(e)}
        ></textarea>
      </label>
      {/* <label>
        Dodaj plik:
        <input type="file" name="file" onChange={(e) => handleFile(e)} />
      </label> */}
      <button type="submit" className="btn">
        Wyślij
      </button>
    </form>
  );
}
