'use client'

import Image from "next/image";
import Link from "next/link";
import { ProjectPreviewProps } from "@/types/projectPreviewProps";
import { motion, useInView } from 'framer-motion'
import { TypingEffect } from "./ProjectDescription";
import NeoButton from "../NeoButton";
import { useRef } from "react";

interface ProjectPreviewComponentProps {
    projectPreviewInfo: ProjectPreviewProps;
    isEven?: boolean;
}

export default function ProjectPreview({
  projectPreviewInfo,
  isEven = false
}: ProjectPreviewComponentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true, amount: 0.2})

  const leftItemVariants = {
        hidden: { opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 50,
                damping: 20
            }
        }
    };
    const rightItemVariants = {
        hidden: { opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 50,
                damping: 20
            }
        }
    };

  return (
    <div className="flex flex-col-reverse lg:flex-row px-4">
      {/* For odd items (isEven=false): Image stacked on mobile, side-by-side on desktop */}
      {!isEven ? (
        <>
          <motion.div 
            className="grid p-5 md:p-10 mb-8 md:mb-0 w-full "
            ref={ref}
            variants={leftItemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >

  <Image
    src={projectPreviewInfo.src}
    alt={`Preview image of paral project ${projectPreviewInfo.title}`}
    width={1200}
    height={1200}
    className="place-self-center lg:scale-125"
    />

          </motion.div>
          <div className="md:ml-8 flex flex-col gap-5 w-full">
            <div className="flex justify-between">            
              <div className="flex place-self-start">
              <Image
                src={projectPreviewInfo.companyLogo}
                alt={`${projectPreviewInfo.title} Logo`}
                width={projectPreviewInfo.width ?? 80}
                height={projectPreviewInfo.height ?? 80}
              />

              </div>

            {projectPreviewInfo.description3 && (
              <div className="place-self-center">
                <h2 className=" text-xl font-bold mr-10 lg:mr-0 text-red-700">{projectPreviewInfo.description3}</h2>
              </div>
            )}
            </div>
            {projectPreviewInfo.id === 3 && (
                <div> 
                  <h4 className="text-md">For mer informasjon, kontakt Tor Einar: <span className="font-bold text-black">kontakt@corecapacity.com</span></h4>
                </div>
              )}
            <div>   
              <TypingEffect text={projectPreviewInfo.description1}/>
            </div>
            <h2 className="text-xl font-normal tracking-tighter dark:text-white text-black">{projectPreviewInfo.description2}</h2>


            {projectPreviewInfo.featureList && (
              <div className="my-2">
                <h4 className="font-semibold mb-2">Vår løsning inneholder:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black dark:text-white">
                  {projectPreviewInfo.featureList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      ) : (
        // For even items - reverse order on mobile
        <div className="flex flex-col lg:flex-row w-full gap-7">            
          <div className="md:ml-8 flex flex-col gap-4 w-full dark:text-white">
        <Image
                src={projectPreviewInfo.companyLogo}
                alt={`${projectPreviewInfo.title} Logo`}
                width={projectPreviewInfo.width ?? 50}
                height={projectPreviewInfo.height ?? 50}
              />
            <div>   
              <TypingEffect text={projectPreviewInfo.description1}/>
            </div>
            {projectPreviewInfo.featureList && (
              <div className="my-2 md:my-4">
                <h4 className="font-semibold mb-2">Hvordan vi løste det:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black dark:text-white">
                  {projectPreviewInfo.featureList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <motion.div 
            className="grid p-5 md:p-5"
            ref={ref}
            variants={rightItemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >

  <Image
    src={projectPreviewInfo.src}
    alt={`Preview image of paral project ${projectPreviewInfo.title}`}
    width={1300}
    height={1300}
    className=""
  />
          </motion.div>
        </div>
      )}
    </div>
  );
}