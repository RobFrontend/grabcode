import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RevealingSections from "./revealingSections";
import Link from "next/link";

function Services() {
  return (
    <section id="uslugi">
      <div className="container">
        <h2>Usługi</h2>
        <div className="grid_3-cols p-8 max-sm:p-4">
          <div className="services-box logoheading">
            <RevealingSections goinUp={true}>
              <div className="service ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                </svg>
                <h3>
                  Projektowanie i tworzenie <br></br>stron internetowych
                </h3>
                <p>
                  Projektuję nowoczesne, responsywne i intuicyjne strony
                  internetowe, które dostosowują się do wszystkich urządzeń -od
                  telefonów po komputery.
                </p>
                <ul>
                  <li>-Atrakcyjny i przyciągający wzrok design</li>
                  <li>-Maksymalna responsywność na urządzeniach mobilnych</li>
                  <li>-Personalizacja zgodna z oczekiwaniami klienta</li>
                </ul>
              </div>
            </RevealingSections>
          </div>
          <div className="services-box logoheading">
            <RevealingSections goinUp={true}>
              <div className="service">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
                <h3>Landing Pages</h3>

                <p>
                  Tworzę wysokowydajne strony typu landing page, które
                  maksymalizują konwersję Twojej kampanii marketingowej.
                </p>
                <ul>
                  <li>-Optymalizacja pod kątem szybkiego ładowania</li>
                  <li>
                    -Minimalistyczny design z silnym wezwaniem do działania
                    (CTA)
                  </li>
                  <li>
                    -Dostosowanie do kampanii reklamowych (Google Ads, Facebook
                    Ads)
                  </li>
                </ul>
              </div>
            </RevealingSections>
          </div>
          <div className="services-box logoheading">
            <RevealingSections goinUp={true}>
              <div className="service">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                </svg>
                <h3>Strony z blogiem</h3>

                <p>
                  Tworzę strony blogowe z intuicyjnymi systemami zarządzania
                  treścią (CMS), które pozwalają Ci publikować i edytować wpisy
                  z łatwością.
                </p>
                <ul>
                  <li>-Własny, dostosowany do potrzeb klienta CMS</li>
                  <li>
                    -Optymalizacja pod kątem SEO dla lepszej widoczności w
                    wyszukiwarkach
                  </li>
                  <li>-Szybkie ładowanie stron i responsywny design</li>
                </ul>
              </div>
            </RevealingSections>
          </div>
          <div className="services-box logoheading">
            <RevealingSections goinUp={true}>
              <div className="service">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                </svg>
                <h3>
                  Optymalizacja SEO <br></br>i wydajności stron
                </h3>

                <p>
                  Zoptymalizuję Twoją stronę pod kątem wyszukiwarek i
                  wydajności, aby osiągała najwyższe pozycje w Google.
                </p>
                <ul>
                  <li>-Poprawa szybkości ładowania strony</li>
                  <li>-Optymalizacja słów kluczowych i meta tagów</li>
                  <li>-Lepsza widoczność w wynikach wyszukiwania</li>
                </ul>
              </div>
            </RevealingSections>
          </div>
          <div className="services-box logoheading">
            <RevealingSections goinUp={true}>
              <div className="service">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
                <h3>
                  Wsparcie techniczne <br></br>i modernizacja stron
                </h3>

                <p>
                  Pomagam utrzymać i rozwijać istniejące strony, wprowadzając
                  ulepszenia i rozwiązując problemy techniczne.
                </p>
                <ul>
                  <li>-Szybkie i skuteczne rozwiązywanie błędów</li>
                  <li>-Aktualizacje zgodne z nowymi standardami technologii</li>
                  <li>-Stałe wsparcie techniczne i doradztwo</li>
                </ul>
              </div>
            </RevealingSections>
          </div>
          <div className="services-box logoheading">
            <RevealingSections goinUp={true}>
              <div className="service">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z" />
                </svg>
                <h3>
                  Integracje z API <br></br>i systemy customowe
                </h3>

                <p>
                  Tworzę dedykowane rozwiązania z wykorzystaniem API i
                  customowych funkcji dostosowanych do Twoich potrzeb
                  biznesowych.
                </p>
                <ul>
                  <li>
                    -Wdrażanie integracji z zewnętrznymi platformami (np.
                    Spotify, Google Maps)
                  </li>
                  <li>-Dedykowane funkcje i systemy zarządzania</li>
                  <li>-Nowoczesne technologie i pełna skalowalność</li>
                </ul>
              </div>
            </RevealingSections>
          </div>
        </div>
        <div className="grid  justify-center pt-14">
          <Link href="/uslugi" className="btn">
            Przejrzyj przykładowe usługi
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
