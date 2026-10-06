import Image from "next/image";
import KV from "@/public/kvnewopacity.png";
import Link from "next/link";
function NotFound() {
  return (
    <>
      <div className="min-h-[70vh] overflow-hidden relative kv grid items-center px-[128px] max-2xl:px-[80px] max-xl:px-[48px] py-32">
        <Image
          src={KV}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="kv"
          className="-z-10  blur-[2px]"
        />
        <div>
          <h1 className="heroh1 mb-20 text-center">
            Wygląda na to, że ta strona nie istnieje
          </h1>
          <div className="text-center">
            <Link href="/" className="btn btn-box btn-hero">
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
