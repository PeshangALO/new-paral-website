"use client";
import React, { useRef } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import {ArrowLeft, ArrowRight} from 'lucide-react'

const Feature = () => {
 return (
    <section id="tjenester" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-10 lg:gap-16">
          {/* Left Side: Title */}
          <div className="flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-black dark:text-white text-center">
              Våre tjenester
            </h2>

          </div>
          
          {/* Right Side: Features Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {featuresData.map((feature, key) => (
                <div key={key} className="w-full">
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
