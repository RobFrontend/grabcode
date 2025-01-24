import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-12">
        <Link href="/">Strona Główna</Link>
        <Link href="#services">Usługi</Link>
        <Link href="/">Dlaczego my</Link>
        <Link href="/">Kontakt</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
