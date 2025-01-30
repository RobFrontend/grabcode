import Navigation from "./navigation";

import Link from "next/link";
import Headerreveal from "./headerreveal";
import MobileNav from "./mobileNav";
import ThemeToggle from "./ThemeToggle";
import Logotheme from "./logotheme";

function Header() {
  return (
    <Headerreveal>
      <div className="flex justify-between items-center navigation ">
        <Link href="/">
          <Logotheme />
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
