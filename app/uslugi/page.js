import Image from "next/image";
import KV from "@/public/kvnewopacity.png";
import Beauty from "@/public/beauty-demo-trans.png";
import RevealingSections from "../components/revealingSections";
import Biglogotheme from "../components/biglogotheme";
import Link from "next/link";
import { FiEdit, FiMonitor } from "react-icons/fi";
import {
  LuLayers3,
  LuMessagesSquare,
  LuNotebookPen,
  LuPlug,
  LuShieldCheck,
} from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaReact, FaRegCircleCheck } from "react-icons/fa6";
import ServicesTable from "../components/servicesTable";
import { IoMdSearch } from "react-icons/io";
import BeautyGrid from "@/public/servicesGrid1.png";
import PersonalGrid from "@/public/servicesGrid2.png";
import BuildGrid from "@/public/servicesGrid3.png";
import B2bGrid from "@/public/servicesGrid4.png";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoConstructOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import {
  SiNextdotjs,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import Faq from "../components/faq";
import HomeCta from "../components/homeCta";

export const metadata = {
  title: "Usługi",
  alternates: {
    canonical: "/uslugi",
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
          <p className="hero-p tracking-tight">Usługi</p>
          <h1 className="heroh1">
            Dobieram stronę <br></br>do celu <br className="sm:hidden"></br>
            <span className="drop-shadow-sm heroh1">Twojego biznesu.</span>
          </h1>
          <div className="flex gap-8 py-16 max-[550px]:flex-col max-[550px]:text-center">
            <Link href="/kontakt" className="btn btn-box btn-hero">
              Umów bezpłatną konsultację
            </Link>
            <Link href="/cennik" className="btn1 btn-box btn-hero">
              Zobacz cennik
            </Link>
          </div>
        </div>
      </div>
      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Wybierz rozwiązanie dla siebie</h2>
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md h-full max-sm:grid-cols-1">
              <div className="services-box2 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-6 mb-6">
                    <FiMonitor className="h-20 min-w-16" />
                    <div>
                      <h3>Landing Page</h3>
                      <p className="font-semibold mb-2 opacity-90">
                        Jedna oferta. Jeden konkretny cel.
                      </p>
                    </div>
                  </div>
                  <p>
                    Strona dla jednej usługi, kampani, eksperta lub frimy, która
                    chce szybko zacząć pozyskiwać zapytania.
                  </p>
                  <div className="flex flex-wrap gap-4 my-6">
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      1 strona
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      formularz
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      RWD
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      SEO
                    </span>
                  </div>
                </div>
                <div>
                  <p className="services-price mb-4">od 2 900 zł</p>
                  <Link
                    href="/cennik#landing-page"
                    className="text-2xl font-semibold mb-2 opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                  >
                    Dowiedz się więcej<span className="pl-3">→</span>
                  </Link>
                </div>
              </div>
              <div className="services-box2 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-6 mb-6">
                    <LuLayers3 className="h-20 min-w-16" />
                    <div>
                      <h3>Strona firmowa</h3>
                      <p className="font-semibold mb-2 opacity-90">
                        Profesjonalna wizytówka, która pracuje.
                      </p>
                    </div>
                  </div>
                  <p>
                    Kilka lub kilkanaście podstron prezentujących ofertę,
                    realizacje i firmę prowadząc użytkownika do kontaktu.
                  </p>
                  <div className="flex flex-wrap gap-4 my-6">
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      UX/UI
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      SEO
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      analityka
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      formularze
                    </span>
                  </div>
                </div>
                <div>
                  <p className="services-price mb-4">od 4 900 zł</p>
                  <Link
                    href="/cennik#strona-firmowa"
                    className="text-2xl font-semibold mb-2 opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                  >
                    Dowiedz się więcej<span className="pl-3">→</span>
                  </Link>
                </div>
              </div>
              <div className="services-box2 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-6 mb-6">
                    <HiOutlineShoppingCart className="h-20 min-w-16" />
                    <div>
                      <h3>Sklep Internetowy</h3>
                      <p className="font-semibold mb-2 opacity-90">
                        Sprzedaż online bez komplikacji.
                      </p>
                    </div>
                  </div>
                  <p>
                    WooCommerce z produktami, płatnościami, dostawą i
                    konfiguracją najważniejszych elemntów sklepu.
                  </p>
                  <div className="flex flex-wrap gap-4 my-6">
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      WooCommerce
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      płatności
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      dostawa
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold mb-2">
                      SEO
                    </span>
                  </div>
                </div>
                <div>
                  <p className="services-price mb-4">od 5 900 zł</p>
                  <Link
                    href="/cennik#sklep-internetowy"
                    className="text-2xl font-semibold mb-2 opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                  >
                    Dowiedz się więcej<span className="pl-3">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Landing Page</h2>
            <div className="grid grid-cols-2 gap-8 max-md h-full max-md:grid-cols-1">
              <div className="self-center">
                <h3 className="mb-6">
                  Skuteczna strona, która zamienia odwiedzających w klientów.
                </h3>
                <p className="mb-4">
                  Projęktuję landing page&apos;e, które przyciągają uwagę,
                  budują zaufanie i prowadzą do konkretnego działania -
                  rezerwacji, formularza, telefonu lub zakupu.
                </p>
                <ul className="mb-8 flex flex-col gap-2">
                  <li className="flex gap-4 items-center">
                    <FaRegCircleCheck className="h-7 w-7" />
                    <p>Indywidualny, nowoczesny design</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <FaRegCircleCheck className="h-7 w-7" />
                    <p>Responsywność na każdym urządzeniu</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <FaRegCircleCheck className="h-7 w-7" />
                    <p>Formularz kontaktowy lub rezerwacji</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <FaRegCircleCheck className="h-7 w-7" />
                    <p>Podstawowe SEO i analityka</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <FaRegCircleCheck className="h-7 w-7" />
                    <p>Szybkie wdrożenie</p>
                  </li>
                </ul>
                <div className="flex gap-8 mb-6 max-sm:flex-col max-sm:items-start">
                  <Link
                    href="https://demo-beauty-grabcode.vercel.app/"
                    className="btn inline-flex items-center"
                    target="_blank"
                  >
                    Zobacz przykład
                  </Link>
                  <Link
                    href="/cennik#landing-page"
                    className="btn1 inline-flex items-center"
                  >
                    Sprawdź w cenniku
                  </Link>
                </div>
              </div>
              <Image
                src={Beauty}
                alt="Landing Page branży beauty, właścicielki salonu kosmetycznego, brwi i rzęsy"
                className="max-md:row-start-1"
              />
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container flex gap-8 max-lg:flex-col">
            <div>
              <h2>Porównanie</h2>
              <div>
                <h3 className="mb-4">
                  Landing Page <br></br>czy strona firmowa?
                </h3>
                <p className="mb-10">
                  Nie wiesz, które rozwiązanie będzie lepsze? <br></br>Sprawdź
                  szybkie porównanie lub skontaktuj się ze mną - doradzę Ci
                  najlepszą opcję.
                </p>
                <Link
                  href="/kontakt#formularz-kontaktowy"
                  className="btn inline-flex items-center"
                >
                  Umów konsultację
                </Link>
              </div>
            </div>
            <ServicesTable />
          </div>
        </RevealingSections>
      </section>
      <section>
        <RevealingSections goinUp={true}>
          <div className="container ">
            <h2>Usługi dodatkowe</h2>
            <h3>Stronę można rozbudować o to, czego potrzebuje Twój biznes.</h3>
            <div className="grid grid-cols-4 gap-6 justify-between items-center mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
              <div className="flex gap-6 px-6 py-8 rounded-xl box-shadow h-full">
                <FiEdit className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">CMS i blog</p>
                  <p>
                    Samodzielnie zmieniaj treści i publikuj artykuły bez
                    znajomości kodu.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 px-6 py-8 rounded-xl box-shadow h-full">
                <IoMdSearch className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">SEO i widoczność</p>
                  <p>
                    Technicznie przygotuję stronę pod Google, indeksowanie i
                    wyszukiwanie lokalne.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 px-6 py-8 rounded-xl box-shadow h-full">
                <LuPlug className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">
                    Integracje i automatyzacje
                  </p>
                  <p>
                    Formularze, rezerwacje, newsletter, płatności i narzędzia,
                    których używasz w firmie.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 px-6 py-8 rounded-xl box-shadow h-full">
                <LuShieldCheck className="min-h-16 min-w-16 text-[var(--accent-color)]" />
                <div>
                  <p className="font-semibold mb-2">Opieka nad stroną</p>
                  <p>Aktualizacje, bezpiecezństwo i wsparcie po wdrożeniu.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container ">
            <h2>Branże</h2>
            <h3>Inna branża. Inne potrzeby.</h3>
            <p>Projektuję strony dopasowane do specyfiki Twojej branży.</p>
            <div className="grid grid-cols-4 gap-8 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
              <div className="relative grid min-h-[15rem] rounded-xl overflow-hidden boxGradient">
                <div className="self-end p-6">
                  <p className="textWhite font-semibold">Beauty</p>
                  <p className="textWhite">
                    Oferta, efekty, opinie <br className="max-md:hidden"></br>i
                    rezerwacja.
                  </p>
                </div>
                <Image
                  alt="Branża Beauty, salon kosmetyczny"
                  src={BeautyGrid}
                  fill
                  className="absolute -z-10 object-cover object-center"
                />
              </div>
              <div className="relative grid min-h-[15rem] rounded-xl overflow-hidden boxGradient">
                <div className="self-end p-6">
                  <p className="textWhite font-semibold">Trenerzy i fitness</p>
                  <p className="textWhite">
                    Marka eksperta, metamorfozy, konsultacje
                  </p>
                </div>
                <Image
                  alt="Trenerzy personalni i cała branża fitness, dietetycy"
                  src={PersonalGrid}
                  fill
                  className="absolute -z-10 object-cover object-center"
                />
              </div>
              <div className="relative grid min-h-[15rem] rounded-xl overflow-hidden boxGradient">
                <div className="self-end p-6">
                  <p className="textWhite font-semibold">Budownictwo</p>
                  <p className="textWhite">
                    Deklaracja, case study, formularz wyceny.
                  </p>
                </div>
                <Image
                  alt="Branża budowlana, budowa domów, budowa apartamentów"
                  src={BuildGrid}
                  fill
                  className="absolute -z-10 object-cover object-center"
                />
              </div>
              <div className="relative grid min-h-[15rem] rounded-xl overflow-hidden boxGradient">
                <div className="self-end p-6">
                  <p className="textWhite font-semibold">Firmy i B2B</p>
                  <p className="textWhite">
                    Oferta, kompetencje, <br className="max-md:hidden"></br>lead
                    generation.
                  </p>
                </div>
                <Image
                  alt="Firmy i B2B, małe działalności, średnie działalności"
                  src={B2bGrid}
                  fill
                  className="absolute -z-10 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container ">
            <h2>Jak wygląda współpraca</h2>
            <h3>Prosty proces. Jasne zasady</h3>
            <div className="grid grid-cols-3 gap-10 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
              <div>
                <p className="text-[var(--accent-color)] mb-4">01</p>
                <div className="flex gap-4">
                  <LuNotebookPen className="h-12 w-auto" />
                  <div>
                    <p className="font-semibold mb-1">Poznajemy cel</p>
                    <p>
                      Rozmawiamy o Twoich potrzebach <br></br>i oczekiwaniach.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[var(--accent-color)] mb-4">02</p>
                <div className="flex gap-4">
                  <LuMessagesSquare className="h-12 w-auto" />
                  <div>
                    <p className="font-semibold mb-1">Ustalamy zakres</p>
                    <p>
                      Proponuję rozwiązanie, <br></br>termin i wycenę.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[var(--accent-color)] mb-4">03</p>
                <div className="flex gap-4">
                  <AiOutlineFundProjectionScreen className="h-12 w-auto" />
                  <div>
                    <p className="font-semibold mb-1">Projektuję design</p>
                    <p>
                      Tworzę strukturę i projekt <br></br>graficzny strony.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[var(--accent-color)] mb-4">04</p>
                <div className="flex gap-4">
                  <IoConstructOutline className="h-12 w-auto" />
                  <div>
                    <p className="font-semibold mb-1">Buduję i testuję</p>
                    <p>
                      Tworzę stronę, dbam o jakość<br></br>i responsywność.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[var(--accent-color)] mb-4">05</p>
                <div className="flex gap-4">
                  <MdOutlineFileUpload className="h-12 w-auto" />
                  <div>
                    <p className="font-semibold mb-1">Publikacja i wsparcie</p>
                    <p>
                      Uruchamiam stronę i zapewniam <br></br>dalszą opiekę.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container ">
            <h2>Technologie</h2>
            <h3>Narzędzia dobieram do projektu.</h3>
            <p>
              Nie dlatego, że są modne, ale dlatego, że najlepiej sprawdzają się
              w danym przypadku.
            </p>
            <div className="flex gap-6 justify-between mt-10 max-md:grid max-md:grid-cols-4 max-sm:grid-cols-2">
              <div className="flex gap-3 items-center">
                <SiNextdotjs className="h-10 w-auto text-[var(--accent-color)]" />
                <p>Next.js</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaReact className="h-10 w-auto text-[var(--accent-color)]" />
                <p>React</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiTypescript className="h-10 w-auto text-[var(--accent-color)]" />
                <p>TypeScript</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiTailwindcss className="h-10 w-auto text-[var(--accent-color)]" />
                <p>Tailwind CSS</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiSanity className="h-10 w-auto text-[var(--accent-color)]" />
                <p>Sanity</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiWordpress className="h-10 w-auto text-[var(--accent-color)]" />
                <p>Wordpress</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiWoocommerce className="h-10 w-auto text-[var(--accent-color)]" />
                <p>Woocommerce</p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <div className="flex gap-12 justify-between max-xl:gap-10 max-[1100px]:flex-col">
              <div>
                <h2>Ceny od</h2>
                <h3>Ile kosztuje projekt?</h3>
                <p>
                  Każdy projekt wyceniam indywidualnie, <br></br>ale warto
                  spojrzeć na ceny startowe.
                </p>
              </div>
              <div className="[1100px]:self-end flex gap-8 justify-between max-xl:gap-6 max-md:grid max-md:grid-cols-2">
                <div className="py-6 px-12 bg-[var(--border-color)] rounded-xl">
                  <p className="font-semibold">Landing Page</p>
                  <p className="text-[2.4rem] font-bold">od 2 500 zł</p>
                </div>
                <div className="py-6 px-12 bg-[var(--border-color)] rounded-xl">
                  <p className="font-semibold">Strona firmowa</p>
                  <p className="text-[2.4rem] font-bold">od 3 500 zł</p>
                </div>
                <div className="py-6 px-12 bg-[var(--border-color)] rounded-xl">
                  <p className="font-semibold">Rozbudowany serwis</p>
                  <p className="text-[2.4rem] font-bold">od 4 500 zł</p>
                </div>
                <div className="py-6 px-12 bg-[var(--border-color)] rounded-xl">
                  <p className="font-semibold">Sklep internetowy</p>
                  <p className="text-[2.4rem] font-bold">od 4 500 zł</p>
                </div>
              </div>
            </div>
            <div className="grid mt-12">
              <Link
                href="/cennik"
                className="btn btn-box inline-flex items-center justify-self-end"
              >
                Zobacz pełny cennik
              </Link>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2>Najczęściej zadawane pytania</h2>
            <h3>Masz pytania? Sprawdź odpowiedzi.</h3>
            <Faq />
          </div>
        </RevealingSections>
      </section>

      <RevealingSections goinUp={true}>
        <HomeCta />
      </RevealingSections>
    </>
  );
}

export default Page;
