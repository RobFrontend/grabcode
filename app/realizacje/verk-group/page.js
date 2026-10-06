import Image from "next/image";
import KV from "@/public/kvgradnew.png";
import RevealingSections from "@/app/components/revealingSections";
import { FaReact, FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import KV2 from "@/public/verk-demo.png";
import { GoGoal, GoPencil } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";
import { IoBookOutline, IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { PiDevicesBold } from "react-icons/pi";
import { RiContactsBook3Line, RiSeoLine } from "react-icons/ri";
import {
  SiGoogleanalytics,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import KV3 from "@/public/verk1.png";
import { AiOutlineGlobal } from "react-icons/ai";
import KV4 from "@/public/demo-verk-desktop.png";
import KV5 from "@/public/demo-verk-tab.png";
import KV6 from "@/public/demo-verk-mobile.png";
import RealizationArtCta from "@/app/components/realizationArtCta";

export const metadata = {
  title: "Realizacja komercyjna Verk Group",
  alternates: {
    canonical: "/realizacje/verk-group",
  },
};

function page() {
  return (
    <>
      <div className="min-h-[50vh] overflow-hidden relative kv grid grid-cols-2 gap-10 items-center px-[128px] max-2xl:px-[80px] max-xl:px-[48px] py-32 max-xl:grid-cols-[55fr_45fr] max-lg:grid-cols-1">
        <Image
          src={KV}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="kv"
          className="-z-10  blur-[2px] grayscale-[0.75]"
        />
        <div className="py-12">
          <div className="flex gap-2">
            <Link
              href="/realizacje"
              className="hero-p opacity-90 hover:opacity-100 transition-all duration-200 text-[var(--accent-color)] drop-shadow-sm"
            >
              Więcej realizacji
            </Link>
            <p className="hero-p">/</p>
            <p className="hero-p tracking-tight">Projekt Komercyjny</p>
          </div>
          <h1 className="heroh1 mb-8">Verk Group</h1>
          <h2 className="heroh2">
            Wielojęzyczna strona dla firmy <br className="max-sm:hidden" />
            działającej międzynarodowo <br className="sm:hidden"></br>w
            e-commerce
          </h2>

          <RevealingSections delay={700}>
            <div className="flex gap-10 mt-12 max-sm:grid max-sm:grid-cols-2 max-md:z-20 mobileCenter max-sm:pb-8">
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">Strona firmowa</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">PL/EN</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">Next.js</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">2026</p>
              </div>
            </div>
          </RevealingSections>
          <div className="flex gap-8 pt-16 max-sm:py-8 max-[550px]:flex-col max-[550px]:text-center mobileCenter">
            <Link
              href="https://verkpage.vercel.app/"
              className="btn btn-box btn-hero"
              target="_blank"
            >
              Zobacz stronę
            </Link>
            <Link
              href="/kontakt#formularz-kontaktowy"
              className="btn1 btn-box btn-hero"
            >
              Umów konsultację
            </Link>
          </div>
        </div>
        <div className="max-lg:row-start-1 max-lg:max-w-[600px] max-lg:justify-self-center">
          <Image
            src={KV2}
            alt="kv"
            className="mt-16 max-lg:row-start-1 w-full drop-shadow-xl"
          />
        </div>
      </div>
      <section>
        <RevealingSections>
          <div className="container grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">
            <div className="flex gap-6 sm:border-r sm:border-[var(--border-color)] sm:pr-10">
              <GoGoal className="min-h-16 min-w-16 text-[var(--accent-color)]" />
              <div>
                <h3 className="font-semibold">Cel projektu</h3>
                <p>
                  Stworzenie profesonalnej strony internetowej, która
                  zaprezentuje firmę Verk, jej marki i umożliwi łatwy kontakt
                  oraz będzie działać w kilku wersjach jezykowych.
                </p>
              </div>
            </div>

            <div className="flex gap-6 sm:pl-10">
              <IoSettingsOutline className="min-h-16 min-w-16 text-[var(--accent-color)]" />
              <div>
                <h3 className="font-semibold">Jak do tego podszedłem</h3>
                <p>
                  Zaprojektowałem przejrzystą strukturę serwisu, która łączy
                  nowoczesny wygląd ze stylem sklepu Verk oraz z
                  funkcjonalnością. Wdrożyłem wieljęzyczność (PL/EN) oraz
                  zadbałem o wydajność i intuicyjny formularz kontaktowy.
                </p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2 className="mb-12">Zakres realizacji</h2>
            <div className="flex gap-8 justify-between max-md:grid max-md:grid-cols-4 max-sm:grid-cols-3">
              <div>
                <GrUserExpert className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">UX i struktura serwisu</p>
              </div>
              <div>
                <GoPencil className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Indywidualny design</p>
              </div>
              <div>
                <IoLanguage className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Wersje językowe</p>
              </div>
              <div>
                <PiDevicesBold className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Responsywność (RWD)</p>
              </div>
              <div>
                <RiSeoLine className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">SEO i szybkość</p>
              </div>
              <div>
                <RiContactsBook3Line className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Formularz kontaktowy</p>
              </div>
              <div>
                <SiGoogleanalytics className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Google Analytics</p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
            <div className="self-center">
              <h2>
                Projekt dopasowany <br></br>do charakteru marki
              </h2>
              <p className="p-large">
                Design nawiązuje do profesjonalnego i doświadczonego charakteru
                sklepu firmy z naciskiem na czytelną prezentację marek, oferty
                oraz kluczowych informacji. Kolorystyka nawiązuje do jednego z
                głównych partnerów międzynarodowych firmy. Osiągnięcia oraz
                statystyki Verk okazały się świetnym sposobem na pokazanie
                doświadczenia i niezawodności firmy.
              </p>
            </div>
            <div>
              <Image
                src={KV3}
                alt="kv"
                className="w-full h-auto rounded-2xl box-shadow"
              />
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Najważniejsze rozwiązania</h2>
            <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 gridCol1">
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <AiOutlineGlobal className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Globalna dostępność</p>
                <p>
                  Wersja polska i angielska ze spójną strukturą i sobnymi
                  adresami URL oraz możliwością dodania kolejnych wersji
                  językowych.
                </p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <IoBookOutline className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">
                  Przejrzysta prezentacja marek
                </p>
                <p>
                  Czytelne sekcje dla każdej marki z odnośnikami do oferty
                  detalicznej i hurtowej.
                </p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <RiContactsBook3Line className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Formularz kontakowy</p>
                <p>
                  Zapytania trafiają bezposrednio na odpowiednią do tematu
                  skrzynkę mailową. Użytkownik otrzymuje potwierdzenie wysłania
                  wiadomości.
                </p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <SiGoogleanalytics className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Analityka</p>
                <p>
                  Integracje z Google Analytics i Google Search Console
                  pozwalają na monitorowanie ruchu i zachowań użytkowników.
                </p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Ten sam projekt. Każde urządzenie.</h2>
            <p>
              Strona została zaprojektowania z myślą o responsywności i wygodzie
              użytkowania na każdym urządzeniu.
            </p>
            <div className="grid grid-cols-[60fr_25fr_15fr] gap-10 items-end mt-8 max-sm:gap-2">
              <div>
                <Image src={KV4} alt="Wersja desktopowa strony firmowej" />
              </div>
              <div>
                <Image src={KV5} alt="Wersja tabletowa strony firmowej" />
              </div>
              <div>
                <Image src={KV6} alt="Wersja mobilna strony firmowej" />
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            <div className="p-8 rounded-2xl bg-[var(--border-color)]">
              <h2>Technologie</h2>
              <div className="flex gap-6 mb-6 flex-wrap">
                <div className="flex gap-2 items-center">
                  <SiNextdotjs className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>Next.js</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaReact className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>React</p>
                </div>
                <div className="flex gap-2 items-center">
                  <SiTypescript className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>TypeScript</p>
                </div>
                <div className="flex gap-2 items-center">
                  <SiTailwindcss className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex gap-2 items-center">
                  <SiGoogleanalytics className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>GA4</p>
                </div>
              </div>
              <p>
                Technologie zostały dobrane do funkcji projektu, wydajności i
                łatwiej dalszej rozbudowy serwisu.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--border-color)]">
              <h2>Efekt końcowy</h2>
              <p>
                Powstał szybki, responsywny, zachowujący charakter sklepu firmy
                serwis, który porządkuje ofertę Verk, wspiera jej wizerunek i
                zapewnia użytkownikom jasną drogę do kontaktu. Wielojęzyczność
                umożliwia skuteczną komunikację z klientami zagranicznymi.
              </p>
            </div>
          </div>
        </RevealingSections>
      </section>

      <RealizationArtCta
        heading="Potrzebujesz podobnego rozwiązania dla swojej firmy?"
        text="Porozmawiajmy o Twoim projekcie i sprawdź, jak mogę Ci pomóc."
      />
    </>
  );
}

export default page;
