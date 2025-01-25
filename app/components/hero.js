import Image from "next/image";
import KV from "@/public/kv.webp";
import KVgrad from "@/public/kvgrad.webp";
import KVmobgrad from "@/public/kvmobgrad.webp";
import Header from "./header";

function Hero() {
  return (
    <div className="h-screen">
      <Header />
      <div className="grid max-w-[50%] h-full items-center">
        <div className="px-8 pb-8 borderr">
          <div>
            <h1 className="mb-8 heroh1">
              Profesjonalne strony internetowe,<br></br> które sprzedają i
              budują wizerunek Twojej marki
            </h1>
            <h2 className=" heroh2">
              Od pomysłu do gotowej strony<br></br>- zadbamy o każdy szczegół,
              aby Twój biznes działał online efektywnie.
            </h2>
          </div>
          <div className="flex gap-8 py-12 justify-center ">
            <button className="btn1 btn-box">Darmowa konsultacja</button>
            <button className="btn btn-box">Sprawdź ofertę</button>
          </div>
        </div>
      </div>

      <Image
        src={KVgrad}
        fill
        objectFit="cover"
        objectPosition="center"
        className="-z-10 bgpath shadow_light kv"
        alt="kv"
      />

      {/* <Image
    src={KV}
    fill
    objectFit="cover"
    objectPosition="center"
    className="-z-10 bgpath"
    alt="kv"
  />
  <Image
    src={KV}
    fill
    objectFit="cover"
    objectPosition="center"
    className="-z-20 blur-md opacity-40"
    alt="kv"
  /> */}
    </div>
  );
}

export default Hero;
