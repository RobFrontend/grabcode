import Link from "next/link";
import ContactForm from "./mailform";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Kontakt() {
  return (
    <section id="formularz-kontaktowy">
      <div className="container grid grid-cols-[65fr_35fr] gap-20 max-lg:grid-cols-1">
        <div>
          <h2>Formularz kontaktowy</h2>
          <div className="contact-box">
            <h3 className="mb-2">Napisz mi o swoim projekcie.</h3>
            <p className="mb-8">
              Wypełnij krótki formularz. Im więcej szczegółów podaszm tym lepiej
              będę mógł przygotować odpowiedź i propozycję rozwiązania.
            </p>

            <ContactForm />
          </div>
        </div>
        <div>
          <div>
            <h2>Dane kontaktowe</h2>
            <p className="mb-8">
              Masz pytania lub wolisz skontakować się bezpośrednio? Napisz lub
              zadzwoń.
            </p>
            <div className="contact-info">
              <div className="contact-info-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" />
                </svg>
                <div className="pl-3">
                  <p className="p-large">+48 609 843 405</p>
                  <p>Pon. -Sob.</p>
                </div>
              </div>
              <div className="contact-info-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <div>
                  <p className="p-large">kontakt@grabcode.pl</p>
                  <p>Zwykle odpowiadam w 1 dzień roboczy</p>
                </div>
              </div>
              <div className="contact-info-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
                <div className="pl-2">
                  <p className="p-large">Robert Grabowski</p>
                  <p>GrabCode Studio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2>Social media</h2>
            <p className="-mt-6">
              Śledź realizacje i kulisy pracy nad projektami.
            </p>
            <div className="flex gap-8 mt-8">
              <Link
                href="https://www.facebook.com/profile.php?id=61573678295885"
                target="_blank"
              >
                <FaFacebook className="h-16 w-16 text-[var(--accent-color)]  transition-all duration-200 hover:opacity-80" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/grabcode-studio-robert-grabowski/"
                target="_blank"
              >
                <FaLinkedin className="h-16 w-16 text-[var(--accent-color)]  transition-all duration-200 hover:opacity-80" />
              </Link>
              <Link
                href="https://www.instagram.com/grabcodestudio/"
                target="_blank"
              >
                <FaInstagram className="h-16 w-16 text-[var(--accent-color)]  transition-all duration-200 hover:opacity-80" />
              </Link>
            </div>
          </div>
          <div className="mt-16">
            <h2>Jak to wygląda dalej?</h2>
            <p className="-mt-6">
              Prosty proces od pierwszej wiadomości do rozpoczęcia współpracy.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="p-10 rounded-full relative h-fit w-auto self-start bg-[var(--accent-color)]">
                  <p className="absolute p-large font-bold left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 ">
                    1
                  </p>
                </div>
                <div>
                  <p className="p-large font-semibold">Rozmowa</p>
                  <p>
                    Odpowiadam na Twoje zapytanie, doprecyzowujemy cele i
                    potrzeby.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-10 rounded-full relative h-fit w-auto self-start bg-[var(--accent-color)]">
                  <p className="absolute p-large font-bold left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 ">
                    2
                  </p>
                </div>
                <div>
                  <p className="p-large font-semibold">Zakres i wycena</p>
                  <p>Przygotowuję propozycję rozwiązania i wstępną wycenę.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-10 rounded-full relative h-fit w-auto self-start bg-[var(--accent-color)]">
                  <p className="absolute p-large font-bold left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 ">
                    3
                  </p>
                </div>
                <div>
                  <p className="p-large font-semibold">Start projektu</p>
                  <p>
                    Po akceptacji ustalamy szczegóły i rozpoczynamy prace nad
                    Twoją strona.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kontakt;
