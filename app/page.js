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
