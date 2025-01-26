import Hero from "./components/hero";
import Kontakt from "./components/kontakt";
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
        <Kontakt />
      </main>
    </>
  );
}
