import Image from "next/image";
import KV from "@/public/kvnewopacity.png";
import RevealingSections from "../components/revealingSections";
import Kontakt from "../components/kontakt";
import Footer from "../components/footer";
import { SlEnergy } from "react-icons/sl";
import { IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";

export const metadata = {
  title: "Kontakt",
  alternates: {
    canonical: "/kontakt",
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
          <p className="hero-p tracking-tight">Kontakt</p>
          <h1 className="heroh1  mb-8">
            Porozmawiajmy <br></br>o
            <span className="drop-shadow-sm heroh1"> Twojej stronie.</span>
          </h1>
          <p className="p-large heroPLarge">
            Opowiedz mi krótko o swoim biznesie i pomyśle na stronę. <br></br>
            Odpowiem z pytaniami, propozycją rozwiązania lub wstępną wyceną.
          </p>
        </div>
      </div>
      <RevealingSections goinUp={true}>
        <Kontakt />
      </RevealingSections>
      <section>
        <RevealingSections goinUp={true}>
          <div className="container grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex gap-6">
              <SlEnergy className="min-h-24 min-w-24 text-[var(--accent-color)]" />
              <div>
                <p className="font-semibold">Szybka odpowiedź</p>
                <p>Zwykle odpisuję w ciągu 1 dnia roboczego.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <IoSettingsOutline className="min-h-24 min-w-24 text-[var(--accent-color)]" />
              <div>
                <p className="font-semibold">Przejrzysty proces</p>
                <p>Jasne zasadu, konkretne etapy i czytelna wycena.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <IoPeopleOutline className="min-h-24 min-w-24 text-[var(--accent-color)]" />
              <div>
                <p className="font-semibold">Wsparcie przy wdrożeniu</p>
                <p>
                  Pomaga nie tylko w projekcie, ale także przy uruchomieniu i
                  pierwszych krokach.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <LuMessageSquareMore className="min-h-24 min-w-24 text-[var(--accent-color)]" />
              <div>
                <p className="font-semibold">Kontakt bez zobowiązań</p>
                <p>
                  Możesz napisac, nawet jeśli nie masz jeszcze gotowego pomysłu
                  - doradzę najlepsze rozwiązani.
                </p>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>
    </>
  );
}

export default page;
