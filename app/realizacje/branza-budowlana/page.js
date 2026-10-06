import Image from "next/image";
import KV from "@/public/kvgradnew.png";
import RevealingSections from "@/app/components/revealingSections";
import { FaReact, FaRegCircleCheck, FaRegLightbulb } from "react-icons/fa6";
import Link from "next/link";
import KV2 from "@/public/nordom-demo-trans.png";
import { GoCodeReview, GoGoal, GoPencil, GoPeople } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { RiContactsBook3Line, RiGalleryLine, RiSeoLine } from "react-icons/ri";
import { PiDevicesBold } from "react-icons/pi";
import KV3 from "@/public/nordom1.png";
import KV4 from "@/public/demo-nordom-desktop.png";
import KV5 from "@/public/demo-nordom-tab.png";
import KV6 from "@/public/demo-nordom-mobile.png";
import {
  SiGoogleanalytics,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import RealizationArtCta from "@/app/components/realizationArtCta";

export const metadata = {
  title: "Realizacja strony firmowej dla branży budowlanej",
  alternates: {
    canonical: "/realizacje/branza-budowlana",
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
          alt="Tło hero strony internetowej GrabCode Studio Robert Grabowski projektowanie stron internetowych"
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
            <p className="hero-p tracking-tight">Projekt koncepcyjny</p>
          </div>
          <h1 className="heroh1 mb-8">Nordom</h1>
          <h2 className="heroh2">
            Nowoczesna strona dla firmy budującej domy.
          </h2>

          <RevealingSections delay={700}>
            <div className="flex gap-10 mt-12 max-sm:grid max-sm:grid-cols-2 max-md:z-20 mobileCenter max-sm:pb-8">
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Branża budowlana</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Strona firmowa</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Next.js</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">2026</p>
              </div>
            </div>
          </RevealingSections>
          <div className="flex gap-8 pt-16 max-sm:py-8 max-[550px]:flex-col max-[550px]:text-center mobileCenter">
            <Link
              href="https://demo-nordom-grabcode.vercel.app/"
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
            alt="Strona internetowa dla firmy budowlanej, projekt koncepcyjny GrabCode Studio Robert Grabowski"
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
                  Stworzenie nowoczesnej, wiarygodnej strony internetowej, która
                  porządkuje ofertę firmy, wzmancia zaufanie i prowadzi
                  użytkownika do kontaktu lub zapytania o wycenę.
                </p>
              </div>
            </div>

            <div className="flex gap-6 sm:pl-10">
              <FaRegLightbulb className="min-h-16 min-w-16 text-[var(--accent-color)]" />
              <div>
                <h3 className="font-semibold">Jak do tego podszedłem</h3>
                <p>
                  Zaprojektowałem przejrzystą strukturę informacji, mocny
                  podział na ofertę, ralizacje i proces współpracy oraz
                  nowoczesny design inspirowany branżą premium.
                </p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2 className="mb-12">Zakres projektu</h2>
            <div className="flex gap-8 justify-between max-md:grid max-md:grid-cols-4 max-sm:grid-cols-3">
              <div>
                <MdOutlineDesignServices className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">UX i struktura</p>
              </div>
              <div>
                <GrNotes className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Prezentacja oferty</p>
              </div>
              <div>
                <RiGalleryLine className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Sekcja realizacji</p>
              </div>
              <div>
                <RiContactsBook3Line className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Formularz wyceny</p>
              </div>
              <div>
                <PiDevicesBold className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Responsywność (RWD)</p>
              </div>
              <div>
                <RiSeoLine className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">SEO</p>
              </div>
              <div>
                <GoPencil className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Blog informacyjny</p>
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
                Serwis, który buduje zaufanie <br></br>jeszcze przed kontaktem
              </h2>
              <p className="p-large">
                Wyraźnia prezentacja usług, realizacji i procesu współpracy
                sprawia, że użytkownik szybciej rozumie ofertę i łatwiej
                podejmuje decyzję o kontakcie.
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
                <GrNotes className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Czytelna oferta</p>
                <p>Podział usług na jasne i zrozumiałe etapy współpracy.</p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <RiGalleryLine className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Realizacje</p>
                <p>Sekcje z przykładami projektów wzmacniają wiarygodność.</p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <RiContactsBook3Line className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Formularz wyceny</p>
                <p>Kontakt nastawiony na konkretne zapytania od klientów.</p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <GoPeople className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Proces współpracy</p>
                <p>Użytkownik widzi, jak wygląda współpraca krok po kroku.</p>
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
              Strona została zaprojektowania w pełni responsywnie z dbałością o
              detale na każdym urządzeniu.
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
                  <SiTailwindcss className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>Tailwind CSS</p>
                </div>
              </div>
              <p>
                Nowoczesne technologie zapewniają szybkie działanie, wysoką
                jakość i łatwą możliwość dalszego rozwoju strony.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--border-color)]">
              <h2>Efekt końcowy</h2>
              <p>
                Projekt prezentuje, jak nowoczesna strona internetowa może
                wspierać firmę budowlaną w budowaniu profesjonalnego wizerunku i
                pozyskiwaniu wartościowych zapytań, a poradnik w formie bloga
                pomaga pozycjonować stronę w Google.
              </p>
            </div>
          </div>
        </RevealingSections>
      </section>
      <RealizationArtCta
        heading="Zajmujesz się firmą budowlaną?"
        text="Porozmawiajmy o stronie, która pokaże jakość Twojej oferty."
      />
    </>
  );
}

export default page;
