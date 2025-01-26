"use client";

import { POST } from "../api/send/route";
import { useState } from "react";

export default function ContactForm() {
  // const [text, setText] = useState("");
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // // const [filename, setFilename] = useState("");
  // function handleText(e) {
  //   setText(e.target.value);
  // }
  // function handleMail(e) {
  //   setEmail(e.target.value);
  // }
  // function handleName(e) {
  //   setUserName(e.target.value);
  // }
  // function handleFile(e) {
  //   setFilename(e.target.value);
  // }
  // function send() {
  //   POST(email, userName, text);
  //   console.log(email, userName, text);
  // }

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

        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      console.log("wysłano");
    } else {
      console.log("nie działa");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {/* <form action={send} className="grid gap-4"> */}
      <label htmlFor="name">
        Imię/Nazwa:
        <input
          className="w-full h-24"
          type="text"
          name="name"
          required
          // value={userName}
          // onChange={(e) => handleName(e)}
        />
      </label>
      <label htmlFor="email">
        E-mail:
        <input
          className="w-full h-24"
          type="email"
          name="email"
          // required
          // onChange={(e) => handleMail(e)}
        />
      </label>
      <label htmlFor="message">
        Wiadomość:
        <textarea
          className="w-full h-24"
          name="message"
          required
          // onChange={(e) => handleText(e)}
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
