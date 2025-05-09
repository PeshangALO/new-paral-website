'use client';

import { motion } from 'framer-motion';
import { History } from 'lucide-react';
import SectionHeader from "@/components/Common/SectionHeader";
import AnimatedBox from '@/components/AnimatedBox/AnimatedBox';


export default function HistorySection() {
  return (
    <motion.section
      id="history"
      className="flex flex-col gap-4 ml-4 mr-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >



      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="flex items-center gap-2">
            <History className="w-8 h-8 text-black dark:text-white" />
            <h2 className="text-2xl font-normal text-black dark:text-white">
              Historien vår
            </h2>
        </div>
      <motion.p
        className="mt-2 text-3xl md:text-4xl text-black dark:text-gray-300 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        >
          <AnimatedBox><span className="font-bold">Paral Dynamic</span></AnimatedBox> ble startet med et ønske om å gjøre teknologi mer <span>tilgjengelig</span> og <span>meningsfull.</span>
        
      </motion.p>
          </div>

      <motion.p
        className="mt-4 text-black dark:text-gray-300 text-lg max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Vi bygger digitale løsninger som gjør hverdagen enklere – i helse, industri, energi og mer.
      </motion.p>
      <button
            type="button"
            onClick={() => {
              document.getElementById("kontakt-oss")?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="discover more paral dynamic projects"
            className="flex gap-3 w-auto items-center place-self-end bg-white border-2 border-black rounded-lg px-6 py-3 text-black transition-all duration-[200ms] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-white dark:border-white"
            > Ta kontakt
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
    </motion.section>
  );
}
