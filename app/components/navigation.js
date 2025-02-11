import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-12 pcnav">
        <li>
          <Link href="/">Strona Główna</Link>
        </li>
        <li>
          <Link href="/uslugi">Usługi</Link>
        </li>
        <li>
          <Link href="/#dlaczegomy">Dlaczego my</Link>
        </li>
        <li>
          <Link href="/cennik">Cennik</Link>
        </li>
        <li>
          <Link href="/#kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
