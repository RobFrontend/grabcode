import Image from "next/image";
import KV from "@/public/kv.webp";
import Header from "../components/header";

import Footer from "../components/footer";
import RevealingSections from "../components/revealingSections";
import Biglogotheme from "../components/biglogotheme";
import Link from "next/link";
import InvestmentIMG from "@/public/inwestycja2.webp";
import ArrowUp from "../components/arrowUp";
import { HiCheck } from "react-icons/hi2";
import { TbBrandSpeedtest } from "react-icons/tb";
import Bolt from "../components/bolt";

export const metadata = {
  title: "Dlaczego ja",
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
      <div className="pt-32 pb-24 px-8">
        <div className="h-max text-center">
          <h1 className="heroh1 mb-8 opacity-50">Dlaczego ja</h1>
          <h2 className="heroh2">
            Nowoczesny design, szybkie działanie, więcej klientów
          </h2>
        </div>
        <RevealingSections goinUp={true}>
          <div className="container whyme-section">
            <h2>Dlaczego warto mieć stronę internetową?</h2>
            <div className="whyme-section1-boxes">
              <div className="whyme-section1-box">
                <h3>Budowanie zaufania i profesjonalnego wizerunku</h3>
                <p>
                  Ponad 80% klientów sprawdza firmę online, zanim zdecyduje się
                  na kontakt. Jeśli Twoja firma nie ma strony internetowej,
                  potencjalni klienci mogą uznać ją za mniej profesjonalną i
                  wybrać konkurencję.
                </p>
              </div>
              <div className="whyme-section1-box">
                <h3>Całodobowa dostępność</h3>
                <p>
                  Twoja strona pracuje dla Ciebie 24/7 - klienci mogą znaleźć
                  informacje o Twoich usługach, przeczytać opinie i skontaktować
                  się, nawet gdy Ty odpoczywasz.
                </p>
              </div>
              <div className="whyme-section1-box">
                <h3>Większa widoczność w Google</h3>
                <p>
                  Dzięki optymalizacji SEO Twoja firma może pojawiać się w
                  wynikach wyszukiwania, co zwiększy liczbę klientów bez
                  konieczności płacenia za reklamy.
                </p>
              </div>
              <div className="whyme-section1-box">
                <h3>Nowoczesne narzędzia i integracje</h3>
                <p>
                  Twoja strona może zawierać formularze kontaktowe, system
                  rezerwacji, integrację z social media i inne funkcje, które
                  ułatwiają kontakt i sprzedaż.
                </p>
              </div>
            </div>
          </div>
        </RevealingSections>

        <RevealingSections goinUp={true}>
          <div className="container whyme-section">
            <h2>Inwestycja, która się zwróci</h2>
            <p>
              Wielu przedsiębiorców traktuje stronę internetową jako zbędny
              wydatek, ale w rzeczywistości jest to najskuteczniejsza inwestycja
              w rozwój biznesu.
            </p>
            <div className="whyme-section2-box">
              <div className="whyme-section2-text-box">
                <div>
                  <h3>Zwiększysz liczbę klientów</h3>
                  <p>strona działa 24/7, a Twoja oferta jest zawsze dostępna</p>
                </div>
                <div>
                  <h3>Zaoszczędzisz czas</h3>
                  <p>
                    zamiast odpowiadać na te same pytania, klienci znajdą
                    wszystkie informacje na stronie
                  </p>
                </div>
                <div>
                  <h3>Wyróżnisz się na tle konkurencji</h3>
                  <p>Twoja strona zrobi świetne pierwsze wrażenie</p>
                </div>
                <div>
                  <h3>Możesz sprzedawać online</h3>
                  <p>
                    dodam opcję połaczenia strony z API, social-mediami lub
                    formularz kontaktowy
                  </p>
                </div>
                <Link className="btn2 w-fit " href="/#kontakt">
                  Darmowa wycena
                </Link>
              </div>
              <div className="portfolio-box">
                <Image src={InvestmentIMG} alt="inwestycja" />
              </div>
            </div>
            <div className="whyme-section2-textme-box">
              <h3>Co zyskujesz, zamawiając stronę u mnie?</h3>
              <div className="flex gap-1 ">
                <HiCheck className="text-2xl " />
                <p>
                  Nowoczesny design <span>- dopasowany do Twojej marki</span>
                </p>
              </div>
              <div className="flex gap-1 ">
                <HiCheck className="text-2xl " />
                <p>
                  Szybkie działanie{" "}
                  <span>- zoptymalizowane pod SEO i użytkowników</span>
                </p>
              </div>
              <div className="flex gap-1 ">
                <HiCheck className="text-2xl " />
                <p>
                  Wsparcie po wdrożeniu{" "}
                  <span>- nie zostawiam Cię bez pomocy!</span>
                </p>
              </div>
              <div className="flex gap-1 ">
                <HiCheck className="text-2xl " />
                <p>
                  Dostosowanie do urządzeń mobilnych{" "}
                  <span>- 70% ruchu pochodzi ze smartfonów</span>
                </p>
              </div>
              <ArrowUp />
            </div>
            <h4>
              Nie masz pomysłu, jak powinna wyglądać Twoja strona? Doradzę,
              zaprojektuję i wdrożę najlepsze rozwiązanie dla Twojego biznesu.
            </h4>
          </div>
        </RevealingSections>

        <RevealingSections goinUp={true}>
          <div className="container whyme-section">
            <h2>Nowoczesność i wydajność</h2>

            <p>
              W moich projektach korzystam z nowoczesnych technologii, które
              gwarantują szybkość działania, bezpieczeństwo i świetny wygląd na
              każdej platformie.
            </p>
            <div className="whyme-section3">
              <div>
                <h3>Next.js i React</h3>
                <p>-ultraszybkie strony z doskonałą wydajnością</p>
              </div>
              <div>
                <h3>Tailwind CSS</h3>
                <p>-lekki i nowoczesny styl dopasowany do Twojej marki</p>
              </div>
              <div>
                <h3>Supabase / MongoDB</h3>
                <p>-bezpieczne i wydajne przechowywanie danych</p>
              </div>
              <div>
                <h3>TypeScript</h3>
                <p>
                  -stabilny i bezbłędny kod, co przekłada się na niezawodność
                  strony
                </p>
              </div>
              <Bolt />
            </div>
            <h4>
              Dzięki tym technologiom Twoja strona będzie szybka, nowoczesna i
              dostosowana do Twoich potrzeb.
            </h4>
          </div>
        </RevealingSections>
      </div>
      <div className="grid justify-center py-2 big-logo w-full">
        <Biglogotheme />
      </div>

      <Footer />
    </>
  );
}

export default Page;
