import Image from "next/image";
import Navigation from "./navigation";
import IconWhite from "@/public/logowhiteround.png";
import Link from "next/link";
import Headerreveal from "./headerreveal";

function Header() {
  return (
    <Headerreveal>
      <div className="flex justify-between items-center navigation ">
        <Link href="/">
          <Image src={IconWhite} alt="logo" className="nav-logo" />
        </Link>
        <Navigation />
      </div>
    </Headerreveal>
  );
}

export default Header;
