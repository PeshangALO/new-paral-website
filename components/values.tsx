'use client'

import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";
import SectionHeader from "@/components/Common/SectionHeader";

export default function ValuesSection() {

  const values = [
    "• Samarbeid og tillit",
    "• Åpenhet og ærlighet",
  ];

  const vision = [
    "• Brukersentrert utvikling",
    "• Kvalitet i alle ledd",
  ]

  const mission = [
    "• Teknologisk dyktighet",
    "• Jobbe med kunder fra idé og prototype til ferdig løsning"
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  // Card data
  const cards = [
    {
      title: "Misjon",
      icon: <Target className="w-8 h-8 text-black dark:text-gray-300" />,
      content: "Å utvikle praktiske og brukervennlige løsninger på komplekse utfordringer.",
      listcontent: mission.map((value, index) => (
        <li key={index} className="flex items-center gap-2 mb-2 ">

          {value}
        </li>
      ))
    },
    {
      title: "Visjon",
      icon: <Eye className="w-8 h-8 text-black dark:text-gray-300" />,
      content: "Å bli ledende nordisk utviklingspartner for digital innovasjon – med fokus på bærekraft, innsikt og brukervennlighet.",
      listcontent: vision.map((value, index) => (
        <li key={index} className="flex items-center gap-2 mb-2">

          {value}
        </li>
      ))
    },
    {
      title: "Verdier",
      icon: <HeartHandshake className="w-8 h-8 text-black dark:text-gray-300" />,
      content: "Paral Dynamic jobber etter disse kjerneverdiene. Vi streber etter å bygge tillitsfulle relasjoner.",
      listcontent: values.map((value, index) => (
        <li key={index} className="flex items-center gap-2 mb-2">

          {value}
        </li>
      ))
      
    }
  ];

  return (
    <section
      id="values"
      className="flex-col relative py-6 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
    <div className="flex flex-col">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold text-black dark:text-white">
          Verdier og visjon
        </h2>
      </div>
      <motion.p
        className="mt-2 text-black dark:text-gray-300 text-lg max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Vi tror på å bygge sterke partnerskap og utvikle løsninger som er bærekraftige, brukervennlige og teknologisk avanserte. Her er våre kjerneverdier og vår visjon for fremtiden.
      </motion.p>
    </div>
      <div className="flex gap-10 relative z-10 mt-10 flex-col lg:flex-row">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className=" bg-white/70 dark:bg-black/20 rounded-2xl p-8 shadow-md flex-1 border"
          >
            <div className="flex items-center gap-3 mb-4 text-black dark:text-gray-300">
              {card.icon}
              <h4 className="text-2xl font-semibold">{card.title}</h4>
            </div>
            
          <div className="flex flex-col gap-6">
              <p className="text-gray-700 dark:text-gray-300">
                {card.content}
              </p>
              <ul className="text-gray-700 dark:text-gray-300 list-disc  list-inside pl-5">
                {card.listcontent}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}