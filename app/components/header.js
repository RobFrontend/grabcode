import Image from "next/image";
import Navigation from "./navigation";
import IconWhite from "@/public/logowhiteround.png";
import Link from "next/link";
import Headerreveal from "./headerreveal";
import MobileNav from "./mobileNav";

function Header() {
  return (
    <Headerreveal>
      <div className="flex justify-between items-center navigation ">
        <Link href="/">
          <Image
            src={IconWhite}
            alt="Logo GrabCode Studio tworzenie stron internetowych Robert Grabowski Konin Poznan Warszawa Legionowo"
            className="nav-logo"
          />
        </Link>
        <div className="max-[840px]:hidden">
          <Navigation />
        </div>
        <div className="min-[841px]:hidden">
          <MobileNav />
        </div>
      </div>
    </Headerreveal>
  );
}

export default Header;
