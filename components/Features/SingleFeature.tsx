import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/assets";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, information } = feature;

  return (
    <>
      <motion.div
        className="animate_top h-full z-40 rounded-lg border border-white bg-black p-7.5 
        shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection xl:p-12.5"
      >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] border-solid border-2 bg-black">
            <Image src={getAssetPath(icon)} width={36} height={36} alt="title" />
          </div>
          <h3 className=" mb-5 mt-7.5 text-xl font-semibold text-white xl:text-itemtitle">
            {title}
          </h3>
        <p className="text-white">{information}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
