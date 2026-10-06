import Image from "next/image";
import KV from "@/public/kvnewopacity.png";
import RobIMG from "@/public/rob.png";
import RevealingSections from "../components/revealingSections";
import Biglogotheme from "../components/biglogotheme";
import Link from "next/link";
import Samsung from "@/public/logo-samsung.webp";
import { PiProjectorScreenChart } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import {
  IoChatboxEllipsesOutline,
  IoDiamondOutline,
  IoHelpBuoyOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoRocketOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuNotebookPen, LuPencil } from "react-icons/lu";
import SamsungExp from "@/public/samsungexp2.png";
import { RiCheckboxMultipleBlankLine, RiSupabaseLine } from "react-icons/ri";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Verk from "@/public/verk-demo.png";
import JeszczeStrona from "@/public/strona-demo.png";
import Robson from "@/public/robson-demo.png";
import Balance from "@/public/balance-demo.png";
import RevTom from "@/public/reviews-tomek.jpg";
import RevRob from "@/public/reviews-robert.jpg";
import RevMon from "@/public/reviews-monika.jpg";
import {
  SiNextdotjs,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { BsJavascript } from "react-icons/bs";
import { GiArtificialHive } from "react-icons/gi";
import Hobby1 from "@/public/hobby1.jpg";
import Hobby2 from "@/public/hobby2.jpg";
import Hobby3 from "@/public/hobby3.jpg";

export const metadata = {
  title: "O mnie",

  alternates: {
    canonical: "/o-mnie",
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
          <p className="hero-p tracking-tight">O mnie</p>
          <h1 className="heroh1">
            Strony, które wspierają <br></br>rozwój
            <span className="drop-shadow-sm heroh1"> Twojego biznesu.</span>
          </h1>
          <div className="flex gap-8 py-16 max-[550px]:flex-col max-[550px]:text-center">
            <Link href="/kontakt" className="btn btn-box btn-hero">
              Umów bezpłatną konsultację
            </Link>
            <Link href="/realizacje" className="btn1 btn-box btn-hero">
              Zobacz realizacje
            </Link>
          </div>
        </div>
      </div>
      <section>
        <RevealingSections goinUp={true}>
          <div className="container border-b-2 border-[var(--accent-color)]">
            <h2 className="mb-8">Dlaczego ja</h2>
            <div className="grid grid-cols-[60fr_40fr] gap-12 max-lg:grid-cols-1 max-lg:gap-8">
              <div className=" mb-12 lg:mt-20 flex flex-col justify-between">
                <p className="p-large">
                  Nazywam się Robert Grabowski i tworzę strony internetowe dla
                  firm, które chcą wyglądać profesjonalnie, budować zaufanie i
                  zdobywać nowych klientów. Łączę doświadczenie z dużych,
                  międzynarodowych projektów z bezpośrednią współpracą z małymi
                  i średnimi firmami.
                </p>
                <div className="grid grid-cols-2 gap-10 pt-12 max-sm:grid-cols-1 ">
                  <div>
                    <Image
                      alt="Samsung"
                      src={Samsung}
                      className="h-24 w-auto justify-self-center max-sm:justify-self-start"
                    />
                    <p className="text-center mt-4 max-sm:text-left">
                      Doświadczenie przy Samsung.com
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-6 justify-self-center max-sm:justify-self-start">
                      <PiProjectorScreenChart className="h-24 w-auto " />
                      <span className="text-[3.2rem] font-semibold self-end">
                        20+
                      </span>
                    </div>
                    <p className="text-center mt-4 max-sm:text-left">
                      Zrealizowanych projektów
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-6 justify-self-center max-sm:justify-self-start">
                      <AiOutlineGlobal className="h-24 w-auto " />
                      <span className="text-[3.2rem] font-semibold self-end">
                        4+ rynki
                      </span>
                    </div>
                    <p className="text-center mt-4 max-sm:text-left">
                      m.in. Polska, Włochy, Niemcy i UK
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-6 justify-self-center max-sm:justify-self-start">
                      <SlPeople className="h-24 w-auto " />
                      <span className="text-[1.8rem] font-semibold self-end">
                        Bezpośrednia <br></br>współpraca
                      </span>
                    </div>
                    <p className="text-center mt-4 max-sm:text-left">
                      od rozmowy do wdrożenia
                    </p>
                  </div>
                </div>
              </div>
              <Image
                alt="Robert Grabowski"
                src={RobIMG}
                className="max-lg:row-start-1 max-lg:max-w-[40rem] max-lg:h-auto max-lg:justify-self-center"
              />
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Jak pracuję z klientami</h2>
            <h3>
              Nie tylko tworzę strony. Prowadzę klienta przez cały projekt.
            </h3>
            <div className="grid grid-cols-3 gap-10 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
              <div className="p-6 box-shadow rounded-xl border-2 border-[var(--accent-color)]">
                <RevealingSections delay={100}>
                  <div className="flex gap-6">
                    <p className="text-[var(--accent-color)] font-semibold p-large self-end">
                      01
                    </p>
                    <IoChatboxEllipsesOutline className="h-16 w-auto" />
                  </div>
                </RevealingSections>
                <p className="font-semibold p-large mt-3 mb-2">
                  Rozmowa i poznanie biznesu
                </p>
                <p>
                  Najpierw chcę zrozumieć Twoją ofertę, klientów i cel strony -
                  dopiero później proponuję rozwiązanie.
                </p>
              </div>
              <div className="p-6 box-shadow rounded-xl border-2 border-[var(--accent-color)]">
                <RevealingSections delay={200}>
                  <div className="flex gap-6">
                    <p className="text-[var(--accent-color)] font-semibold p-large self-end">
                      02
                    </p>
                    <LuNotebookPen className="h-16 w-auto" />
                  </div>
                </RevealingSections>
                <p className="font-semibold p-large mt-3 mb-2">
                  Zakres i struktura
                </p>
                <p>
                  Pomagam ustalić, jakie podstrony i funkcje są naprawdę
                  potrzebne, żeby nie przepłacać za zbędne elementy.
                </p>
              </div>
              <div className="p-6 box-shadow rounded-xl border-2 border-[var(--accent-color)]">
                <RevealingSections delay={300}>
                  <div className="flex gap-6">
                    <p className="text-[var(--accent-color)] font-semibold p-large self-end">
                      03
                    </p>
                    <LuPencil className="h-16 w-auto" />
                  </div>
                </RevealingSections>
                <p className="font-semibold p-large mt-3 mb-2">
                  Design i development
                </p>
                <p>
                  Projektuję wygląd i samodzielnie buduję stronę, więc nie mam
                  rozjazdu miedzy projektem a finalnym wdrożeniem.
                </p>
              </div>
              <div className="p-6 box-shadow rounded-xl border-2 border-[var(--accent-color)]">
                <RevealingSections delay={400}>
                  <div className="flex gap-6">
                    <p className="text-[var(--accent-color)] font-semibold p-large self-end">
                      04
                    </p>
                    <IoRocketOutline className="h-16 w-auto" />
                  </div>
                </RevealingSections>
                <p className="font-semibold p-large mt-3 mb-2">Wdrożenie</p>
                <p>
                  Pomagam z domeną, hostingiem, formularzami, SEO, analityką i
                  uruchomieniem strony.
                </p>
              </div>
              <div className="p-6 box-shadow rounded-xl border-2 border-[var(--accent-color)]">
                <RevealingSections delay={500}>
                  <div className="flex gap-6">
                    <p className="text-[var(--accent-color)] font-semibold p-large self-end">
                      05
                    </p>
                    <IoHelpBuoyOutline className="h-16 w-auto" />
                  </div>
                </RevealingSections>
                <p className="font-semibold p-large mt-3 mb-2">
                  Wsparcie po publikacji
                </p>
                <p>
                  Nie zostawiam Cię z gotowym linkiem i instrukcją &quot;radź
                  sobie&quot;. Służę pomocą, wprowadzam zmiany i doradzam w
                  dalszym rozwoju.
                </p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Doświadczenie z dużych projektów</h2>
            <div className="grid grid-cols-2 gap-10 mt-4 max-md:grid-cols-1">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="mb-4">
                    Samsung.com - doświadczenie, które dało mi solidne podstawy.
                  </h3>
                  <p className="mb-8">
                    Pracowałem przy globalnym serwisie Samsung.com jako Web
                    Publisher, a następnie również jako trener. Zdobyte tam
                    doświadczenie nauczyło mnie pracy według procesów, dbałości
                    o szczegóły i współpracy w międzynarodowym środowisku.
                  </p>
                </div>
                <Link
                  href="/uslugi"
                  className="inline-flex items-center btn w-fit"
                >
                  Zobacz dostępne usługi
                </Link>
              </div>
              <div className="rounded-[1.5rem] relative overflow-hidden boxGradient2 max-md:row-start-1">
                <div className="px-6 py-8 flex flex-col gap-6 justify-between">
                  <div className="flex gap-6 textWhite items-center">
                    <IoPersonOutline className="h-14 w-auto" />
                    <div>
                      <p className="p-large">
                        Web Publisher<span className="px-3">→</span>Trener
                      </p>
                      <p>
                        Tworzenie, edycja, utrzymanie stron i szkolenie innych
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 textWhite items-center">
                    <AiOutlineGlobal className="h-14 w-auto" />
                    <div>
                      <p className="p-large">Kilka rynków europejskich</p>
                      <p>PL, IT, DE, UK i inne</p>
                    </div>
                  </div>
                  <div className="flex gap-6 textWhite items-center">
                    <RiCheckboxMultipleBlankLine className="h-14 w-auto" />
                    <div>
                      <p className="p-large">Strony produktowe i kampanie</p>
                      <p>Premiery, marketing, Samsung Shop App</p>
                    </div>
                  </div>
                  <div className="flex gap-6 textWhite items-center">
                    <IoPeopleOutline className="h-14 w-auto" />
                    <div>
                      <p className="p-large">Międzynarodowe zasady</p>
                      <p>Współpraca i wymiana wiedzy</p>
                    </div>
                  </div>
                </div>
                <Image
                  alt="Samsung"
                  src={SamsungExp}
                  fill
                  className="absolute -z-10 object-bottom object-cover"
                />
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Co to oznacza dla Ciebie?</h2>
            <h3>Standardy dużych projektów w praktyce Twojej firmy.</h3>
            <div className="grid grid-cols-4 gap-10 mt-16 max-lg:grid-cols-2 max-sm:grid-cols-1">
              <div className="flex gap-4">
                <IoDiamondOutline className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="p-large font-semibold mb-2">
                    Dbałość o szczegóły
                  </p>
                  <p>
                    Przy dużych serwisach liczy się każdy detal. Ten sam sposób
                    myślenia przenoszę do projektów dla moich klientów.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <IoSettingsOutline className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="p-large font-semibold mb-2">
                    Praca według procesu
                  </p>
                  <p>
                    Projekt prowadzę w uporządkowany sposób - od analizy, przez
                    design i development, po testy i publikację.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <HiOutlineDevicePhoneMobile className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="p-large font-semibold mb-2">
                    Responsywność i jakość
                  </p>
                  <p>
                    Strona musi działać świetnie na każdym urządzeniu i
                    zachowywać spójność niezależnie od rozdzielczości
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <IoChatboxEllipsesOutline className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="p-large font-semibold mb-2">
                    Jasna komunikacja
                  </p>
                  <p>
                    Doświadczenie w międzynarodowych zespołach nauczyło mnie
                    klarownej komunikacji i odpowiedzialności za projekt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Wybrane realizacje klientów</h2>
            <div className="grid grid-cols-2 gap-10 mt-16 max-md:grid-cols-1">
              <div className="grid grid-cols-2 gap-2 p-6 box-shadow rounded-xl gridCol1">
                <div className="flex flex-col justify-between h-full">
                  <p className="p-large text-[var(--accent-color)] font-semibold mb-4">
                    Verk Group
                  </p>
                  <div>
                    <p className="font-semibold mb-2">
                      Wjelojęzyczna strona firmowa
                    </p>
                    <p>
                      Od struktury i wdrożenia po formularze, SEO, analitykę i
                      publikację.
                    </p>
                  </div>
                  <Link
                    href="/realizacje"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit mt-2"
                  >
                    Sprawdź realizacje
                  </Link>
                </div>
                <div className="flex flex-col justify-between gap-2 gridColStart">
                  <Image alt="Verk Group" src={Verk} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-6 box-shadow rounded-xl gridCol1">
                <div className="flex flex-col justify-between h-full">
                  <p className="p-large text-[var(--accent-color)] font-semibold mb-4">
                    JeszczeStrona
                  </p>
                  <div>
                    <p className="font-semibold mb-2">Blog z CMS-em</p>
                    <p>
                      System umożliwiający samodzielne zarządzanie treścią,
                      kategoriami i zdjęciami.
                    </p>
                  </div>
                  <Link
                    href="/realizacje"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit mt-2"
                  >
                    Sprawdź realizacje
                  </Link>
                </div>
                <div className="flex flex-col justify-between gap-2 gridColStart">
                  <Image alt="JeszczeStronaAlboSto" src={JeszczeStrona} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-6 box-shadow rounded-xl gridCol1">
                <div className="flex flex-col justify-between h-full">
                  <p className="p-large text-[var(--accent-color)] font-semibold mb-4">
                    Robson Fotobudka
                  </p>
                  <div>
                    <p className="font-semibold mb-2">Landing Page</p>
                    <p>
                      Oferta, opis i rodzaje eventów, opinie klientów,
                      przekierowanie do kontaktu.
                    </p>
                  </div>
                  <Link
                    href="/realizacje"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit mt-2"
                  >
                    Sprawdź realizacje
                  </Link>
                </div>
                <div className="flex flex-col justify-between gap-2 gridColStart">
                  <Image alt="Robson" src={Robson} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-6 box-shadow rounded-xl gridCol1">
                <div className="flex flex-col justify-between h-full">
                  <p className="p-large text-[var(--accent-color)] font-semibold mb-4">
                    BalanceBook
                  </p>
                  <div>
                    <p className="font-semibold mb-2">
                      Strona biura ksiegowego
                    </p>
                    <p>
                      Solidny nacisk na ofertę, sekcję FAQ, przedstawienie
                      dokładnego cennika oraz kontakt.
                    </p>
                  </div>
                  <Link
                    href="/realizacje"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit mt-2"
                  >
                    Sprawdź realizacje
                  </Link>
                </div>
                <div className="flex flex-col justify-between gap-2 gridColStart">
                  <Image alt="BalanceBook" src={Balance} />
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section className="max-md:overflow-x-hidden">
        <RevealingSections goinUp={true}>
          <div className="container ">
            <h2>Co mówią klienci</h2>
            <h3>Zaufanie i dobra współpraca.</h3>
            <div className="grid grid-cols-3 gap-8 mt-10 max-md:overflow-x-scroll max-md:flex max-md:p-6 hiddenScroll">
              <div className="p-6 rounded-xl box-shadow flex flex-col justify-between max-md:min-w-[35rem]">
                <p>
                  Chciałbym serdecznie podziękować GrabCode Studio Robert
                  Grabowski za profesjonalne wykonanie mojej strony
                  internetowej. Współpraca przebiegła sprawnie i na najwyższym
                  poziomie - od pierwszych konsultacji, przez projektowanie, aż
                  po finalną realizację.
                </p>
                <div className="flex gap-4 mt-4">
                  <Image
                    alt="Opinia Tomasz Dębiński BalanceBook"
                    src={RevTom}
                    className="rounded-full max-h-16 w-auto"
                  />
                  <p className="self-end font-semibold opacity-80">
                    Tomasz Dębiński
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-xl box-shadow flex flex-col justify-between max-md:min-w-[35rem]">
                <p>
                  Polecam z czystym sumieniem, strona przejrzysta, czytelna,
                  sprawnie działającą, spelniajaca wymogi ponad oczekiwany
                  zakres 👍ponadto szybka i bezproblemowa realizacja oraz
                  doskonały kontakt. Takich wykonawców należy popierać i polecać
                </p>
                <div className="flex gap-4 mt-4">
                  <Image
                    alt="Opinia Tomasz Dębiński BalanceBook"
                    src={RevRob}
                    className="rounded-full max-h-16 w-auto"
                  />
                  <p className="self-end font-semibold opacity-80">
                    Robert Komorowski
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-xl box-shadow flex flex-col justify-between max-md:min-w-[35rem]">
                <p>
                  Profesjonalne podejście i ekspresowe wykonywanie zleceń. Super
                  pomoc przy wyborze stylu strony i dopasowaniu treści
                  ⭐️⭐️⭐️⭐️⭐️
                </p>
                <div className="flex gap-4 mt-4">
                  <Image
                    alt="Opinia Tomasz Dębiński BalanceBook"
                    src={RevMon}
                    className="rounded-full max-h-16 w-auto"
                  />
                  <p className="self-end font-semibold opacity-80">
                    Monika Drzazgowska
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Narzędzia</h2>
            <h3>Technologia dobrana do projektu.</h3>
            <p>
              Nie każda strona potrzebuje tego samego stosu technologicznego.
            </p>
            <p>
              Dobieram rozwiązanie do budżetu, funkcji i sposobu późniejszej
              obsługi.
            </p>
            <div className="grid grid-cols-6 gap-8 mt-10 max-lg:grid-cols-4 max-sm:grid-cols-2">
              <div className="flex gap-3 items-center">
                <SiNextdotjs className="h-12 w-auto text-[var(--accent-color)]" />
                <p>Next.js</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaReact className="h-12 w-auto text-[var(--accent-color)]" />
                <p>React</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiTypescript className="h-12 w-auto text-[var(--accent-color)]" />
                <p>TypeScript</p>
              </div>
              <div className="flex gap-3 items-center">
                <BsJavascript className="h-12 w-auto text-[var(--accent-color)]" />
                <p>JavaScript</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiTailwindcss className="h-12 w-auto text-[var(--accent-color)]" />
                <p>Tailwind CSS</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaCss3Alt className="h-12 w-auto text-[var(--accent-color)]" />
                <p>CSS</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaHtml5 className="h-12 w-auto text-[var(--accent-color)]" />
                <p>HTML</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiSanity className="h-12 w-auto text-[var(--accent-color)]" />
                <p>Sanity</p>
              </div>
              <div className="flex gap-3 items-center">
                <RiSupabaseLine className="h-12 w-auto text-[var(--accent-color)]" />
                <p>SupaBase</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiWordpress className="h-12 w-auto text-[var(--accent-color)]" />
                <p>Wordpress</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiWoocommerce className="h-12 w-auto text-[var(--accent-color)]" />
                <p>Woocommerce</p>
              </div>
              <div className="flex gap-3 items-center">
                <GiArtificialHive className="h-12 w-auto text-[var(--accent-color)]" />
                <p>AI</p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Poza GrabCode</h2>
            <div className="grid grid-cols-[40fr_60fr] gap-8 max-lg:grid-cols-1">
              <div>
                <h3>Nie samym kodem człowiek żyje.</h3>
                <p>
                  Poza projektowaniem stron lubię sport, fotografię i podróże.
                  Dają mi energię, dystans i nowe spojrzenie - co często
                  przekłada się też na lepsze pomysły w pracy.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 gridCol1">
                <Image alt="Koszykówka" src={Hobby1} className="rounded-xl" />
                <Image alt="Koszykówka" src={Hobby2} className="rounded-xl" />
                <Image alt="Koszykówka" src={Hobby3} className="rounded-xl" />
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>
    </>
  );
}

export default Page;
