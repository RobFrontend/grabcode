import Image from "next/image";
import Rob from "@/public/rob.png";
import Link from "next/link";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";

function HomeAbout() {
  return (
    <section id="dlaczegoja">
      <div className="container">
        <h2>O mnie</h2>
        <div className="whyme p-8 max-sm:p-4">
          <div className="portfolio-box grid">
            <Image
              src={Rob}
              alt="portoflio projekty grabcode studio robert grabowski tworzenie stron internetowych Konin Poznan Warszawa Legionowo"
              className="max-h-[90%] w-auto self-end"
            />
          </div>
          <div className="grid gap-4 relative">
            <div>
              <h3 className="mb-8">Cześć, jestem Robert.</h3>
              <p>
                Pomagam firmom i markom osobistym tworzyć strony, które
                wyglądają profesjonalnie, działają szybko i realnie wspierają
                sprzedaż. Łączę design, technologię i praktyczne podejście do
                biznesu, żeby tworzyć strony z sensem - nie tylko
                &ldquo;ładne&ldquo;.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 items-center justify-center my-8 max-sm:grid-cols-2">
              <div className="flex gap-4">
                <SiNextdotjs className="h-12 w-12" />
                <p>Next.js</p>
              </div>
              <div className="flex gap-4 ">
                <FaReact className="h-12 w-12 " />
                <p>React</p>
              </div>
              <div className="flex gap-4 ">
                <IoStatsChart className="h-12 w-12 " />
                <p>SEO</p>
              </div>
              <div className="flex gap-4 ">
                <SiTailwindcss className="h-12 w-12 " />
                <p>Tailwind</p>
              </div>
              <div className="flex gap-4 ">
                <LuNotebookText className="h-12 w-12 " />
                <p>Formularze</p>
              </div>
              <div className="flex gap-4 ">
                <HiMiniArrowRightStartOnRectangle className="h-12 w-12 " />
                <p>Wdrożenia</p>
              </div>
            </div>

            <Link href="/o-mnie" className="btn">
              Więcej o mnie
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
