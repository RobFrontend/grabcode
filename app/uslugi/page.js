import Image from "next/image";
import KV from "@/public/kv.webp";
import LPkarkonosze from "@/public/karkonoszeLP.webp";
import LPcity from "@/public/cityLP.webp";
import LPportfolio from "@/public/portfolioLP.webp";
import LPcarousels from "@/public/carouselLP.webp";
import WSPortfolio from "@/public/portfolioWS.webp";
import WSBooks from "@/public/booksWS.webp";
import Header from "../components/header";
import Star from "../components/star";
import Footer from "../components/footer";
import RevealingSections from "../components/revealingSections";
import Biglogotheme from "../components/biglogotheme";
import Link from "next/link";

export const metadata = {
  title: "Przykłady usług",
};

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
          <h1 className="heroh1 mb-2 opacity-50">Przykłady usług</h1>
          <h2 className="heroh2">
            Zapraszam do przejrzenia kilku przykładowych projektów
          </h2>
        </div>

        <div className="py-32">
          <RevealingSections goinUp={true}>
            <div className="container px-8 max-md:px-6">
              <h2 className="text-center pb-14">Strony Landing Page</h2>
              <div className="site-boxes">
                <div className="site-box-vid">
                  <h3 className="text-center">Zwięzłość</h3>
                  <div>
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
                <div className="site-box-vid">
                  <h3 className="text-center">Przestronność</h3>
                  <div>
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
                <div className="site-box-vid">
                  <h3 className="text-center">Portfolio</h3>
                  <div>
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
                    przedstawiającą przykładową historię działalności autora,
                    dwie karuzele dla sekcji projektów oraz kontakt jako stopkę.
                    Odwiedź stronę aby doświadczyć pełni efektów.
                  </p>

                  <Link
                    href="https://portfolio-robfrontend.netlify.app/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
                <div className="site-box-vid">
                  <h3 className="text-center">Efektowność</h3>
                  <div>
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
            </div>
          </RevealingSections>
        </div>

        <div className="pb-32">
          <RevealingSections goinUp={true}>
            <div className="container px-8 max-md:px-6">
              <h2 className="text-center pb-14">Większe strony internetowe</h2>
              <div className="site-boxes">
                <div className="site-box-vid">
                  <h3 className="text-center">Strona z blogiem</h3>
                  <div>
                    {/* <video controls preload="yes">
                      <source src="videos/BlogWebsite.mp4" type="video/mp4" />
                      Twoja przeglądarka nie obsługuje Video Tagu.
                    </video> */}
                    <Image
                      src={WSBooks}
                      alt="Strona internetowa z blogiem i cms"
                    />
                  </div>
                  <p className="px-4">
                    Strona{" "}
                    <Link
                      href="https://www.jeszczestronaalbosto.pl/"
                      target="_blank"
                    >
                      działalności z blogiem
                    </Link>{" "}
                    zawiera stronę główną, kilka podstawowych podstron -
                    podstronę o autorze, współpracę, kontakt z formularzem
                    e-mailowym - oraz dodatkowo blog. Odwiedź stronę aby
                    doświadczyć pełni efektów.
                  </p>

                  <Link
                    href="https://www.jeszczestronaalbosto.pl/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
                <div className="site-box-vid">
                  <h3 className="text-center">Rozbudowane Portfolio</h3>
                  <div>
                    {/* <video controls preload="yes">
                      <source src="videos/Portfolio.mp4" type="video/mp4" />
                      Twoja przeglądarka nie obsługuje Video Tagu.
                    </video> */}
                    <Image
                      src={WSPortfolio}
                      alt="rozbudowane portfolio z wieloma podstronami"
                    />
                  </div>
                  <p className="px-4">
                    Strona{" "}
                    <Link
                      href="https://portfolio-robfrontend.vercel.app/"
                      target="_blank"
                    >
                      rozbudowanego Portfolio
                    </Link>{" "}
                    zawiera kilka podstron, a zatem bardziej szczegółowo
                    przedstawione informacje o autorze i jego projektach niż w
                    przypadku Portfolio typu Landing Page. Odwiedź stronę aby
                    doświadczyć pełni efektów.
                  </p>

                  <Link
                    href="https://portfolio-robfrontend.vercel.app/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
              </div>
            </div>
          </RevealingSections>
        </div>

        <div className="pb-12">
          <RevealingSections goinUp={true}>
            <div className="container px-8 max-md:px-6">
              <h2 className="text-center pb-14">Panele edycji treści</h2>
              <div className="site-boxes">
                <div className="site-box-vid">
                  <h3 className="text-center">Blog z CMS</h3>
                  <div>
                    <video controls preload="yes">
                      <source src="videos/CMSblog.mp4" type="video/mp4" />
                      Twoja przeglądarka nie obsługuje Video Tagu.
                    </video>
                  </div>
                  <p className="px-4">
                    Strona{" "}
                    <Link
                      href="https://cms-blog-grabcode.netlify.app/blog"
                      target="_blank"
                    >
                      Bloga z własnym CMS
                    </Link>{" "}
                    (panelem edycji treści) ukazuje jak samemu dodawać lub
                    usuwać posty na blogu - wygodna opcja w przypadku dodawania
                    podobnych postów na blogu (podobna budowa oraz obszerność).
                    Przetestuj śmiało samemu pod poniższym linkiem (prośba o
                    kulturalną edycję treści).
                  </p>

                  <Link
                    href="https://cms-blog-grabcode.netlify.app/blog"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
                <div className="site-box-vid">
                  <h3 className="text-center">CMS strony</h3>
                  <div>
                    <video controls preload="yes">
                      <source src="videos/CMSsite.mp4" type="video/mp4" />
                      Twoja przeglądarka nie obsługuje Video Tagu.
                    </video>
                  </div>
                  <p className="px-4">
                    Strona z{" "}
                    <Link
                      href="https://test-cms-grabcode.vercel.app/"
                      target="_blank"
                    >
                      Panelem edycji treści
                    </Link>{" "}
                    ukazuje jak samodzielnie zarządzać treścią na stronie
                    internetowej. Przetestuj śmiało samemu pod poniższym linkiem
                    - po kliknięciu &apos;zapisz zmiany&apos; zaczekaj kilka
                    sekund aby serwer wysłał nowe dane (prośba o kulturalną
                    edycję treści).
                  </p>

                  <Link
                    href="https://test-cms-grabcode.vercel.app/"
                    target="_blank"
                    className="linkToPage px-2"
                  >
                    Odwiedź stronę dla lepszego efektu
                  </Link>
                </div>
              </div>
            </div>
          </RevealingSections>
        </div>
        <div className="grid justify-center py-2">
          <Biglogotheme />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Page;
