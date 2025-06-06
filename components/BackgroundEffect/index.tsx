'use client'
import Image from "next/image"
import { getAssetPath } from "@/utils/assets";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Lines = () => {
  const { scrollY } = useScroll();
    // Transform scroll values for different effects
  const skewX = useTransform(scrollY, [0, 800], [-15, 0]);
  const translateX = useTransform(scrollY, [0, 600], [0, -1200]);

  const rightSlideX = useTransform(scrollY, [0, 2500], [0, 1000]);
const leftSlideX = useTransform(scrollY, [0, 2500], [0, -1000]);
const imageSlideX = useTransform(scrollY, [0, 200], [0,0]);
  return (
    <div className="fixed -z-20 h-full w-full">

      <motion.div 
        className="absolute -z-50 h-full w-full bg-gray-300 dark:bg-gray-800"
        style={{
          clipPath: 'polygon(0% 0, 70% 0, 50% 100%, 0% 100%)',
          x: leftSlideX
        }}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />

      <motion.div 
        className="absolute -z-100 h-full w-full bg-gray-200 dark:bg-gray-950"
        style={{
          clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)',
          x: rightSlideX
        }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
      
      {/* Animated diagonal dividing line */}
      <motion.div 
        className="absolute h-full w-[3px] dark:bg-gray-600 bg-white"
        style={{
          left: '85%',
          skewX,
          x: translateX,
          transformOrigin: 'center'
        }}
        initial={{opacity: 0,}}
        animate={{ scaleY: 1, opacity: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
      </motion.div>
    </div>
  );
};

export default Lines;