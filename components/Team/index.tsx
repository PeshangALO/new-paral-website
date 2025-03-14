"use client";

import teamMembers from "./teamData";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="mx-auto w-4/5 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <SectionHeader 
            headerInfo={{
              title: "MØT VÅRT TEAM",
              subtitle: "Møt vårt team",
              description: "Vi er en gjeng med hardtarbeidende teknologi entusiaster, som er ute etter å utvikle et godt produkt for deg!"
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
          {teamMembers.map((member, index) => (
                <motion.div
                variants={{
                    hidden: {
                      opacity: 0,
                      y: -10,
                    },
          
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2, 
                        duration: 0.5
                      }
                    }),
                  }}
                  custom={index}
                  initial="hidden" 
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileInView="visible"
                key={member.name}
                className="border-2 h-[30rem] dark:border-strokedark dark:border dark:bg-blacksection rounded-lg shadow-sm w-full max-w-xs overflow-hidden"
                >
              <div className="w-full relative overflow-hidden h-96">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={384}
                    height={384}
                    className="w-96 h-auto object-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center  text-4xl font-semibold text-gray-500">
                    {member.name}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-base dark:text-white text-black">{member.name}</h3>
                        <p className="text-sm mb-2">{member.role}</p>
                    </div>
                    <div className="">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          className="text-muted-foreground hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-4 w-4 border border-current rounded-full" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      )}
                    </div>
                </div>
                <p className="text-xs mb-3">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}