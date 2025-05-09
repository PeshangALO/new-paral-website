import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import TeamSection from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Paral Dynamic | Eksperter på AI, digitalisering og programvareutvikling",
  description: "Paral Dynamic utvikler løsninger spesialtilpasset din virksomhet for å optimalisere arbeidsprosesser, øke effektiviteten og nå dine mål. Vi er her for å bygge programvaren som gjør en forskjell for deg!",
  icons: {
    icon: "/images/favicon.ico",
  },
};


export default function Home() {
  return (
    <main>
      <Hero />
      {/*       <CTA /> */}
      {/*       <FAQ /> */}
      <Brands />
      <Feature />
      {/*       <About /> */}
      {/*       <FeaturesTab /> */}
      {/*       <FunFact /> */}
      {/*       <Integration /> */}
      <Testimonial />
      {/*  WIP:  <TeamSection /> */}
      {/*       <Pricing /> */}
      <Contact />
      <div id="calendly">
      <CalendlyEmbed />
      </div>
      {/*       <Blog /> */}
    </main>
  );
}
