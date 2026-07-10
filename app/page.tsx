"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact/Contact";
import { ReachUs } from "@/components/sections/ReachUs/ReachUs";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Hero } from "@/components/sections/Hero/Hero";
import { MobileArea } from "@/components/sections/MobileArea/MobileArea";
import { Services } from "@/components/sections/Services/Services";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <MobileArea />
        <ReachUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
