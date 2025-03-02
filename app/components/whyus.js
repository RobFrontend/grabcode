import Image from "next/image";
import PortfolioGrabCodeStudioRobertGrabowski from "@/public/portfolio.webp";
import Link from "next/link";

function Whyus() {
  return (
    <section id="dlaczegoja">
      <div className="container">
        <h2>Dlaczego ja</h2>
        <div className="whyus p-8 max-sm:p-4">
          <div className="grid gap-4 relative">
            <div>
              <h3>1. Nowoczesne technologie:</h3>
              <p>React, Next.js, Tailwind - buduję szybko i efektywnie.</p>
            </div>
            <div>
              <h3>2. SEO i wydajność: </h3>
              <p>Twoja strona będzie szybka i widoczna w Google.</p>
            </div>
            <div>
              <h3>3. Responsywność: </h3>
              <p>Perfekcyjny wygląd na każdym urządzeniu.</p>
            </div>
            <div>
              <h3>4. Indywidualne podejście: </h3>
              <p>Każdy projekt dostosowany do Twoich potrzeb.</p>
            </div>
            <Link href="/dlaczegoja" target="_blank" className="btn">
              Warto sprawdzić
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="absolute"
            >
              <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
            </svg>
          </div>
          <div className="portfolio-box">
            <Image
              src={PortfolioGrabCodeStudioRobertGrabowski}
              alt="portoflio projekty grabcode studio robert grabowski tworzenie stron internetowych Konin Poznan Warszawa Legionowo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyus;
