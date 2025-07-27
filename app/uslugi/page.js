import Image from "next/image";
import KV from "@/public/kv.webp";
import LPkarkonosze from "@/public/karkonoszeLPdevices.png";
import LPcity from "@/public/cityLPdevices.png";
import LPportfolio from "@/public/portfolioLPdevices.png";
import LPcarousels from "@/public/carouselLPdevices.png";
import WSPortfolio from "@/public/portfolioWSdevices.png";
import WSBooks from "@/public/booksWSdevices.png";
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
      <div className="min-h-[50vh] overflow-hidden relative kv">
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
      <div className="pt-32 pb-16 ">
        <div className="h-max text-center pb-24 border-b-2 border-[rgba(255,196,0,0.5)] ">
          <h1 className="heroh1 mb-8 opacity-50">Przykłady usług</h1>
          <h2 className="heroh2">
            Zapraszam do przejrzenia kilku przykładowych projektów
          </h2>
        </div>

        <div className="pb-32 pt-32 px-8">
          <RevealingSections goinUp={true}>
            <div className="container px-8 max-md:px-6">
              <h2 className="services-pages-h2">Strony Landing Page</h2>
              {/* <div className="site-boxes">
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
              </div> */}
              <div className="services-boxes-device">
                <div className="services-box-device">
                  <Image
                    src={LPcity}
                    alt="Strona miasta Los Angeles jako Landing Page"
                  />
                  <div className="content-center">
                    <h3 className="text-center pb-10">Strona Los Angeles</h3>
                    <p className="">
                      Strona{" "}
                      <Link
                        href="https://city-robfrontend.netlify.app/"
                        target="_blank"
                        className="underline"
                      >
                        Miasta LA
                      </Link>{" "}
                      zawiera:
                    </p>
                    <ul className="text-xl p-2">
                      <li>-nawigację</li>
                      <li>
                        -Hero (tutaj jest to główny duży obrazek z tytułem i
                        odnośnikiem w obrazku)
                      </li>
                      <li>-odnośniki do social mediów</li>
                      <li>
                        -szablon informacyjny z CTA (&apos;Call To Action&apos;
                        - zachęcający użytkownika do kliknięcia w link)
                      </li>
                      <li>-galerię, mapę google oraz stopkę</li>
                    </ul>
                    <p className="text-xl pb-8 pt-2 text-justify">
                      Odwiedź stronę aby doświadczyć pełni efektów.
                    </p>
                    <div className="grid items-center">
                      <Link
                        href="https://city-robfrontend.netlify.app/"
                        target="_blank"
                        className="linkToPage"
                      >
                        Odwiedź Los Angeles
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="services-box-device">
                  <Image
                    src={LPkarkonosze}
                    alt="Strona internetowa Karkonoszy jako Landing Page"
                  />
                  <div className="content-center">
                    <h3 className="text-center pb-10">Strona Karkonoszy</h3>
                    <p className="">
                      Strona{" "}
                      <Link
                        href="https://karkonosze-robfrontend.netlify.app/"
                        target="_blank"
                        className="underline"
                      >
                        Karkonoszy
                      </Link>{" "}
                      zawiera:
                    </p>

                    <ul className="text-xl p-2">
                      <li>-nawigację</li>
                      <li>
                        -Hero (brązowe tło z tytułem, podtytułem, przyckiskami
                        oraz obrazkiem głównym )
                      </li>
                      <li>-dwie małe galerie</li>
                      <li>
                        -szablon informayjny, szablon z formularzem kontaktowym
                        oraz stopkę
                      </li>
                    </ul>
                    <p className="text-xl pb-8 pt-2 text-justify">
                      Odwiedź stronę aby doświadczyć pełni efektów.
                    </p>
                    <div className="grid items-center">
                      <Link
                        href="https://karkonosze-robfrontend.netlify.app/"
                        target="_blank"
                        className="linkToPage"
                      >
                        Obejrzyj Karkonosze
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="services-box-device">
                  <Image
                    src={LPportfolio}
                    alt="Strona Portfolio jako Landing Page"
                  />
                  <div className="content-center">
                    <h3 className="text-center pb-10">
                      Portfolio Landing Page
                    </h3>
                    <p className="">
                      Strona jednostronicowego{" "}
                      <Link
                        href="https://portfolio-robfrontend.netlify.app/"
                        target="_blank"
                        className="underline"
                      >
                        Portfolio
                      </Link>{" "}
                      zawiera:
                    </p>

                    <ul className="text-xl p-2">
                      <li>-nawigację</li>
                      <li>
                        -Hero (pierwszoplanowy obrazek oraz tytuł i informacje)
                      </li>
                      <li>-odnoścniki do social mediów</li>
                      <li>
                        -przedstawiającą przykładową historię działalności
                        autora
                      </li>
                      <li>-dwie karuzele dla sekcji projektów</li>
                      <li>-kontakt jako stopkę</li>
                    </ul>
                    <p className="text-xl pb-8 pt-2 text-justify">
                      Odwiedź stronę aby doświadczyć pełni efektów.
                    </p>
                    <div className="grid items-center">
                      <Link
                        href="https://portfolio-robfrontend.netlify.app/"
                        target="_blank"
                        className="linkToPage"
                      >
                        Obejrzyj Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="services-box-device">
                  <Image src={LPcarousels} alt="city" />
                  <div className="content-center">
                    <h3 className="text-center pb-10">Strona motoryzacji</h3>
                    <p className="">
                      Landing Page{" "}
                      <Link
                        href="https://kvcarousel-robfrontend.netlify.app/"
                        target="_blank"
                        className="underline"
                      >
                        motorsportu
                      </Link>{" "}
                      zawiera specjalne dodatkowe funkcjonalności:
                    </p>
                    <ul className="text-xl p-2">
                      <li>
                        -pięc różnych wyglądów strony zachowując strukturę
                        Landing Page
                      </li>
                      <li>
                        -zmiana zawartości strony przez kliknięcie na kafelki
                        widoczne w prawym dolnym rogu
                      </li>
                      <li>-wrażenie posiadania wielu podstron</li>
                      <li>-dodatkowe efekty</li>
                    </ul>
                    <p className="text-xl pb-8 pt-2 text-justify">
                      Odwiedź stronę aby doświadczyć pełni efektów.
                    </p>
                    <div className="grid items-center">
                      <Link
                        href="https://kvcarousel-robfrontend.netlify.app/"
                        target="_blank"
                        className="linkToPage"
                      >
                        Obejrzyj Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealingSections>
        </div>

        <div className="pb-32 pt-32 px-8">
          <RevealingSections goinUp={true}>
            <div className="container px-8 max-md:px-6">
              <h2 className="services-pages-h2">Większe strony internetowe</h2>
              {/* <div className="site-boxes">
                <div className="site-box-vid">
                  <h3 className="text-center">Strona z blogiem</h3>
                  <div>
              
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
              </div> */}
              <div className="services-boxes-device">
                <div className="services-box-device">
                  <Image
                    src={WSBooks}
                    alt="Strona działalności prowadzenia recenzji z blogiem i CMS"
                  />
                  <div className="content-center">
                    <h3 className="text-center pb-10">Strona z blogiem</h3>
                    <p className="">
                      Strona{" "}
                      <Link
                        href="https://www.jeszczestronaalbosto.pl/"
                        target="_blank"
                        className="underline"
                      >
                        działalności z blogiem
                      </Link>{" "}
                      zawiera:
                    </p>
                    <ul className="text-xl p-2">
                      <li>-stronę główną</li>
                      <li>-podstronę o autorze</li>
                      <li>-blog z panelem edycji treści</li>
                      <li>-podstronę o współpracy</li>
                      <li>-kontakt z formularzem e-mailowym</li>
                    </ul>
                    <p className="text-xl pb-8 pt-2 text-justify">
                      Odwiedź stronę aby doświadczyć pełni efektów.
                    </p>
                    <div className="grid items-center">
                      <Link
                        href="https://www.jeszczestronaalbosto.pl/"
                        target="_blank"
                        className="linkToPage"
                      >
                        JeszczeStronaAlboSto
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="services-box-device">
                  <Image
                    src={WSPortfolio}
                    alt="Portfolio jako strona z kilkoma podstronami"
                  />
                  <div className="content-center">
                    <h3 className="text-center pb-10">Rozbudowane Portfolio</h3>
                    <p className="">
                      Strona rozbudowanego{" "}
                      <Link
                        href="https://portfolio-robfrontend.vercel.app/"
                        target="_blank"
                        className="underline"
                      >
                        Portfolio
                      </Link>{" "}
                      zawiera:
                    </p>
                    <ul className="text-xl p-2">
                      <li>-stronę główną</li>
                      <li>-podstronę o projektach wykonanych dla klientów</li>
                      <li>-podstronę o projektach hoobystycznych</li>
                      <li>-podstronę z kontaktem</li>
                    </ul>
                    <p className="text-xl pb-8 pt-2 text-justify">
                      Odwiedź stronę aby doświadczyć pełni efektów.
                    </p>
                    <div className="grid items-center">
                      <Link
                        href="https://portfolio-robfrontend.vercel.app/"
                        target="_blank"
                        className="linkToPage"
                      >
                        Obejrzyj Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealingSections>
        </div>

        <div className="pb-12 pt-32 px-8">
          <RevealingSections goinUp={true}>
            <div className="container px-8 max-md:px-6">
              <h2 className="text-center pb-20">Panele edycji treści</h2>
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
      </div>
      <div className="grid justify-center py-2 big-logo w-full">
        <Biglogotheme />
      </div>

      <Footer />
    </>
  );
}

export default Page;
