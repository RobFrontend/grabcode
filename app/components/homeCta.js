import Link from "next/link";
import QUOTE from "@/public/logo2NewWhite.png";
import Image from "next/image";

function HomeCta() {
  return (
    <section className="bg-[#1d3557] text-[#f8f9fa]">
      <div className="container">
        <h2>Zacznijmy Twój projekt</h2>
        <div className="flex gap-8 justify-between px-4 items-center max-md:flex-col-reverse">
          <div>
            <h3 className="mb-8 mt-6">
              Chcesz strony, która naprawdę<br></br>pracuje na Twój biznes?
            </h3>
            <p>
              Napisz do mnie i zobacz, jak może wyglądać Twoja nowa strona
              internetowa.
            </p>
            <Link
              className="btn w-fit inline-flex items-center text-[var(--font-color)] mt-12"
              href="/kontakt#formularz-kontaktowy"
            >
              Darmowa wycena
            </Link>
          </div>
          <Image
            alt="dobre strony"
            src={QUOTE}
            className="max-h-[25rem] w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeCta;
