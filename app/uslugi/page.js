import Image from "next/image";
import KV from "@/public/kv.webp";
import LPkarkonosze from "@/public/LPkarkonosze.webp";
import LPcity from "@/public/LPcity.webp";
import LPportfolio from "@/public/LPportfolio.webp";
import LPcarousels from "@/public/LPcarousels.webp";
import Header from "../components/header";
import Star from "../components/star";
import Footer from "../components/footer";
import RevealingSections from "../components/revealingSections";
import Biglogotheme from "../components/biglogotheme";
import Link from "next/link";

function Page() {
  return (
    <>
      <div className="min-h-[35vh] overflow-hidden relative kv">
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
      <div className="pt-14 pb-4 px-8">
        <div className="h-max text-center">
          <h1 className="heroh1 mb-2">Przykłady usług</h1>
          <h2 className="heroh2">
            Dostosuj najlepszy pakiet usług na potrzeby Twojej strony
            internetowej
          </h2>
        </div>

        <div className="grid justify-center py-2">
          <Biglogotheme />
        </div>
        <div className="pb-12">
          <RevealingSections goinUp={true}>
            <div className="container px-8 max-md:px-6">
              <h2 className="text-center pb-12">Strony typu Landing Page</h2>
              <div className="site-boxes">
                <div className="site-box">
                  <h3 className="text-center">Przykładowy Landing Page</h3>
                  <div className="site-img-box">
                    <Image src={LPcity} alt="przyklad" />
                  </div>
                  <p className="px-4">
                    Strona{" "}
                    <Link
                      href="https://city-robfrontend.netlify.app/"
                      target="_blank"
                    >
                      Miasta LA
                    </Link>{" "}
                    zawiera nawigację, Hero (tutaj jest to główny duży obrazek z
                    tytułem i odnośnikiem w obrazku), odnośniki do social
                    mediów, szablon informacyjny z CTA (&apos;Call To
                    Action&apos; - zachęcający użytkownika do kliknięcia w
                    link), krótką galerię, mapę google oraz stopkę. Odwiedź
                    stronę aby doświadczyć pełni efektów.
                  </p>

                  <Link
                    href="https://city-robfrontend.netlify.app/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
                <div className="site-box">
                  <h3 className="text-center">Rozbudowany Landing Page</h3>
                  <div className="site-img-box">
                    <Image src={LPkarkonosze} alt="przyklad" />
                  </div>
                  <p className="px-4">
                    Strona{" "}
                    <Link
                      href="https://karkonosze-robfrontend.netlify.app/"
                      target="_blank"
                    >
                      Gór karkonoskich
                    </Link>{" "}
                    zawiera nawigację, Hero (brązowe tło z tytułem, podtytułem,
                    przyckiskami oraz obrazkiem głównym ), szablon z artykułami,
                    dwie małe galerie, szablon informayjny, szablon z
                    formularzem kontaktowym oraz stopkę. Odwiedź stronę aby
                    doświadczyć pełni efektów.
                  </p>

                  <Link
                    href="https://karkonosze-robfrontend.netlify.app/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
                <div className="site-box">
                  <h3 className="text-center">Portfolio z karuzelami</h3>
                  <div className="site-img-box">
                    <Image src={LPportfolio} alt="przyklad" />
                  </div>
                  <p className="px-4">
                    Strona{" "}
                    <Link
                      href="https://portfolio-robfrontend.netlify.app/"
                      target="_blank"
                    >
                      Portfolio
                    </Link>{" "}
                    zawiera nawigację, Hero (pierwszoplanowy obrazek oraz tytuł
                    i informacje), odnoścniki do social mediów, sekcję
                    przedstawiającą autora, dwie karuzele projektów oraz
                    kontakt. Odwiedź stronę aby doświadczyć pełni efektów.
                  </p>

                  <Link
                    href="https://portfolio-robfrontend.netlify.app/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
                <div className="site-box">
                  <h3 className="text-center">Specjalne funkcjonalności</h3>
                  <div className="site-img-box">
                    <Image src={LPcarousels} alt="przyklad" />
                  </div>
                  <p className="px-4">
                    Strona{" "}
                    <Link
                      href="https://kvcarousel-robfrontend.netlify.app/"
                      target="_blank"
                    >
                      Landing Page
                    </Link>{" "}
                    ze specjalnymi dodatkowymi funkcjonalnościami- zmiana
                    zawartości strony przez kliknięcie na kafelki widoczne w
                    prawym dolnym rogu (pozwala posiadać więcej
                    &apos;podstron&apos; zachowując charakter Landing Page).
                    Odwiedź stronę aby doświadczyć pełni efektów.
                  </p>

                  <Link
                    href="https://kvcarousel-robfrontend.netlify.app/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
              </div>
            </div>{" "}
          </RevealingSections>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Page;
