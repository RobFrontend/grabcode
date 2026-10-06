import Verk from "@/public/trustVerk.png";
import Strona from "@/public/trustStrona.png";
import Biceps from "@/public/trustBiceps.png";
import Uks from "@/public/trustUks.png";
import Image from "next/image";
import LogoBBtheme from "./logoBBtheme";
import LogoRobtheme from "./logoRobtheme";

function TrustBarClients() {
  return (
    <section className="mb-12">
      <div className="container">
        <h2 className="max-sm:hidden">
          Wybrane marki, z którymi współpracowałem
        </h2>
        <h2 className="sm:hidden">Współpracowałem m.in. z:</h2>
        <div className="grid grid-cols-3 gap-12 justify-items-center items-center mt-20 max-sm:grid-cols-2">
          <Image alt="klient" src={Verk} className="max-h-[10rem] w-auto" />
          <Image alt="klient" src={Uks} className="max-h-[10rem] w-auto" />
          <LogoBBtheme />
          <Image alt="klient" src={Strona} className="max-h-[10rem] w-auto" />
          <LogoRobtheme />
          <Image alt="klient" src={Biceps} className="max-h-[10rem] w-auto" />
        </div>
      </div>
    </section>
  );
}

export default TrustBarClients;
