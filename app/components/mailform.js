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
    <form action={send}>
      <label>
        Imię/Nazwa:
        <input
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
          type="email"
          name="email"
          required
          onChange={(e) => handleMail(e)}
        />
      </label>
      <label>
        Wiadomość:
        <textarea
          name="message"
          required
          onChange={(e) => handleText(e)}
        ></textarea>
      </label>
      {/* <label>
        Dodaj plik:
        <input type="file" name="file" onChange={(e) => handleFile(e)} />
      </label> */}
      <button type="submit">Wyślij</button>
    </form>
  );
}
