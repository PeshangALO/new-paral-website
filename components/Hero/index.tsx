"use client";
import Image from "next/image";
import { useState } from "react";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox"
import CTAButton from "@/components/UI/CTAButton";

import { getAssetPath } from "@/utils/assets";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="flex flex-col mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">

            <div className="lg:w-1/2">
              <h1 className="font-bold tracking-tighter text-4xl sm:text-6xl lg:justify-self-start justify-self-center :text-6xl/none dark:text-black text-white">
            <AnimatedBox>Digitale løsninger for ekte problemer</AnimatedBox>
              </h1>
              <p className="dark:text-white text-black py-6 text-xl">
              {/* Hos Paral Dynamic utvikler vi løsninger som er spesialtilpasset din virksomhet, slik at du får akkurat det du trenger for å optimalisere arbeidsprosesser, 
              øke effektiviteten og nå dine mål. Vi er her for å bygge programvaren som gjør en forskjell for deg. */}
               Vi hjelper selskaper å forenkle komplekse prosesser med skreddersydd teknologi. Fra idé til ferdig produkt – med samarbeid i sentrum
              </p>
            <button
            type="button"
            onClick={() => {
              document.getElementById("calendly")?.scrollIntoView({ behavior: "instant" });
            }}
            aria-label="book a meeting"
            className="flex gap-3 w-45 items-center place-self-end bg-white border-2 border-black rounded-lg px-6 py-3 text-black transition-all duration-[200ms] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-white dark:border-white"
            > Book et møte 
            <svg
              className="fill-current"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              > 
            <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
            />
            </svg>
          </button>
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
