import Image from "next/image";
import KV from "@/public/kvgradnew.png";
import RevealingSections from "@/app/components/revealingSections";
import { FaReact, FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import KV2 from "@/public/strona-demo.png";
import { GoGoal, GoPencil } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";
import { IoBookOutline, IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { PiDevices, PiDevicesBold } from "react-icons/pi";
import { RiContactsBook3Line, RiSeoLine, RiSupabaseLine } from "react-icons/ri";
import {
  SiGoogleanalytics,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import KV3 from "@/public/strona1.png";
import { AiOutlineGlobal } from "react-icons/ai";
import KV4 from "@/public/demo-strona-desktop.png";
import KV5 from "@/public/demo-strona-tab.png";
import KV6 from "@/public/demo-strona-mobile.png";
import RealizationArtCta from "@/app/components/realizationArtCta";
import { FaRegEdit } from "react-icons/fa";

export const metadata = {
  title: "Realizacja komercyjna recenzji książek",
  alternates: {
    canonical: "/realizacje/recenzja-ksiazek",
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
          <h1 className="heroh1 mb-8">JeszczeStronaAlboSto</h1>
          <h2 className="heroh2">
            Strona dla recenzentki książek z blogiem <br></br>oraz własnym
            CMS-em.
          </h2>

          <RevealingSections delay={700}>
            <div className="flex gap-10 mt-12 max-sm:grid max-sm:grid-cols-2 max-md:z-20 mobileCenter max-sm:pb-8">
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">Blog/CMS</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">Książki i kultura</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">Next.js</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-16 min-w-16" />
                <p className="hero-p-icon">2024</p>
              </div>
            </div>
          </RevealingSections>
          <div className="flex gap-8 pt-16 max-sm:py-8 max-[550px]:flex-col max-[550px]:text-center mobileCenter">
            <Link
              href="https://jeszcze-strona-next.vercel.app/"
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
            alt="Strona internetowa JeszczeStronaAlboSto o recenzenzji książek, nastawiona na zdobywanie współprac z wydawnictwami."
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
                  Stworzenie estetycznej i czytelnej strony blogowej, która
                  dobrze prezentuje treści, buduje rozpoznawalny charakter
                  recenzentki oraz umożliwia wygodne zarządzanie wpisami.
                </p>
              </div>
            </div>

            <div className="flex gap-6 sm:pl-10">
              <IoSettingsOutline className="min-h-16 min-w-16 text-[var(--accent-color)]" />
              <div>
                <h3 className="font-semibold">Jak do tego podszedłem</h3>
                <p>
                  Postawiłem na indywidualny design, spokojną typografię i
                  przejrzysty układ treści. Ważnym elementem było również
                  przygotowanie prostego w użyciu systemu zarządzania wpisami.
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
                <p className="text-center">UX i struktura</p>
              </div>
              <div>
                <GoPencil className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Indywidualny design</p>
              </div>
              <div>
                <GoPencil className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Blog i artykuły</p>
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
                <IoSettingsOutline className="min-h-16 min-w-16 text-[var(--accent-color)] mx-auto mb-4" />
                <p className="text-center">Własny CMS</p>
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
                Design dopasowany <br></br>do klimatu autorki
              </h2>
              <p className="p-large">
                Układ strony został zaprojektowany tak, aby podkreślić charakter
                pasji do książek, wskazać na szerokie zainteresowanie gatunkami,
                zapewnić wygodny odczyt bloga oraz skierować do współpracy z
                wydawnictem.
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
                <IoBookOutline className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Czytelny układ wpisów</p>
                <p>
                  Treść i grafiki prowadzą użytkownika przez artykuły bez
                  chaosu.
                </p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <FaRegEdit className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Własny CMS</p>
                <p>Właścicielka może samodzielnie dodawać i edytować treści.</p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <RiContactsBook3Line className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Kategorie i nawigacja</p>
                <p>
                  Logiczny podział wpisów poprawia wygodę korzystania ze strony.
                </p>
              </div>
              <div className="p-6 bg-[var(--border-color)] rounded-xl">
                <PiDevices className="min-h-16 min-w-16 text-[var(--accent-color)] mb-4" />
                <p className="p-large font-semibold">Responsywność</p>
                <p>
                  Blog czyta się wygodnie na komputerze, laptopie oraz
                  smartfonie.
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
                  <RiSupabaseLine className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>Supabase</p>
                </div>
                <div className="flex gap-2 items-center">
                  <SiTailwindcss className="min-h-8 min-w-8 text-[var(--accent-color)]" />
                  <p>Tailwind CSS</p>
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
                Powstała spójna i estetyczna strona blogowa, która wspiera markę
                osobistą, prezentuje treści w uporządkowany sposób i daje
                swobodę samodzielnego zarządzania wpisami.
              </p>
            </div>
          </div>
        </RevealingSections>
      </section>

      <RealizationArtCta
        heading="Potrzebujesz bloga lub strony z CMS?"
        text="Stwórzmy projekt, który będzie wygodny dla Ciebie i czytelny dla odbiorców."
      />
    </>
  );
}

export default page;
