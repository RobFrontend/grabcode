"use client";
import { useState } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";

function Faq() {
  const [isShow, setIsShow] = useState(0);
  return (
    <div className="grid grid-cols-2 gap-6 my-10 max-md:grid-cols-1">
      <div className="shadow-md rounded-xl p-1 h-min">
        <div
          className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            isShow !== 1 ? setIsShow(1) : setIsShow(0);
          }}
        >
          <p className="font-medium">
            Czy pomożesz mi wybrać odpowiedni typ strony?
          </p>
          {isShow !== 1 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 1 && (
          <div className="px-4 ">
            <p>
              Tak. Nie musisz wiedzieć, czy potrzebujesz landing page&apos;a,
              strony firmowej czy bardziej rozbudowanego serwisu. Na początku
              poznaję Twój biznes, ofertę i cel strony, a następnie proponuję
              rozwiązanie dopasowane do realnych potrzeb i budżetu.
            </p>
          </div>
        )}
      </div>
      <div className="shadow-md rounded-xl p-1 h-min">
        <div
          className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            isShow !== 2 ? setIsShow(2) : setIsShow(0);
          }}
        >
          <p className="font-medium">
            Czy będę mógł sam zmieniać treści na stronie?
          </p>
          {isShow !== 2 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 2 && (
          <div className="px-4 ">
            <p>
              Tak, jeśli zależy Ci na samodzielnej edycji treści, mogę wdrożyć
              system CMS. Dzięki temu bez znajomości programowania zmienisz np.
              teksty, realizacje, wpisy blogowe czy wybrane elementy oferty.
              Zakres edycji ustalamy przed rozpoczęciem projektu.
            </p>
          </div>
        )}
      </div>
      <div className="shadow-md rounded-xl p-1 h-min">
        <div
          className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            isShow !== 3 ? setIsShow(3) : setIsShow(0);
          }}
        >
          <p className="font-medium">Czy mogę później rozbudować stronę?</p>
          {isShow !== 3 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 3 && (
          <div className="px-4 ">
            <p>
              Tak. Stronę można później rozszerzyć o kolejne podstrony, blog,
              CMS, nowe formularze, integracje, dodatkowe wersje językowe czy
              inne funkcje. Warto od początku zaplanować projekt tak, aby jego
              dalszy rozwój był możliwie prosty.
            </p>
          </div>
        )}
      </div>
      <div className="shadow-md rounded-xl p-1 h-min">
        <div
          className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            isShow !== 4 ? setIsShow(4) : setIsShow(0);
          }}
        >
          <p className="font-medium">
            Czy mozesz przebudować moją obecną stronę?
          </p>
          {isShow !== 4 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 4 && (
          <div className="px-4">
            <p>
              Tak. Mogę odświeżyć istniejącą stronę wizualnie, poprawić jej
              strukturę, responsywność, wydajność i SEO albo przygotować
              całkowicie nową wersję. Najpierw analizuję obecną stronę i
              proponuję zakres zmian, który ma największy sens biznesowy.
            </p>
          </div>
        )}
      </div>
      <div className="shadow-md rounded-xl p-1 h-min">
        <div
          className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            isShow !== 5 ? setIsShow(5) : setIsShow(0);
          }}
        >
          <p className="font-medium">Czy zajmujesz się domenoą i hostingiem?</p>
          {isShow !== 5 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 5 && (
          <div className="px-4 ">
            <p>
              Tak. Mogę pomóc w wyborze hostingu, konfiguracji domeny, DNS oraz
              wdrożeniu gotowej strony na serwer. Jeśli masz już domenę i
              hosting, sprawdzę, czy obecne rozwiązanie będzie odpowiednie dla
              projektu.
            </p>
          </div>
        )}
      </div>
      <div className="shadow-md rounded-xl p-1 h-min">
        <div
          className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            isShow !== 6 ? setIsShow(6) : setIsShow(0);
          }}
        >
          <p className="font-medium">Czy muszę mieć własne teksty i zdjęcia?</p>
          {isShow !== 6 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 6 && (
          <div className="px-4">
            <p>
              Nie musisz mieć wszystkiego gotowego na początku. Mogę pomóc
              uporządkować treści, przygotować strukturę strony i podpowiedzieć,
              jakiego materiału potrzebujemy. Jeśli brakuje zdjęć lub grafik,
              wspólnie ustalimy najlepsze rozwiązanie — materiały własne,
              stockowe lub przygotowane specjalnie do projektu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Faq;
