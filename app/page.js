import Footer from "./components/footer";
import Hero from "./components/hero";
import Kontakt from "./components/kontakt";
import RevealingSections from "./components/revealingSections";

import Services from "./components/services";

import Whyus from "./components/whyus";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <RevealingSections>
          <Services />
        </RevealingSections>
        <RevealingSections goinUp={true}>
          <Whyus />
        </RevealingSections>
        <RevealingSections goinUp={true}>
          <Kontakt />
        </RevealingSections>
        <RevealingSections goinUp={true}>
          <Footer />
        </RevealingSections>
      </main>
    </>
  );
}
