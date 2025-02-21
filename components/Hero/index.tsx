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
            <div className=" md:w-1/2">
              <AnimatedBox>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-white">
              Paral Dynamic
              </h1>
              </AnimatedBox>
              <p className="dark:text-white text-black">
                Vi er en gjeng med entusiastiske utviklere, som ønsker å hjelpe deg med å finne digitale løsninger for dine behov!
                Vi spesialiserer oss på å forvandle ideer til kraftfulle digitale løsninger, med tjenester innen avansert AI, maskinlæring og big data-analyser.

              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-lg border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-black focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="bg-white border-2 border-black rounded-lg px-6 py-3 text-black transition-all duration-[200ms] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
                    >
                      Kontakt Oss
                    </button>
                  </div>
                </form>

              </div>
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
