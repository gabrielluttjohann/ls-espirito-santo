import React from "react";
import { About, Features, Hero, Services } from "@/sections";
import Cta from "@/sections/Cta";
import Faq from "@/sections/Faq";
import Team from "@/sections/Team";

const Home = () => {
  return (
    <main className="relative">
        <Hero />
        <About />
        <Services />
        <Cta />
        <Features />
        <Team />
        <Faq />
    </main>
  );
};

export default Home;
