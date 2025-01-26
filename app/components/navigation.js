import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-12 pcnav">
        <Link href="/">Strona Główna</Link>
        <Link href="#uslugi">Usługi</Link>
        <Link href="#dlaczegomy">Dlaczego my</Link>
        <Link href="#kontakt">Kontakt</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
