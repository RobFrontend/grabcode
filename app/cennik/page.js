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
      <div className="min-h-[50vh] overflow-hidden relative kv">
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
      <div className="pt-32 px-8">
        <div className="h-max text-center">
          <h1 className="heroh1 mb-8 opacity-50">Oferta cenowa</h1>
          <h2 className="heroh2">
            Dostosuj najlepszy pakiet usług na potrzeby Twojej strony
            internetowej
          </h2>
        </div>
      </div>
      <div className="pb-16 pt-24">
        <div className="container px-8 max-md:px-6">
          <RevealingSections goinUp={true}>
            <div className="cennik-boxes">
              <div className="cennik-box cennik-box-bg">
                <h2>
                  Landing Page<br></br>
                  <span className="text-lg">(1 strona)</span>
                </h2>
                <h3>Idealny na start, kampanie reklamowe i proste oferty</h3>
                <h4>
                  Strona zaprojektowana pod jeden cel - sprzedaż lub
                  pozyskiwanie klientów.
                </h4>
                <p className="cennik-box-p">Co otrzymujesz:</p>
                <ul className="ul-lg">
                  {/* <li>HTML + CSS + JavaScript - od 900zł</li> */}
                  <li>*nowoczesny design dopasowany do Twojej branży</li>
                  <li>*szybkie ładowanie (SEO-friendly)</li>
                  <li>*pełna responsywność (telefon / tablet / desktop)</li>
                  <li>*formularz kontaktowy</li>
                  <li>*podstawowe animacje i interakcje</li>
                  <li>*pomoc przy wdrożeniu (domena / hosting)</li>
                  {/* <div className="flex gap-2">
                    <li>React + Tailwind - od 1300zł</li>
                    <Star />
                  </div>
                  <li>Next.js + Tailwind - od 1600zł</li> */}
                </ul>
                {/* <ul className="ul-sm">
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
                <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p> */}
                <p className="cennik-price">Od 1500zł</p>
              </div>
              <div className="cennik-box cennik-box-best cennik-box-bg">
                <div className="best-mark"></div>
                <h2>
                  Strona dla mniejszych firm<br></br>
                  <span>(do 5 podstron)</span>
                </h2>
                <h3>
                  Dla firm, które chcą wyglądać profesjonalnie i budować
                  zaufanie
                </h3>
                <h4>
                  Strona wizytówka z najważniejszymi informacjami o Twojej
                  firmie.
                </h4>
                <p className="cennik-box-p">Co otrzymujesz:</p>
                <ul className="grid ul-lg">
                  {/* <li>HTML + CSS + JavaScript - od 1800zł</li> */}
                  <li>*do 5 podstron (np. oferta, o nas, kontakt)</li>
                  <li>*spójny, nowoczesny design</li>
                  <li>*optymalizacja pod SEO</li>
                  <li>*formularz kontaktowy</li>
                  <li>*możliwość rozbudowy w przyszłości</li>
                  <li>*podstawowe animacje i UX</li>
                  {/* <div className="flex gap-2">
                    <li>React + Tailwind - od 2300zł</li>
                    <Star />
                  </div>
                  <li>Next.js + Tailwind - od 2800zł</li> */}
                </ul>
                {/* <ul className="grid ul-sm">
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
                </ul> */}
                {/* <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p> */}
                <p className="cennik-price">Od 2800zł</p>
              </div>
              <div className="cennik-box cennik-box-bg">
                <h2>
                  Strona dla firm<br></br>
                  {/* <span>(do 10 podstron)</span> */}
                  <span>(Więcej niż 5 podstron)</span>
                </h2>
                <h3>
                  Dla firm, które chcą skalować biznes i automatyzować procesy
                </h3>
                <h4>
                  Strona, która wspiera rozwój Twojego biznesu i automatyzuje
                  część procesów (np. kontakt, pozyskiwanie leadów).
                </h4>
                <p className="cennik-box-p">Co otrzymujesz:</p>
                <ul className="grid ul-lg">
                  {/* <li>HTML + CSS + JavaScript - od 3300zł</li> */}
                  <li>*rozbudowaną strukturę strony</li>
                  <li>*indywidualny design pod markę</li>
                  <li>*optymalizację wydajności i SEO</li>
                  <li>
                    *przygotowanie pod marketing (Google Ads, SEO, social media)
                  </li>
                  <li>*możliwość integracji z systemami (API, CRM itd.)</li>
                  <li>*zaawansowane animacje i UX</li>
                  {/* <div className="flex gap-2">
                    <li>React + Tailwind - od 3900zł</li>
                    <Star />
                  </div>
                  <li>Next.js + Tailwind - od 4500zł</li> */}
                </ul>
                {/* <ul className="grid ul-sm">
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
                <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p> */}
                <p className="cennik-price">Od 4500zł</p>
              </div>
              <div className="cennik-box h-min cennik-box-bg">
                <h2>
                  Rozszerzenia<br></br>
                  <span>(dopasuj stronę do swoich potrzeb)</span>
                </h2>
                <p className="cennik-box-p">
                  Możemy dobrać inne niestandardowe pakiety do każdej oferty,
                  oto kilka z nich:
                </p>
                <ul className="ul-lg">
                  {/* <li>Samodzielna edycja/prowadzenie istniejącej strony</li> */}
                  <li>
                    *CMS (panel do edycji treści)<br></br>
                    <span>
                      Samodzielnie dodawaj i edytuj treści (np. blog, oferta)
                    </span>
                  </li>
                  {/* <li>Większa ilość podstron</li> */}
                  <li>
                    *Wielojęzyczność<br></br>
                    <span>Strona dostępna w wielu językach</span>
                  </li>
                  <li>
                    *Copywriting<br></br>
                    <span>Tworzenie treści dopasowanych do Twojej branży</span>
                  </li>
                  <li>
                    *Grafiki / wideo (AI + obróbka)<br></br>
                    <span>Unikalne materiały wizualne pod Twoją markę</span>
                  </li>
                  {/* <li>
                    Interaktywne komponenty <br></br>
                    (Wykresy, porównania, mini gry, karuzele)
                  </li> */}
                  <li>
                    *Integracje (API / systemy zewnętrzne)<br></br>
                    <span>Połączenie z narzędziami, bazami danych</span>
                  </li>
                  {/* <li>Autoryzacja</li>
                  <li>Posiadanie właśnych użytkowników</li> */}
                  {/* <li>Płatności (wkrótce)</li>
                  <li>Sklep z płatnościami (wkrótce)</li> */}
                </ul>

                {/* <p>Przy wyborze 2+ dodatkowych pakietów dostosuję zniżkę</p> */}
              </div>
            </div>
          </RevealingSections>
          <RevealingSections goinUp={true}>
            <div className="pt-16">
              <div className="cennik-info-box ">
                <h2 className="mb-3">Opieka i wsparcie</h2>
                <h3 className="pt-6">Nie zostajesz sam po wdrożeniu.</h3>
                <div className="grid gap-4 pt-6">
                  <h4>*opieka techniczna</h4>
                  <h4>*poprawki i aktualizacje</h4>
                  <h4>*wsparcie w rozwoju strony</h4>
                </div>
                <h3 className="pt-6">Pierwsze 3 miesiące gratis</h3>
              </div>
              <div className="cennik-info-box ">
                <h2 className="mb-3">Dla kogo jest ta oferta?</h2>
                <div className="grid gap-4 pt-6">
                  <h4>*dla firm, które chcą zdobywać klientów z internetu</h4>
                  <h4>
                    *dla lokalnych biznesów, które chcą wyglądać profesjonalnie
                  </h4>
                  <h4>
                    *dla osób, które potrzebują strony, którą łatwo rozbudować
                  </h4>
                </div>
              </div>
              <div className="cennik-info-box ">
                <h2 className="mb-3">Dlaczego warto ze mną pracować?</h2>
                <div className="grid gap-4 pt-6">
                  <h4>
                    *tworzę strony, które realnie pomagają zdobywać klientów
                  </h4>
                  <h4>*łączę design + technologię + marketing</h4>
                  <h4>*doradzam, nie tylko „koduję”</h4>
                  <h4>*myślę o Twoim biznesie, nie tylko o wyglądzie strony</h4>
                </div>
              </div>
              <div className="cennik-info-box grid gap-8">
                <h2>Napisz do mnie i wyceń swój projekt</h2>
                <Link className="btn2 w-fit justify-self-end" href="/#kontakt">
                  Darmowa wycena
                </Link>
              </div>
            </div>
          </RevealingSections>
        </div>
        <div className="grid  justify-center pt-20">
          <Link href="/uslugi" className="btn">
            Sprawdź usługi
          </Link>
        </div>
      </div>
      <div className="grid justify-center py-2 big-logo w-full">
        <Biglogotheme />
      </div>
      <Footer />
    </>
  );
}

export default Page;
