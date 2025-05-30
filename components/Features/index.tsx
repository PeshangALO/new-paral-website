"use client";
import React, { useRef } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import {ArrowLeft, ArrowRight} from 'lucide-react'

const Feature = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="tjenester" className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side: Title */}
          <div className=" flex-col flex justify-start">

              <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white text-center lg:text-right">Våre tjenester</h2>
              <p className="dark:text-white text-center lg:self-end lg:text-right text-black lg:w-3/5 text-xl"> Vi tilbyr tjenester innenfor en rekker forskjellige IT-sjangere.
              </p> 
          
          </div>

          {/* Right Side: Carousel */}
          <div className="lg:w-2/3 w-full">
            {/* Scroll Buttons */}
            <div className="flex justify-between">
            <button
              onClick={scrollLeft}
              className=" bg-primary text-white p-2 rounded-md shadow-md"
            >
             <ArrowLeft></ArrowLeft>
            </button>
            <button
              onClick={scrollRight}
              className=" bg-primary text-white p-2 rounded-md shadow-md"
            >
             <ArrowRight></ArrowRight>
            </button>
            </div>


            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-4 overflow-x-auto scroll-smooth pr-8 py-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featuresData.map((feature, key) => (
                <div key={key} className=" w-72 flex-shrink-0">
                  <SingleFeature feature={feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
