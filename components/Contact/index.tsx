"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { getAssetPath } from "@/utils/assets";

const Contact = () => {
  return (
    <>
      <section id="kontakt-oss" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#020a2047] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src={getAssetPath("/images/shape/shape-dotted-light.svg")}
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src={getAssetPath("/images/shape/shape-dotted-dark.svg")}
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-8">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full p-7.5 text-center md:w-2/3 lg:w-1/2"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Ta kontakt uten forpliktelser!
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Epost
                </h3>
                <p>
                  <a href="mailto:kontakt@paral.no">kontakt@paral.no</a>
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Adresse
                </h3>
                <p>Gimlemoen 15, 4630 Kristiansand</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
