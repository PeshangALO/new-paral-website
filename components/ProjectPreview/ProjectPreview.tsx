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
        hidden: { x: -100, opacity: 0 },
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
        hidden: { x: 200, opacity: 0 },
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
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4">
      {/* For odd items (isEven=false): Image stacked on mobile, side-by-side on desktop */}
      {!isEven ? (
        <>
          <motion.div 
            className="overflow-hidden grid bg-white shadow-xl rounded-2xl p-5 md:p-10 mb-8 md:mb-0 w-full md:w-2/5"
            ref={ref}
            variants={leftItemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
<div className="place-self-center md:w-96">
  <Image
    src={projectPreviewInfo.src}
    alt={`Preview image of paral project ${projectPreviewInfo.title}`}
    width={1200}
    height={1200}
    className="transform scale-100 md:scale-150 md:translate-x-1/4 lg:translate-x-1/2 w-full md:w-auto"
  />
</div>
          </motion.div>
          
          <div className="md:ml-8 flex flex-col gap-4 w-full md:w-3/5">
            <div className="place-self-start">
              <Image
                src={projectPreviewInfo.companyLogo}
                alt={`${projectPreviewInfo.title} Logo`}
                width={projectPreviewInfo.width ?? 80}
                height={projectPreviewInfo.height ?? 80}
              />
            </div>
            <div>   
              <TypingEffect text={projectPreviewInfo.description1}/>
            </div>
            {projectPreviewInfo.featureList && (
              <div className="my-2 md:my-4">
                <h4 className="font-semibold mb-2">{projectPreviewInfo.title} ønsket en programvare som:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black">
                  {projectPreviewInfo.featureList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>   
              <TypingEffect text={projectPreviewInfo.description2}/>
            </div>

          </div>
        </>
      ) : (
        // For even items - reverse order on mobile
        <div className="flex flex-col-reverse md:flex-row w-full">            
          <div className="md:mr-8 flex flex-col gap-4 mt-8 md:mt-0 w-full md:w-3/5">
        <Image
                src={projectPreviewInfo.companyLogo}
                alt={`${projectPreviewInfo.title} Logo`}
                width={projectPreviewInfo.width ?? 50}
                height={projectPreviewInfo.height ?? 50}
              />
            <div>   
              <TypingEffect text={projectPreviewInfo.description1}/>
            </div>
            <div>   
              <TypingEffect text={projectPreviewInfo.description2}/>
            </div>
            <div>   
              <TypingEffect text={projectPreviewInfo.description3}/>
            </div>
            {projectPreviewInfo.featureList && (
              <div className="my-2 md:my-4">
                <h4 className="font-semibold mb-2">Hvordan vi løste det:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black">
                  {projectPreviewInfo.featureList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <motion.div 
            className="overflow-hidden grid bg-white shadow-xl rounded-2xl p-5 md:p-5 w-full md:w-2/5"
            ref={ref}
            variants={rightItemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
{/*             <div className="place-self-start">
            <Image
                src={projectPreviewInfo.companyLogo}
                alt={`${projectPreviewInfo.title} Logo`}
                width={projectPreviewInfo.width ?? 50}
                height={projectPreviewInfo.height ?? 50}
              />
            </div> */}
<div className="place-self-center md:w-96">
  <Image
    src={projectPreviewInfo.src}
    alt={`Preview image of paral project ${projectPreviewInfo.title}`}
    width={1200}
    height={1200}
    className="transform scale-100 md:scale-150 md:-translate-x-1/2 w-full md:w-auto"
  />
</div>
          </motion.div>
        </div>
      )}
    </div>
  );
}