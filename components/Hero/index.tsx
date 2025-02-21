"use client";
import Image from "next/image";
import { useState } from "react";
import AnimatedBox from '../AnimatedBox/animatedBox'

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
{/*               <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                ❤️ Solid - A Complete SaaS Web Template
              </h4> */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-white">
              Paral Dynamic
              </h1>
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
/*                       className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
 */                      className="bg-white border-2 border-black rounded-lg px-6 py-3 text-black transition-all duration-[200ms] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
                    >
                      Kontakt Oss
                    </button>
                  </div>
                </form>

              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
{/*                 <Image
                  src={getAssetPath("/images/shape/shape-01.png")}
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src={getAssetPath("/images/shape/shape-02.svg")}
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src={getAssetPath("/images/shape/shape-03.svg")}
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                /> */}
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
