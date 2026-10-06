"use client";
import { useState } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";
function FaqPrices() {
  const [isShow, setIsShow] = useState(0);
  return (
    <div className="grid grid-cols-1 gap-6 my-10">
      <div className="shadow-md rounded-xl p-1 h-min">
        <div
          className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            isShow !== 1 ? setIsShow(1) : setIsShow(0);
          }}
        >
          <p className="font-medium">Czy podane ceny są netto czy brutto?</p>
          {isShow !== 1 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 1 && (
          <div className="px-4 ">
            <p>
              Podane ceny są cenami końcowymi. Obecnie korzystam ze zwolnienia z
              VAT, dlatego do podanych kwot nie jest doliczany VAT.
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
          <p className="font-medium">Czy mogę zapłacić w kilku etapach?</p>
          {isShow !== 2 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 2 && (
          <div className="px-4 ">
            <p>
              Tak. Przy mniejszych projektach płatność najczęściej dzielę na
              dwie części — przed rozpoczęciem prac oraz przed publikacją
              strony. Przy większych realizacjach możemy podzielić płatność na
              kilka etapów powiązanych z kolejnymi fazami projektu.
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
          <p className="font-medium">Czy hosting i domena są w cenie?</p>
          {isShow !== 3 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 3 && (
          <div className="px-4 ">
            <p>
              Koszt domeny i hostingu zazwyczaj nie jest wliczony w cenę
              projektu, ponieważ są to usługi opłacane bezpośrednio u
              zewnętrznego dostawcy. Pomagam jednak dobrać odpowiednie
              rozwiązanie, skonfigurować je i uruchomić na nim stronę.
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
            Czy mogę zacząć od prostszej strony i później ją rozbudować?
          </p>
          {isShow !== 4 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 4 && (
          <div className="px-4">
            <p>
              Tak. Możemy zacząć od podstawowej wersji strony, a z czasem
              dodawać kolejne podstrony, CMS, blog, integracje czy nowe funkcje.
              Jeżeli od początku wiesz, że strona będzie rozwijana, uwzględnię
              to już przy planowaniu jej struktury.
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
          <p className="font-medium">
            Co jeśli w trakcie projektu będę potrzebować nowe funkcje?
          </p>
          {isShow !== 5 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 5 && (
          <div className="px-4 ">
            <p>
              Jeżeli pojawi się dodatkowy pomysł, najpierw sprawdzę, jak wpłynie
              on na zakres, termin i koszt realizacji. Po akceptacji możemy
              rozszerzyć projekt bez konieczności rozpoczynania wszystkiego od
              nowa.
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
          <p className="font-medium">
            Ile kosztuje późniejsze utrzymanie strony?
          </p>
          {isShow !== 6 ? <FiPlus /> : <FiMinus />}
        </div>
        {isShow === 6 && (
          <div className="px-4">
            <p>
              To zależy od zakresu potrzeb. Po wdrożeniu możesz samodzielnie
              zarządzać stroną albo skorzystać z mojej opieki obejmującej m.in.
              aktualizacje, drobne zmiany, wsparcie techniczne i dalszy rozwój.
              Stała opieka może być rozliczana miesięcznie lub pojedynczo za
              konkretne prace.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FaqPrices;
