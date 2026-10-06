import Image from "next/image";
import KVgrad from "@/public/kvgradnew.png";
import ROB from "@/public/rob.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import KVmobgrad from "@/public/kvmobgradnew.png";
import Header from "./header";
import Link from "next/link";
import RevealingSections from "./revealingSections";

function Hero() {
  return (
    <div className="min-h-screen hero relative max-lg:flex max-lg:flex-col max-lg:justify-between pb-0 overflow-hidden">
      {/* <Header /> */}
      <div className="min-h-[80vh] max-lg:min-h-[50vh] grid max-w-[60%]  items-center max-[1580px]:max-w-[70%] max-[950px]:max-w-[80%] max-[800px]:max-w-[100%] max-sm:items-start">
        <div className="px-[128px] max-2xl:px-[80px] max-xl:px-[48px] pb-8 borderr max-sm:mt-[96px] max-sm:px-8">
          <div>
            <p className="hero-p tracking-tight">
              Strony, które pracują dla Twojego biznesu
            </p>

            <h1 className="mb-12 max-sm:mb-8 heroh1">
              Buduj profesjonalny wizerunek,<br></br>
              wzbudzaj zaufanie<br></br>i zamieniaj odwiedzających
              <br></br>
              <span className="drop-shadow-sd">w klientów.</span>
            </h1>
            <p className="p-large heroPLarge mb-4">
              Od strategii i projektu po wdrożenie - tworzę strony dopasowane do
              Twojego biznesu, <br className="max-md:hidden"></br>które dobrze
              wyglądają, szybko działają i prowadzą klientów do kontaktu.
            </p>
            {/* <h2 className="mb-8 heroh2">
              Projektuję nowoczesne strony dla firm usługowych, marek osobistych
              i lokalnych biznesów - od strategi i designu, po wdrożenie, SEO i
              formularze kontaktowe.
            </h2> */}
          </div>
          <div className="flex gap-8 py-16 max-sm:py-8 max-[550px]:flex-col max-[550px]:text-center">
            <Link
              href="/kontakt#formularz-kontaktowy"
              className="btn btn-box btn-hero"
            >
              Umów bezpłatną konsultację
            </Link>
            <Link href="/realizacje" className="btn1 btn-box btn-hero">
              Zobacz realizacje
            </Link>
          </div>
          <RevealingSections delay={700}>
            <div className="flex gap-10 my-8 max-sm:grid max-sm:grid-cols-2 max-md:z-20">
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Indywidualny design</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">SEO i szybkość</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Responsywność</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaRegCircleCheck className="min-h-12 min-w-12" />
                <p className="hero-p-icon">Wsparcie po wdrożeniu</p>
              </div>
            </div>
          </RevealingSections>
        </div>
      </div>

      <RevealingSections>
        <Image
          src={ROB}
          alt="Robert"
          loeading="lazy"
          className="lg:hidden max-h-[60rem] w-auto mx-auto max-sm:max-h-[40rem] justify-self-end"
        />
      </RevealingSections>

      <RevealingSections>
        <Image
          src={ROB}
          loading="lazy"
          alt="Robert"
          className="absolute bottom-0 max-h-[70%] w-auto right-[2%] max-2xl:max-h-[60%] max-2xl:right-[0%] -z-10 max-lg:max-h-[30%] max-md:max-h-[25%] max-lg:right-[50%] max-lg:translate-x-1/2 max-sm:z-10 max-lg:hidden"
        />
      </RevealingSections>
      <Image
        src={KVgrad}
        fill
        loading="lazy"
        className="absolute -z-20 bgpath shadow_light kv max-[475px]:hidden object-cover object-center blur-[2px]"
        alt="Tworzenie stron internetowych biuro grabcode studio robert grabowski Konin Poznan Warszawa Legionowo"
      />
      <Image
        src={KVmobgrad}
        fill
        loading="lazy"
        className="absolute -z-20 bgpath shadow_light kv min-[476px]:hidden object-cover object-center"
        alt="Tworzenie stron internetowych biuro grabcode studio robert grabowski Konin Poznan Warszawa Legionowo"
      />
    </div>
  );
}

export default Hero;
