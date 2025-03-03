import Image from "next/image";
import KV from "@/public/kv.webp";
import Header from "../components/header";
import Star from "../components/star";
import Footer from "../components/footer";
import RevealingSections from "../components/revealingSections";
import Biglogotheme from "../components/biglogotheme";
import Link from "next/link";

export const metadata = {
  title: "Cennik",
};

function Page() {
  return (
    <>
      <div className="min-h-[35vh] overflow-hidden relative kv">
        <Header />

        <Image
          src={KV}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="kv"
          className="-z-10"
        />
      </div>
      <div className="pt-14 pb-4 px-8">
        <div className="h-max text-center">
          <h1 className="heroh1 mb-2">Oferta cenowa</h1>
          <h2 className="heroh2">
            Dostosuj najlepszy pakiet usług na potrzeby Twojej strony
            internetowej
          </h2>
        </div>
      </div>
      <div className="pb-12 pt-32">
        <div className="container px-8 max-md:px-6">
          <RevealingSections goinUp={true}>
            <div className="pb-16">
              <div className="cennik-info-box ">
                <h3 className="mb-3">Każdy pakiet zawiera w cenie:</h3>
                <div className="grid gap-3">
                  <h4>
                    -Responsywność (dopasowanie Twojej strony do wszystkich
                    urządzeń - od smartfona do dużych monitorów)
                  </h4>
                  <h4>
                    -Podstawowe animacje potrzebne do estetyki designu Twojej
                    strony
                  </h4>
                  <h4>-Pomysł na design Twojej strony internetowej</h4>
                  <h4>-Pomoc w wyborze dostawcy domeny/serwera</h4>
                </div>
              </div>
              <div className="cennik-info-box grid gap-8">
                <h4>
                  Poniższe ceny są bardziej przykładem. Każdy projekt wymaga
                  własnej wyceny dlatego zapraszam do kontaktu w celu darmowej
                  wyceny Twojej strony internetowej
                </h4>
                <Link className="btn2 w-fit justify-self-end" href="/#kontakt">
                  Darmowa wycena
                </Link>
              </div>
            </div>
          </RevealingSections>
          <RevealingSections goinUp={true}>
            <div className="cennik-boxes">
              <div className="cennik-box cennik-box-bg">
                <h4>
                  Landing Page<br></br>
                  <span>(1 strona)</span>
                </h4>
                <p>
                  Prosta strona z podstawowymi informacjami, CTA i np.
                  formularzem kontaktowym.
                </p>
                <ul className="ul-lg">
                  <li>HTML + CSS + JavaScript - od 900zł</li>
                  <div className="flex gap-2">
                    <li>React + Tailwind - od 1300zł</li>
                    <Star />
                  </div>
                  <li>Next.js + Tailwind - od 1600zł</li>
                </ul>
                <ul className="ul-sm">
                  <li>Dodatkowo:</li>
                  <li>Optymalizacja SEO - od 100zł</li>
                  <li>Specjalne dodatkowe animacje - od 200zł</li>
                  <li>
                    CMS samodzielnej edycji treści (przy Next.js) - od 600zł
                  </li>
                  <li>Szkolenie z obsługi CMS - za darmo</li>
                  <li>
                    Grafiki (Photoshop oraz wyszukiwanie darmowych grafik) - od
                    150zł <br></br> tworzenie grafik AI + 50-200zł
                  </li>
                  <li>
                    Opieka nad stroną - od 150zł/miesiąc
                    <br></br>pierwsze 3 miesiące za darmo
                  </li>
                  <li>Pomoc w wyborze dostawcy domeny/serwera - za darmo</li>
                </ul>
                <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p>
              </div>
              <div className="cennik-box cennik-box-best cennik-box-bg">
                <div className="best-mark"></div>
                <h4>
                  Strona dla mniejszych firm<br></br>
                  <span>(do 5 podstron)</span>
                </h4>
                <p>
                  Strona wizytówka z informacjami o firmie, ofertą, galerią,
                  kontaktem itd.
                </p>
                <ul className="grid ul-lg">
                  <li>HTML + CSS + JavaScript - od 1800zł</li>
                  <div className="flex gap-2">
                    <li>React + Tailwind - od 2300zł</li>
                    <Star />
                  </div>
                  <li>Next.js + Tailwind - od 2800zł</li>
                </ul>
                <ul className="grid ul-sm">
                  <li>Dodatkowo:</li>
                  <li>Optymalizacja SEO - od 300zł</li>
                  <li>Specjalne dodatkowe animacje - od 300zł</li>
                  <li>Blog bez CMS - od 500zł</li>
                  <li>Blog z CMS (przy Next.js) - od 1000zł</li>
                  <li>
                    CMS samodzielnej edycji treści (przy Next.js) - od 600zł
                  </li>
                  <li>Szkolenie z obsługi CMS - za darmo</li>
                  <li>
                    Grafiki (Photoshop oraz wyszukiwanie darmowych grafik) - od
                    150zł <br></br> tworzenie grafik AI + 50-350zł
                  </li>
                  <li>
                    Opieka nad stroną - od 150zł/miesiąc
                    <br></br>pierwsze 3 miesiące za darmo
                  </li>
                  <li>Pomoc w wyborze dostawcy domeny/serwera - za darmo</li>
                </ul>
                <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p>
              </div>
              <div className="cennik-box cennik-box-bg">
                <h4>
                  Strona dla firm<br></br>
                  <span>(do 10 podstron)</span>
                </h4>
                <p>Profesjonalna strona z bardziej rozbudowaną strukturą</p>
                <ul className="grid ul-lg">
                  <li>HTML + CSS + JavaScript - od 3300zł</li>
                  <div className="flex gap-2">
                    <li>React + Tailwind - od 3900zł</li>
                    <Star />
                  </div>
                  <li>Next.js + Tailwind - od 4500zł</li>
                </ul>
                <ul className="grid ul-sm">
                  <li>Dodatkowo:</li>
                  <li>Optymalizacja SEO - od 400zł</li>
                  <li>Specjalne dodatkowe animacje - od 500zł</li>
                  <li>Blog bez CMS - od 500zł</li>
                  <li>Blog z CMS (przy Next.js) - od 1000zł</li>
                  <li>
                    CMS samodzielnej edycji treści (przy Next.js) - od 600zł
                  </li>
                  <li>Szkolenie z obsługi CMS - za darmo</li>
                  <li>
                    Grafiki (Photoshop oraz wyszukiwanie darmowych grafik) - od
                    150zł <br></br> tworzenie grafik AI + 50-550zł
                  </li>
                  <li>
                    Opieka nad stroną - od 150zł/miesiąc
                    <br></br>pierwsze 3 miesiące za darmo
                  </li>
                  <li>Pomoc w wyborze dostawcy domeny/serwera - za darmo</li>
                </ul>
                <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p>
              </div>
              <div className="cennik-box h-min cennik-box-bg">
                <h4>Niestandardowe pakiety</h4>
                <p>
                  Możemy dobrać inne niestandardowe pakiety do każdej oferty,
                  oto kilka z nich:
                </p>
                <ul className="ul-lg">
                  <li>Edycja/prowadzenie istniejącej strony</li>
                  <li>Większa ilość podstron</li>
                  <li>
                    Filtrowanie, sortowanie, checkboxy <br></br>(np. sortowanie
                    postów bloga)
                  </li>
                  <li>Formularz kontaktowy</li>
                  <li>Integracja z API/bazą danych</li>
                  <li>
                    Interaktywne komponenty <br></br>
                    (Wykresy, porównania, mini gry, karuzele)
                  </li>
                  <li>
                    Kreacja treści dostosowana do tematyki strony (po mojej
                    stronie)
                  </li>
                  <li>Wybór kolorystyki (po mojej stronie)</li>
                  <li>Autoryzacja</li>
                  <li>Posiadanie właśnych użytkowników</li>
                  <li>Płatności (wkrótce)</li>
                  <li>Sklep z płatnościami (wkrótce)</li>
                </ul>

                <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p>
              </div>
            </div>
          </RevealingSections>
        </div>
        <div className="grid  justify-center pt-20">
          <Link href="/uslugi" className="btn">
            Przejrzyj przykładowe usługi
          </Link>
        </div>
        <div className="grid justify-center py-2">
          <Biglogotheme />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
