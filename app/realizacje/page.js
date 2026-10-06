import Image from "next/image";
import KV from "@/public/kvnewopacity.png";
import Verk from "@/public/verk-demo.png";
import Strona from "@/public/strona-demo.png";
import NORDOM from "@/public/nordom-demo-trans.png";
import BEAUTY from "@/public/beauty-demo-trans.png";
import PERSONAL from "@/public/personal-demo-trans.png";
import Link from "next/link";
import HomeCta from "../components/homeCta";
import RevealingSections from "../components/revealingSections";
import TrustBarClientsSmall from "../components/trustBarClientsSmall";
export const metadata = {
  title: "Realizacje",
  alternates: {
    canonical: "/realizacje",
  },
};

function page() {
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
        <div>
          <p className="hero-p tracking-tight">Realizacje</p>
          <h1 className="heroh1">
            Różne branże. <br></br>Ten sam cel <br className="sm:hidden"></br>—
            <span className="drop-shadow-sm heroh1">realne efekty.</span>
          </h1>
        </div>
      </div>
      <section>
        <RevealingSections>
          <div className="container">
            <h2>Wybrane realizacje dla klientów</h2>
            <RevealingSections delay={200}>
              <div className="grid grid-cols-2 gap-16 px-4 max-lg:grid-cols-1 max-lg:gap-2">
                <Image alt="Verk Group" src={Verk} />
                <div className="py-4 flex flex-col justify-between">
                  <div>
                    <p className="text-[var(--accent-color)] font-semibold">
                      01
                    </p>
                    <h3 className="mb-2">VERK Group</h3>
                    <h4 className="mb-6">Wielojęzyczna strona firmowa</h4>
                    <p>
                      Serwis firmowy przygotowany dla firmy działającej w
                      e-commerce i handly miedzynarodowym. Polska i angielska
                      wersja językowa, prezentacja marek, formularz kontaktowy,
                      SEO, analityka oraz obsługa zgód cookies.
                    </p>
                    <div className="flex gap-6 my-8">
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        Next.js
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        TypeScript
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        PL/EN
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        SEO
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        GA4
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-8 mb-6">
                    <Link
                      href="/realizacje/verk-group"
                      className="btn inline-flex items-center"
                    >
                      Zobacz case study
                    </Link>
                    <Link
                      href="https://verkpage.vercel.app/"
                      className="btn1 inline-flex items-center"
                      target="_blank"
                    >
                      Otwórz stronę
                    </Link>
                  </div>
                </div>
              </div>
            </RevealingSections>
            <RevealingSections delay={200}>
              <div className="grid grid-cols-2 gap-16 mt-16 px-4 max-lg:grid-cols-1 max-lg:gap-2">
                <div className="py-4 flex flex-col justify-between">
                  <div>
                    <p className="text-[var(--accent-color)] font-semibold">
                      02
                    </p>
                    <h3 className="mb-2">JeszczeStronaAlboSto</h3>
                    <h4 className="mb-6">
                      Blog z własnym systemem zarządzania treścią
                    </h4>
                    <p>
                      Serwis dla twórczyni książkowej z blogiem, kategoriami
                      oraz systemem umożliwiającym samodzielną publikację i
                      zarządzanie treściami. Nowoczesny, lekki design i
                      przyjazna struktura dla czytelników.
                    </p>
                    <div className="flex gap-6 my-8">
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        Next.js
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        Supabase
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        CMS
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        Blog
                      </span>
                      <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold text-lg">
                        SEO
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-8 mb-6">
                    <Link
                      href="/realizacje/recenzja-ksiazek"
                      className="btn inline-flex items-center"
                    >
                      Zobacz case study
                    </Link>
                    <Link
                      href="https://jeszcze-strona-next.vercel.app/"
                      className="btn1 inline-flex items-center"
                      target="_blank"
                    >
                      Otwórz stronę
                    </Link>
                  </div>
                </div>
                <Image
                  alt="JeszczeStronaAlboSto recenzje książek z blogiem i współpracą"
                  src={Strona}
                  className="max-lg:row-start-1"
                />
              </div>
            </RevealingSections>
          </div>
        </RevealingSections>
      </section>
      <section>
        <RevealingSections>
          <div className="container">
            <h2>Przykładowe realizacje dla różnych branż</h2>
            <div className="grid grid-cols-3 gap-8 h-full max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-16">
              <div className="flex flex-col justify-between">
                <div>
                  <Image alt="Nordom" src={NORDOM} />
                  <p className="uppercase text-[1.2rem] font-semibold text-[var(--accent-color)]">
                    Projekt koncepcyjny
                  </p>
                  <h3 className="mb-1">NORDOM</h3>
                  <p>Strona dla firmy budowlanej.</p>
                  <div className="flex flex-wrap gap-4 my-4">
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Strona firmowa
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Realizacje
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Case studies
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Blog
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Formularz wyceny
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <Link
                    href="/realizacje/branza-budowlana"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                  >
                    Zobacz case study<span className="pl-3">→</span>
                  </Link>
                  <Link
                    href="https://demo-nordom-grabcode.vercel.app/"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                    target="_blank"
                  >
                    Otwórz stronę<span className="pl-3">→</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Image alt="Nordom" src={BEAUTY} />
                  <p className="uppercase text-[1.2rem] font-semibold text-[var(--accent-color)]">
                    Projekt koncepcyjny
                  </p>
                  <h3 className="mb-1">LashArt</h3>
                  <p>Landing page dla branży beauty</p>
                  <div className="flex flex-wrap gap-4 my-4">
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Oferta
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Efekty
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Opinie
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Lead generation
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <Link
                    href="/realizacje/branza-beauty"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                  >
                    Zobacz case study<span className="pl-3">→</span>
                  </Link>
                  <Link
                    href="https://demo-beauty-grabcode.vercel.app/"
                    target="_blank"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                  >
                    Otwórz stronę<span className="pl-3">→</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Image alt="Nordom" src={PERSONAL} />
                  <p className="uppercase text-[1.2rem] font-semibold text-[var(--accent-color)]">
                    Projekt koncepcyjny
                  </p>
                  <h3 className="mb-1">Trener personalny</h3>
                  <p>Landing page dla marki osobistej</p>
                  <div className="flex flex-wrap gap-4 my-4">
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Oferta
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Metamorfozy
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Opinie
                    </span>
                    <span className="bg-[var(--border-color)] px-6 py-2 rounded-full font-semibold">
                      Kontakt
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <Link
                    href="/realizacje/branza-trening-personalny"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                  >
                    Zobacz case study<span className="pl-3">→</span>
                  </Link>
                  <Link
                    href="https://demo-personal-trainer-grabcode.vercel.app/"
                    className="text-2xl font-semibold opacity-80 hover:opacity-100 transition-all duration-200 w-fit"
                    target="_blank"
                  >
                    Otwórz stronę<span className="pl-3">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>
      <RevealingSections>
        <TrustBarClientsSmall />
      </RevealingSections>
      <RevealingSections>
        <HomeCta />
      </RevealingSections>
    </>
  );
}

export default page;
