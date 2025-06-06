"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox"
import NeoButton from "../NeoButton";

import { getAssetPath } from "@/utils/assets";

const Hero = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="flex flex-col">
          <div className="py-10 flex flex-col">
            <h1 className="font-bold tracking-tighter text-3xl sm:text-4xl lg:text-7xl m-6 text-center dark:text-black text-white">
              <AnimatedBox>Digitale løsninger for ekte problemer</AnimatedBox>
            </h1>
            <div className="flex flex-col self-center max-w-3xl mx-10">
              <p className="dark:text-white text-black text-base py-6 md:text-xl text-center">
                Vi hjelper selskaper å forenkle komplekse prosesser med skreddersydd teknologi. Fra idé til ferdig produkt – med samarbeid i sentrum
              </p>
              <div className="flex mr-11 justify-end">
                <NeoButton
                  text="Book et møte"
                  onClick={() => router.push('/book-mote')}
                  withIcon={true}
                />
              </div>
            </div>
          </div>
          {/* 
            <div className="hidden md:w-1/2 lg:block">
                <div className="relative aspect-[700/444] w-full">
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
              </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
