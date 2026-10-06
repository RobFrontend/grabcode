import Link from "next/link";

function RealizationArtCta({ heading, text }) {
  return (
    <section className="bg-[#1d3557] text-[#f8f9fa]">
      <div className="container pb-10">
        <div className="grid grid-cols-[60fr_30fr] gap-8 px-4 items-center max-md:grid-cols-1">
          <div>
            <h2>{heading}</h2>

            <p>{text}</p>
          </div>
          <Link
            className="btn min-w-max inline-flex items-center text-[var(--font-color)] mt-12 max-md:w-fit"
            href="/kontakt#formularz-kontaktowy"
          >
            Umów bezpłatną konsultację
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RealizationArtCta;
