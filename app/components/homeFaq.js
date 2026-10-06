"use client";
import { useState } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";

function HomeFaq() {
  const [isShow, setIsShow] = useState(0);
  return (
    <section>
      <div className="container">
        <h2>Nie tylko wygląd</h2>
        <h3 className="mb-6">Liczy się to, co działa pod spodem</h3>
        <p>
          Ładna strona to dopiero początek. Ważne jest też to, czy działa
          szybko, jest widoczna w Google i można ją rozwijać bez budowania
          wszystkiego od nowa.
        </p>
        <div className="grid gap-6 my-10">
          <div className="shadow-md rounded-xl p-1 h-min">
            <div
              className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 gap-4"
              onClick={() => {
                isShow !== 1 ? setIsShow(1) : setIsShow(0);
              }}
            >
              <p className="font-medium">
                Czy nie mogę po prostu stworzyć strony samodzielnie z pomocą AI?
              </p>
              {isShow !== 1 ? (
                <FiPlus className="min-h-5 min-w-5" />
              ) : (
                <FiMinus className="min-h-5 min-w-5" />
              )}
            </div>
            {isShow === 1 && (
              <div className="px-4 ">
                <p>
                  Możesz - szczególnie jeśli potrzebujesz bardzo prostej strony.
                  Problem zaczyna się wtedy, gdy strona ma nie tylko wyglądać
                  dobrze, ale również być szybka, poprawnie indeksowana przez
                  Google, responsywna, bezpieczna i przygotowana do dalszego
                  rozwoju. AI potrafi wygenerować kod, ale ktoś nadal musi
                  wiedzieć, co powinno zostać zbudowane, jak to sprawdzić i
                  czego w projekcie brakuje.
                </p>
              </div>
            )}
          </div>
          <div className="shadow-md rounded-xl p-1 h-min">
            <div
              className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 gap-4"
              onClick={() => {
                isShow !== 2 ? setIsShow(2) : setIsShow(0);
              }}
            >
              <p className="font-medium">
                Przecież AI potrafi dziś wygenerować całą stronę. Po co mi
                developer?
              </p>
              {isShow !== 2 ? (
                <FiPlus className="min-h-5 min-w-5" />
              ) : (
                <FiMinus className="min-h-5 min-w-5" />
              )}
            </div>
            {isShow === 2 && (
              <div className="px-4 ">
                <p>
                  Samo wygenerowanie komponentów to tylko część pracy. Przy
                  profesjonalnej stronie trzeba zadbać m.in. o strukturę
                  informacji, UX, semantyczny HTML, wydajność, SEO techniczne,
                  sitemap.xml, robots.txt, canonicale, formularze, analitykę,
                  cookies, responsywność i późniejszą możliwość rozbudowy. W
                  GrabCode AI może wspierać pracę, ale finalne decyzje i
                  odpowiedzialność za projekt pozostają po stronie człowieka.
                </p>
              </div>
            )}
          </div>
          <div className="shadow-md rounded-xl p-1 h-min">
            <div
              className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 gap-4"
              onClick={() => {
                isShow !== 3 ? setIsShow(3) : setIsShow(0);
              }}
            >
              <p className="font-medium">
                Czy strona stworzona przez AI może dobrze wyglądać?
              </p>
              {isShow !== 3 ? (
                <FiPlus className="min-h-5 min-w-5" />
              ) : (
                <FiMinus className="min-h-5 min-w-5" />
              )}
            </div>
            {isShow === 3 && (
              <div className="px-4 ">
                <p>
                  Oczywiście. Ładny wygląd nie zawsze oznacza jednak dobrą
                  stronę. Projekt powinien prowadzić użytkownika do działania,
                  prezentować właściwe informacje we właściwej kolejności i
                  odpowiadać na potrzeby konkretnego biznesu. Dlatego zaczynam
                  od poznania firmy i celu strony, a dopiero później projektuję
                  wygląd.
                </p>
              </div>
            )}
          </div>
          <div className="shadow-md rounded-xl p-1 h-min">
            <div
              className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 gap-4"
              onClick={() => {
                isShow !== 4 ? setIsShow(4) : setIsShow(0);
              }}
            >
              <p className="font-medium">
                Skąd mam wiedzieć, że moja strona będzie przygotowana pod
                Google?
              </p>
              {isShow !== 4 ? (
                <FiPlus className="min-h-5 min-w-5" />
              ) : (
                <FiMinus className="min-h-5 min-w-5" />
              )}
            </div>
            {isShow === 4 && (
              <div className="px-4">
                <p>
                  Nie ograniczam SEO do wpisania kilku słów kluczowych. Każdy
                  projekt przygotowuję technicznie pod indeksowanie — dbam m.in.
                  o strukturę nagłówków, metadata, sitemapę, robots.txt,
                  canonicale, adresy URL, optymalizację obrazów i wydajność.
                  Dzięki temu strona ma solidną podstawę do dalszego
                  pozycjonowania.
                </p>
              </div>
            )}
          </div>
          <div className="shadow-md rounded-xl p-1 h-min">
            <div
              className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 gap-4"
              onClick={() => {
                isShow !== 5 ? setIsShow(5) : setIsShow(0);
              }}
            >
              <p className="font-medium">
                Co jeśli za pół roku będę chciał dodać blog, nową usługę albo
                kolejne funkcje?
              </p>
              {isShow !== 5 ? (
                <FiPlus className="min-h-5 min-w-5" />
              ) : (
                <FiMinus className="min-h-5 min-w-5" />
              )}
            </div>
            {isShow === 5 && (
              <div className="px-4 ">
                <p>
                  To jedna z rzeczy, o których warto pomyśleć już na początku.
                  Projektuję strony tak, aby można było je później rozwijać —
                  dodać nowe podstrony, CMS, wersję językową, integrację API,
                  system rezerwacji czy bardziej rozbudowane formularze.
                  Wygenerowanie strony „na teraz” jest proste. Zbudowanie jej
                  tak, żeby nie trzeba było za rok zaczynać od początku, wymaga
                  już odpowiedniej architektury.
                </p>
              </div>
            )}
          </div>
          <div className="shadow-md rounded-xl p-1 h-min">
            <div
              className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 gap-4"
              onClick={() => {
                isShow !== 6 ? setIsShow(6) : setIsShow(0);
              }}
            >
              <p className="font-medium">
                Czy strona robiona przez człowieka zawsze będzie lepsza od tej
                wygenerowanej przez AI?
              </p>
              {isShow !== 6 ? (
                <FiPlus className="min-h-5 min-w-5" />
              ) : (
                <FiMinus className="min-h-5 min-w-5" />
              )}
            </div>
            {isShow === 6 && (
              <div className="px-4">
                <p>
                  Nie zawsze. AI jest bardzo dobrym narzędziem i sam korzystam z
                  nowoczesnych rozwiązań, kiedy pomagają wykonać pracę szybciej
                  lub lepiej. Różnica polega na tym, że narzędzie nie zastępuje
                  wiedzy o kodzie, SEO, UX i architekturze strony. Liczy się nie
                  to, czy wykorzystano AI, ale czy osoba realizująca projekt
                  potrafi ocenić jego wynik i wziąć odpowiedzialność za całość.
                </p>
              </div>
            )}
          </div>
          <div className="shadow-md rounded-xl p-1 h-min">
            <div
              className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 gap-4"
              onClick={() => {
                isShow !== 7 ? setIsShow(7) : setIsShow(0);
              }}
            >
              <p className="font-medium">
                Co właściwie zyskuję, zlecając stronę GrabCode zamiast korzystać
                z generatora?
              </p>
              {isShow !== 7 ? (
                <FiPlus className="min-h-5 min-w-5" />
              ) : (
                <FiMinus className="min-h-5 min-w-5" />
              )}
            </div>
            {isShow === 7 && (
              <div className="px-4">
                <p>
                  Dostajesz nie tylko gotową stronę, ale cały proces: analizę
                  potrzeb, strukturę, indywidualny design, development,
                  responsywność, podstawowe SEO, konfigurację formularzy i
                  analityki, pomoc przy domenie i wdrożeniu oraz możliwość
                  dalszej rozbudowy. Nie musisz wiedzieć, czego potrzebuje
                  strona od strony technicznej — właśnie za to odpowiadam ja.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFaq;
