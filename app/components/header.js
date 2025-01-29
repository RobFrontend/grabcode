import Image from "next/image";
import Navigation from "./navigation";
import IconWhite from "@/public/logowhiteround.png";
import Link from "next/link";
import Headerreveal from "./headerreveal";
import MobileNav from "./mobileNav";
import ThemeToggle from "./ThemeToggle";

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
        <div className="max-[840px]:hidden flex gap-12">
          <Navigation />
          <ThemeToggle />
        </div>
        <div className="min-[841px]:hidden flex gap-8">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </Headerreveal>
  );
}

export default Header;
