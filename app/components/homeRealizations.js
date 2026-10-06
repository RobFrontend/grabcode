import Image from "next/image";
import NORDOM from "@/public/nordom-demo-trans.png";
import BEAUTY from "@/public/beauty-demo-trans.png";
import PERSONAL from "@/public/personal-demo-trans.png";
import Link from "next/link";

function HomeRealizations() {
  return (
    <section>
      <div className="container">
        <h2>Realizacje</h2>
        <div className="grid grid-cols-3 gap-8 h-full max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <Image
                alt="Strona firmowa z branż budowlanej o tematyce budowy domów."
                src={NORDOM}
              />
              <h3>NORDOM</h3>
              <p className="mt-1 mb-2">Serwis firmowy / branża budowlana</p>
              <p>
                Nowoczesna strrona firmowa, która buduje wiarygodność i generuje
                zapytania.
              </p>
            </div>
            <Link
              href="/realizacje/branza-budowlana"
              className="btn inline-flex items-center mt-10 w-fit"
            >
              Zobacz projekt
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Image
                alt="Strona internetowa salonu beauty o tematyce brwi i rzęs, branża beauty"
                src={BEAUTY}
              />
              <h3>Lash Art</h3>
              <p className="mt-1 mb-2">Landing page / branża beauty</p>
              <p>
                Elegancki i kobiecy landing page z nastawieniem narezerwacje.
              </p>
            </div>
            <Link
              href="/realizacje/branza-beauty"
              className="btn inline-flex items-center mt-10 w-fit"
            >
              Zobacz projekt
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Image
                alt="Strona internetowa trenerki personalnej / trenera personalnego."
                src={PERSONAL}
              />
              <h3>Trener Personalny</h3>
              <p className="mt-1 mb-2">Landing page / marka osobista</p>
              <p>
                Dynamiczny landing page, który przyciąga nowych podopiecznych.
              </p>
            </div>
            <Link
              href="/realizacje/branza-trening-personalny"
              className="btn inline-flex items-center mt-10 w-fit justify-self-end"
            >
              Zobacz projekt
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeRealizations;
