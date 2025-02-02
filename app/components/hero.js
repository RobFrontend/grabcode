import Image from "next/image";
import KVgrad from "@/public/kvgrad.webp";
import KVmobgrad from "@/public/kvmobgrad.webp";
import Header from "./header";
import Link from "next/link";

function Hero() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="h-screen grid max-w-[50%]   items-center max-[1480px]:max-w-[65%] max-[950px]:max-w-[80%] max-[800px]:max-w-[100%] max-sm:items-start">
        <div className="px-8 pb-8 borderr max-sm:mt-[96px]">
          <div>
            <h1 className="mb-8 heroh1">
              <span>
                Robert Grabowski<br></br>
              </span>
              GrabCode Studio
            </h1>

            <h2 className="mb-4 heroh2">
              Profesjonalne strony internetowe,<br></br> które sprzedają i
              budują wizerunek Twojej marki
            </h2>
            <h3 className="heroh2 heroh3">
              Od pomysłu do gotowej strony<br></br>- zadbam o każdy szczegół,
              aby Twój biznes działał online efektywnie.
            </h3>
          </div>
          <div className="flex gap-8 py-12 justify-center max-[550px]:flex-col max-[550px]:text-center">
            <Link href="#kontakt" className="btn1 btn-box">
              Bezpłatna konsultacja
            </Link>
            <Link href="#uslugi" className="btn btn-box">
              Sprawdź ofertę
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={KVgrad}
        fill
        objectFit="cover"
        objectPosition="center"
        className="-z-10 bgpath shadow_light kv max-[475px]:hidden"
        alt="Tworzenie stron internetowych biuro grabcode studio robert grabowski Konin Poznan Warszawa Legionowo"
      />
      <Image
        src={KVmobgrad}
        fill
        objectFit="cover"
        objectPosition="center"
        className="-z-10 bgpath shadow_light kv min-[476px]:hidden"
        alt="Tworzenie stron internetowych biuro grabcode studio robert grabowski Konin Poznan Warszawa Legionowo"
      />
    </div>
  );
}

export default Hero;
