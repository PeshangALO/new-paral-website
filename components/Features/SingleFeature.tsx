import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/assets";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, information, lucideIcon } = feature;
  const LucideIcon = lucideIcon;

  return (
    <>
      <motion.div
        className="animate_top h-full z-40 rounded-lg border border-white p-7.5 
        shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark xl:p-12.5 backdrop-blur-lg"
      >
          <div className="flex items-center justify-center">
           {/*  <Image src={getAssetPath(icon)} width={72} height={72} alt="title" /> */}
               <div>
      {LucideIcon && (
        <LucideIcon className="w-16 h-16 dark:text-white text-black" />
      )}
      {/* Rest of your component */}
    </div>
          </div>
          <h3 className=" mb-5 mt-7.5 text-center text-xl font-semibold  text-black dark:text-white xl:text-itemtitle">
            {title}
          </h3>

        <p className="text-black text-center dark:text-white">{information}</p>

      </motion.div>
    </>
  );
};

export default SingleFeature;
