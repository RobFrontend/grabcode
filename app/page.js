import Footer from "./components/footer";
import Hero from "./components/hero";
import HomeAbout from "./components/homeAbout";
import HomeCta from "./components/homeCta";
import HomeRealizations from "./components/homeRealizations";
import RevealingSections from "./components/revealingSections";

import Services from "./components/services";
import TrustBar from "./components/trustBar";
import TrustBarClients from "./components/trustBarClients";

import Whyus from "./components/whyus";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>

      <main>
        <RevealingSections>
          <TrustBar />
        </RevealingSections>
        <RevealingSections>
          <Services />
        </RevealingSections>
        <RevealingSections>
          <HomeRealizations />
        </RevealingSections>
        <RevealingSections goinUp={true}>
          <HomeAbout />
        </RevealingSections>
        <RevealingSections goinUp={true}>
          <Whyus />
        </RevealingSections>

        <RevealingSections delay={100}>
          <TrustBarClients />
        </RevealingSections>

        <RevealingSections>
          <HomeCta />
        </RevealingSections>
      </main>
    </>
  );
}
