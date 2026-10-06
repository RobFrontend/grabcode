import Image from "next/image";
import KV from "@/public/kvgradnew.png";
import RevealingSections from "@/app/components/revealingSections";
import { FaReact, FaRegCircleCheck, FaRegLightbulb } from "react-icons/fa6";
import Link from "next/link";
import KV2 from "@/public/beauty-demo-trans.png";
import { GoCodeReview, GoGoal } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { RiContactsBook3Line, RiGalleryLine, RiSeoLine } from "react-icons/ri";
import { PiDevicesBold } from "react-icons/pi";
import KV3 from "@/public/lashart1.png";
import KV4 from "@/public/demo-lash-desktop.png";
import KV5 from "@/public/demo-lash-tab.png";
import KV6 from "@/public/demo-lash-mobile.png";
import {
  SiGoogleanalytics,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import RealizationArtCta from "@/app/components/realizationArtCta";

export const metadata = {
  title: "Realizacja strony usługowej dla branży beauty",
  alternates: {
    canonical: "/realizacje/branza-beauty",
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
            <p className="hero-p tracking-tight">Projekt koncepcyjny</p>
          </div>
          <h1 className="heroh1 mb-8">LashArt</h1>
          <h2 className="heroh2">
            Nowoczesna strona dla salonu stylizacji rzęs i brwi
          </h2>

          <RevealingSections delay={700}>
            <div className="flex gap-10 mt-12 max-sm:grid max-sm:grid-cols-2 max-md:z-20 mobileCenter max-sm:pb-8">
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Branża beauty</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Strona usługowa</p>
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
              href="https://demo-beauty-grabcode.vercel.app/"
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
                <h3 className="font-semibold">Założenie projektu</h3>
                <p>
                  Stworzenie nowoczesnej strony internetowej, która posiada
                  piękny design, podkreśla profesjonalizm salonu, prezentuje
                  ofertę oraz umożliwia łatwą komunikację online.
                </p>
              </div>
            </div>

            <div className="flex gap-6 sm:pl-10">
              <FaRegLightbulb className="min-h-16 min-w-16 text-[var(--accent-color)]" />
              <div>
                <h3 className="font-semibold">Kierunek i rozwiązanie</h3>
                <p>
                  Postawiłem na elegancki, kobiecy design, przejrzystą strukturę
                  i intuicyjną nawigację. Strona została zaprojektowana tak, aby
                  budować zaufanie i pokazywać efekty zabiegów.
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
                <p className="text-center">UX i design</p>
              </div>
              <div>
                <GrNotes className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Oferta usług</p>
              </div>
              <div>
                <RiGalleryLine className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Galeria efektów</p>
              </div>
              <div>
                <RiContactsBook3Line className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Formularz kontaktowy</p>
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
                <GoCodeReview className="min-h-12 min-w-12 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Opinie klientek</p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>

      <section>
        <RevealingSections>
          <div className="container grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
            <div className="self-center">
              <h2>Design, który podkreśla piękno</h2>
              <p className="p-large">
                Delikatna, nowoczesna estetyka z subtelnymi akcentami różu i
                złamanej bieli oraz czerni tworzy spójny wizerunek marki. Duże
                zdjeciam elegancja typografia i minimalistyczny układ skutecznie
                przyciągają uwagę i budują zafuanie.
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
                <RiGalleryLine className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Galeria realizacji</p>
                <p>
                  Estetyczna prezentacja efektów zabiegów w formie galerii
                  zdjęć.
                </p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <GoCodeReview className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Opinie klientek</p>
                <p>Sekcja z rekomendacjami budująca zaufanie i wiarygodność.</p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <RiContactsBook3Line className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Formularz kontakowy</p>
                <p>
                  Prosty i intuicyjny kontakt z możwością dodania rezerwacji.
                </p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <PiDevicesBold className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Responsywny design</p>
                <p>Wygodne korzystanie na karzdym urządzeniu.</p>
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
              <h2>Co pokazuje ten projekt?</h2>
              <p>
                Jak może wyglądać nowoczesna strona dla salonu beauty, w której
                design, oferta, galeria efektów i rezerwacja wizyt tworzą
                spójny, elegancki i skuteczny system.
              </p>
            </div>
          </div>
        </RevealingSections>
      </section>
      <RealizationArtCta
        heading="Prowadzisz salon beauty?"
        text="Stwórzmy stronę, która przyciągnie Twoje klientki i ułatwi im rezerwację wizyt."
      />
    </>
  );
}

export default page;
