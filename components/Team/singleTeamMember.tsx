"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/assets";
import { TeamMember } from "@/types/teamMember";


const SingleTeamMember = ({teamMember }: {teamMember: TeamMember}) => {
    const { name, role, bio, image, social } = teamMember;

    return (
        <>
        <motion.div
                variants={{
                    hidden: {
                      opacity: 0,
                      y: -10,
                    },
/*           
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2, 
                        duration: 0.5
                      }
                    }), */
                  }}

                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileInView="visible"
                key={name}
                className="border-2 h-[30rem] dark:border-strokedark dark:border dark:bg-blacksection rounded-lg shadow-sm w-full max-w-xs overflow-hidden"
                >
              <div className="w-full relative overflow-hidden h-96">
                {image ? (
                  <Image 
                    src={image} 
                    alt={name} 
                    width={384}
                    height={384}
                    className="w-96 h-auto object-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center  text-4xl font-semibold text-gray-500">
                    {name}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-base dark:text-white text-black">{teamMember.name}</h3>
                        <p className="text-sm mb-2">{role}</p>
                    </div>
                    <div className="">
                      {social.linkedin && (
                        <Link
                          href={social.linkedin}
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
                <p className="text-xs mb-3">{bio}</p>
              </div>
            </motion.div>
        
        </>
    )
}

export default SingleTeamMember;