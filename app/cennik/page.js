import Image from "next/image";
import KV from "@/public/kvnewopacity.png";

import Footer from "../components/footer";
import RevealingSections from "../components/revealingSections";
import Biglogotheme from "../components/biglogotheme";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuLayers3, LuLink, LuNotebook, LuNotebookTabs } from "react-icons/lu";
import { FiMonitor } from "react-icons/fi";
import { FaNotesMedical, FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { CgNotes, CgWebsite } from "react-icons/cg";
import ShopDemo from "@/public/shop-demo.png";
import { GrNotes } from "react-icons/gr";
import { SlNote } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { IoAnalyticsOutline, IoDiamondOutline } from "react-icons/io5";
import { TbDevices } from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri";
import { HiOutlineSupport } from "react-icons/hi";
import { TfiSupport } from "react-icons/tfi";
import FaqPrices from "../components/faqPrices";

export const metadata = {
  title: "Cennik",
  alternates: {
    canonical: "/cennik",
  },
};

function Page() {
  return (
    <>
      <div className="min-h-[50vh] overflow-hidden relative kv grid items-center px-[128px] max-2xl:px-[80px] max-xl:px-[48px] py-32">
        <Image
          src={KV}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="kv"
          className="-z-10  blur-[2px]"
        />
        <div className="pt-16">
          <p className="hero-p tracking-tight">Cennik</p>
          <h1 className="heroh1">
            Ile kosztuje <span className="drop-shadow-sm heroh1">dobra </span>
            <br></br>strona internetowa?
          </h1>
          <p className="p-large heroPLarge">
            Każdy projekt wyceniam indywidualnie, ale nie chcę zostawiać Cię bez
            punktu odniesienia. <br></br>Poniżej znajdziesz ceny startowe
            najczęściej realizowanych typów stron <br></br>oraz dodatków, które
            możemy dobrać do Twojego projektu.
          </p>
          <div className="flex gap-8 py-16 max-[550px]:flex-col max-[550px]:text-center">
            <Link href="/kontakt" className="btn btn-box btn-hero">
              Poproś o indywidualną wycenę
            </Link>
            <Link href="/realizacje" className="btn1 btn-box btn-hero">
              Zobacz realizacje
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2>Główna oferta</h2>
            <h3>Wybierz rozwiązanie dopasowane do Twoich potrzeb.</h3>
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md h-full max-sm:grid-cols-1 mt-10">
              <div
                className="services-box2 p-10 flex flex-col justify-between"
                id="landing-page"
              >
                <div>
                  <div className="flex gap-6 mb-8">
                    <FiMonitor className="h-24 min-w-24" />
                    <div>
                      <p className="p-large font-semibold">Landing Page</p>
                      <p>
                        Skuteczna strona dla jednej oferty, usługi lub kampanii.
                      </p>
                    </div>
                  </div>
                  <p className="services-price mb-4">od 2 900 zł</p>
                  <ul className="my-6 flex flex-col gap-2">
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Indywidualny design</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Responsywność (RWD)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Formularz kontaktowy</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Podstawowe SEO techniczne</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Analityka (GA4)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Wdrożenie na serwerze</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mt-8">Najlepszy wybór dla:</p>
                  <ul className="mt-4 mb-8 flex flex-col gap-2">
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>jednej usługi lub produktu</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>kampanii marketingowej</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>eksperta / freelancera</p>
                    </li>
                  </ul>
                  <Link
                    href="/kontakt#formularz-kontaktowy"
                    className="btn inline-flex items-center"
                  >
                    Chcę Landing Page
                  </Link>
                </div>
              </div>

              <div
                className="services-box3 p-10 flex flex-col justify-between relative"
                id="strona-firmowa"
              >
                <p className="absolute top-0 left-[50%] -translate-1/2 textWhite bg-[var(--accent-color)] px-4 py-1 rounded-xl font-semibold">
                  Najczęściej wybierana
                </p>
                <div>
                  <div className="flex gap-6 mb-6">
                    <LuLayers3 className="h-24 min-w-24" />
                    <div>
                      <p className="p-large font-semibold">Strona firmowa</p>
                      <p>
                        Skuteczna strona reprezentująca firmę, ofertę,
                        realizacje i prowadząca klienta do kontaktu.
                      </p>
                    </div>
                  </div>
                  <p className="services-price mb-4">od 4 900 zł</p>
                  <ul className="my-6 flex flex-col gap-2">
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Strona główna + kilka podstron</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Indywidualny design</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Responsywność (RWD)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Formularz kontaktowy</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Podstawowe SEO techniczne</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Analityka (GA4)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Cookie banner (RODO)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Wdrożenie na serwerze</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mt-8">Najlepszy wybór dla:</p>
                  <ul className="mt-4 mb-8 flex flex-col gap-2">
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>małych i średnich firm</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>firm usługowych</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>firm z kilkoma obszarami oferty</p>
                    </li>
                  </ul>
                  <Link
                    href="/kontakt#formularz-kontaktowy"
                    className="btn inline-flex items-center"
                  >
                    Chcę stronę firmową
                  </Link>
                </div>
              </div>

              <div
                className="services-box2 p-10 flex flex-col justify-between"
                id="rozbudowany-serwis"
              >
                <div>
                  <div className="flex gap-6 mb-6">
                    <CgWebsite className="h-24 min-w-24" />
                    <div>
                      <p className="p-large font-semibold">
                        Rozbudowany serwis
                      </p>
                      <p>
                        Dla firm potrzebujących większej liczby podstron,
                        dodatkowych funkcji lub samodzielnego zarządzania
                        treścią.
                      </p>
                    </div>
                  </div>
                  <p className="services-price mb-4">od 7 900 zł</p>
                  <ul className="my-6 flex flex-col gap-2">
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Wiele podstron i bardziej rozbudowana struktura</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Indywidualny design</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Responsywność (RWD)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>CMS (np. Sanity)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Blog / aktualności</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Zaawansowane formularze</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Integracje z API (np. opinie, rezerwacje)</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Wyszukiwarka, filtrowanie, mapy, inne funkcje</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaRegCircleCheck className="min-h-7 min-w-7 self-start mt-[1px] text-[var(--accent-color)]" />
                      <p>Wdrożenie i konfiguracja</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mt-8">Najlepszy wybór dla:</p>
                  <ul className="mt-4 mb-8 flex flex-col gap-2">
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>firm z rozbudowaną ofertą</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>projektów z dodatkowymi funkcjami</p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <FaCheck className="h-5 w-5 text-[var(--accent-color)]" />
                      <p>firm planujących rozwój strony</p>
                    </li>
                  </ul>
                  <Link
                    href="/kontakt#formularz-kontaktowy"
                    className="btn inline-flex items-center"
                  >
                    Porozmawiajmy o zakresie
                  </Link>
                </div>
              </div>
            </div>
          </RevealingSections>
        </div>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div
            className="container grid grid-cols-[35fr_65fr] max-lg:grid-cols-1 max-lg:gap-12"
            id="sklep-internetowy"
          >
            <div className="lg:pr-6 lg:border-r lg:border-[var(--border-color)]">
              <h2>Sklepy internetowe</h2>
              <h3>
                Nieduży sklep, <br></br>bez niepotrzebnej komplikacji.
              </h3>
              <p className="pt-4 pb-8">
                Dla firm potrzebujących prostego i wygodnego sklepu z
                produktami, płatnościami <br className="lg:hidden"></br>i
                dostawą wykorzystuję sprawdzone rozwiązanie WordPress +
                WooCommerce.
              </p>
              <Link
                href="/kontakt#formularz-kontaktowy"
                className="btn inline-flex items-center"
              >
                Porozmawiajmy o Twoim sklepie
              </Link>
            </div>
            <div className="lg:pl-6 h-full grid grid-cols-[55fr_45fr] gap-2 items-center max-md:grid-cols-[60fr_40fr] max-sm:grid-cols-1">
              <div className="flex flex-col justify-between h-full w-fit">
                <p className="services-price mb-4">od 5 900 zł</p>
                <ul className="my-6 grid grid-cols-2 gap-2">
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Woocommerce</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Indywidualny design</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Konfiguracja produktów</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Responsywność (RWD)</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Koszyk i płatności</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Podstawowe SEO</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Dostawa i metody wysyłki</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaRegCircleCheck className="min-h-5 min-w-5 self-center text-[var(--accent-color)]" />
                    <p>Wdrożenie i konfiguracja</p>
                  </li>
                </ul>
                <p className="text-base">
                  *Oferta przeznaczona głównie dla małych i średnich sklepów.
                </p>
              </div>
              <div className="max-sm:row-start-1">
                <Image
                  alt="Projekt sklepu internetowego WooCommerce prezentowany na komputerze i telefonie"
                  src={ShopDemo}
                />
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Dodatkowe możliwości</h2>
            <h3>Rozbuduj stronę o to, czego naprawdę potrzebujesz.</h3>
            <div className="grid grid-cols-4 gap-6 mt-10 max-xl:grid-cols-3 max-md:grid-cols-2 gridCol1">
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <GrNotes className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">Dodatkowa podstrona</p>
                  <p className="font-semibold">od 350-600zł</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <SlNote className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">
                    Blog / sekcja poradnikowa
                  </p>
                  <p className="font-semibold">od 800zł</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <FaNotesMedical className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">CMS (Sanity / Supabase)</p>
                  <p className="font-semibold">od 1000-1800zł</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <CgNotes className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">Zaawansowany formularz</p>
                  <p className="font-semibold">od 500zł</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <IoMdSearch className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">
                    Filtrowanie / wyszukiwarka
                  </p>
                  <p className="font-semibold">od 400zł</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <LuLink className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">
                    Integracja z zewnętrznym API
                  </p>
                  <p className="font-semibold">od 500zł</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <AiOutlineGlobal className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">Dodatkowy język strony</p>
                  <p className="font-semibold">od 800zł</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl shadow-md">
                <MdOutlineUnfoldMore className="min-h-12 min-w-12 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-4">
                    Więcej integracji / dodatków
                  </p>
                  <p className="font-semibold">indywidualna wycena</p>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Co zawiera każdy projekt</h2>
            <h3>
              Niezależnie od wielkości projektu otrzymujesz więcej niż sam kod.
            </h3>
            <div className="grid grid-cols-6 gap-6 mt-10 max-lg:grid-cols-3 max-sm:grid-cols-2">
              <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md">
                <IoDiamondOutline className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">Indywidualny design</p>
                  <p>
                    Bez gotowych szablonów, dopasowany do Twojej branży i marki.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md">
                <TbDevices className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">Responsywność</p>
                  <p>
                    Strona działą poprawnie na komputerach, tabletach i
                    telefonach.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md">
                <RiSeoLine className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">Podstawowe SEO</p>
                  <p>
                    Techniczna optymalizacja, metadata, sitemap, robots.txt.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md">
                <IoAnalyticsOutline className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">Analityka</p>
                  <p>Konfiguracja GA4 i pomiar najważniejszych danych.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md">
                <HiOutlineSupport className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">Pomoc przy wdrożeniu</p>
                  <p>Wsparcie z domeną, hostingiem i konfiguracją serwera.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md">
                <TfiSupport className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">Wsparcie po publikacji</p>
                  <p>Pomoc techniczna i możliwość dalszego rozwoju strony.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Dlaczego ceny mogą się różnić?</h2>
            <h3>To zależy od Twoich potrzeb.</h3>
            <p className="max-w-[65rem]">
              Cena strony zależy przede wszystkim od liczby podstron, poziomu
              indywidualnego designu, ilości treści oraz dodatkowych funkcji
              (system CMS, baza danych, etc.) i integracji.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-10 max-sm:grid-cols-2 gridCol1">
              <div className="p-6 border-2 border-[var(--accent-color)] rounded-xl box-shadow">
                <p className="font-semibold">Prosty projekt</p>
                <p>prosta struktura, podstawowe funkcje</p>
              </div>
              <div className="p-6 border-2 border-[var(--accent-color)] rounded-xl box-shadow">
                <p className="font-semibold">Standardowy projekt</p>
                <p>kilka podstron, dodatkowe funkcje</p>
              </div>
              <div className="p-6 border-2 border-[var(--accent-color)] rounded-xl box-shadow">
                <p className="font-semibold">Rozbudowany projekt</p>
                <p>wiele podstron, integracje, CMS, API</p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Jak wygląda płatność?</h2>
            <h3>Jasne zasady od początku.</h3>
            <div className="mt-10 grid grid-cols-2 gap-8 max-sm:grid-cols-1">
              <div className="p-12 bg-[var(--border-color)] rounded-xl">
                <div className="flex gap-6">
                  <LuNotebook className="min-h-20 min-w-20 text-[var(--accent-color)]" />
                  <div>
                    <p className="p-large font-semibold mb-1">
                      Mniejsze projekty
                    </p>
                    <p>(Landing Page, prosta strona firmowa)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div>
                    <p className="p-superLarge">50%</p>
                    <p>przed rozpoczęciem</p>
                  </div>
                  <div>
                    <p className="p-superLarge">50%</p>
                    <p>przed publikacją</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-[var(--border-color)] rounded-xl">
                <div className="flex gap-6">
                  <LuNotebookTabs className="min-h-20 min-w-20 text-[var(--accent-color)]" />
                  <div>
                    <p className="p-large font-semibold mb-1">
                      Większe projekty
                    </p>
                    <p>(Rozbudowane serwisy, integracje)</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div>
                    <p className="p-superLarge">30%</p>
                    <p>na start</p>
                  </div>
                  <div>
                    <p className="p-superLarge">40%</p>
                    <p>po akceptacji kluczowego etapu</p>
                  </div>
                  <div>
                    <p className="p-superLarge">30%</p>
                    <p>przed publikacją</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Opieka po wdrożeniu</h2>
            <h3>Potrzebujesz mnie również później?</h3>
            <p>
              Każdy projekt obejmuje okres wsparcia po publikacji. <br></br>
              Jeśli chcesz, mogę później zajmować się aktualizacjami, zmianami i
              dalszym rozwojem strony.
            </p>
            <div className="flex gap-8 mt-10 flexCol">
              <div className="p-12 bg-[var(--border-color)] rounded-xl">
                <div className="flex gap-6">
                  <TfiSupport className="min-h-20 min-w-20 text-[var(--accent-color)]" />
                  <div>
                    <p className="p-large font-semibold mb-1">
                      Opieka nad stroną
                    </p>
                    <p>od 250 zł/ miesiąc</p>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2 self-center flexColStart">
                <li className="flex gap-4 items-center">
                  <FaRegCircleCheck className="h-6 w-6 text-[var(--accent-color)]" />
                  <p>Aktualizacje i drobne zmiany</p>
                </li>
                <li className="flex gap-4 items-center">
                  <FaRegCircleCheck className="h-6 w-6 text-[var(--accent-color)]" />
                  <p>Wsparcie techniczne</p>
                </li>
                <li className="flex gap-4 items-center">
                  <FaRegCircleCheck className="h-6 w-6 text-[var(--accent-color)]" />
                  <p>Kopie zapasowe</p>
                </li>
                <li className="flex gap-4 items-center">
                  <FaRegCircleCheck className="h-6 w-6 text-[var(--accent-color)]" />
                  <p>Rozwój o nowe funkcje</p>
                </li>
              </ul>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container">
            <h2>Najczęściej zadawane pytania</h2>
            <h3>Masz pytania o wycenę?</h3>
            <FaqPrices />
          </div>
        </RevealingSections>
      </section>
    </>
  );
}

export default Page;
