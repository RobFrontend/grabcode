import Image from "next/image";
import KV from "@/public/kv.webp";
import KVgrad from "@/public/kvgrad.webp";
import KVmobgrad from "@/public/kvmobgrad.webp";
import Hero from "./components/hero";
import Services from "./components/services";

import Whyus from "./components/whyus";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Services />
        <Whyus />
      </main>
    </>
  );
}
