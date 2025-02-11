import React from "react";
import { About, Features, Footer, Hero, Services } from "@/sections";
import Nav from "@/components/Nav";
import Cta from "@/sections/Cta";
import Faq from "@/sections/Faq";
import Team from "@/sections/Team";

const Home = () => {
  return (
    <main className="relative">
      <section className="">
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Cta />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Team />
      </section>

      <section>
        <Faq />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
