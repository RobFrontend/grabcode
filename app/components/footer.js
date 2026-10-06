import Link from "next/link";
import Logotheme from "./logotheme";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbPhone } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import CookieSettingsButton from "./CookieButton";

function Footer() {
  return (
    <footer className="mt-20 max-2xl:mx-8">
      <div className="flex gap-8 container justify-between max-md:grid max-md:grid-cols-2 max-md:gap-16 max-md:justify-items-center max-sm:grid-cols-1 max-sm:justify-items-start">
        <Link href="/">
          <Logotheme />
        </Link>
        <div>
          <p className="font-semibold mb-5 opacity-80">Menu</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/">Strona Główna</Link>
            </li>
            <li>
              <Link href="/uslugi">Usługi</Link>
            </li>
            <li>
              <Link href="/realizacje">Realizacje</Link>
            </li>
            <li>
              <Link href="/cennik">Cennik</Link>
            </li>
            <li>
              <Link href="/o-mnie">O mnie</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-5 opacity-80">Kontakt</p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <MdOutlineEmail className="h-8 w-8" />
              kontakt@grabcode.pl
            </li>
            <li className="flex gap-2 items-center">
              <TbPhone className="h-8 w-8" />
              609 843 405
            </li>
            <li className="flex gap-2 items-center">
              <IoLocationOutline className="h-8 w-8" />
              Cała Polska
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-5 opacity-80">Obserwuj</p>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61573678295885"
              target="_blank"
            >
              <FaFacebook className="h-10 w-10" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/grabcode-studio-robert-grabowski/"
              target="_blank"
            >
              <FaLinkedin className="h-10 w-10" />
            </Link>
            <Link
              href="https://www.instagram.com/grabcodestudio/"
              target="_blank"
            >
              <FaInstagram className="h-10 w-10" />
            </Link>
          </div>
          <p className="font-semibold mb-5 opacity-80 mt-16">Informacje</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/polityka-prywatnosci" className="font-normal">
                Polityka prywatności
              </Link>
            </li>
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xl opacity-50 p-8 pt-16">
        &copy;{new Date().getFullYear()} GrabCode Studio<br></br>Robert
        Grabowski
      </p>
    </footer>
  );
}

export default Footer;
