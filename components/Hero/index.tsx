"use client";
import Image from "next/image";
import { useState } from "react";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox"

import { getAssetPath } from "@/utils/assets";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="lg:w-1/2">
              <h1 className="font-bold tracking-tighter text-4xl sm:text-6xl lg:justify-self-start justify-self-center :text-6xl/none dark:text-black text-white">
            <AnimatedBox>Paral Dynamic</AnimatedBox>
              </h1>
              <p className="dark:text-white text-black py-6">
              Hos Paral Dynamic utvikler vi løsninger som er spesialtilpasset din virksomhet, slik at du får akkurat det du trenger for å optimalisere arbeidsprosesser, 
              øke effektiviteten og nå dine mål. Vi er her for å bygge programvaren som gjør en forskjell for deg.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src={getAssetPath("/images/hero/hero-black.svg")}
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src={getAssetPath("/images/hero/hero-white.svg")}
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
