"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import { motion } from "framer-motion";
import ProjectMiniPreview from "./ProjectMiniPreview";
import NeoButton from "@/components/NeoButton";

const Brands2 = () => {
    // Animation variants for stagger effect
const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return(
        <section className="py-20 lg:py-25 xl:py-30 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0z-10" />
            
            <div className="mx-auto px-4 max-w-7xl md:px-8 xl:px-0">
                {/* Header Section */}
                <motion.div
                    className="text-start mx-4 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white tracking-tighter"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Prosjekter
                    </motion.h2>
                    <motion.p 
                        className="dark:text-gray-300 text-gray-600 text-xl lg:text-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Sjekk ut noen av prosjektene vi har samarbeidet med!
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 mx-2 sm:mx-19 md:mx-4 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                >
                    {brandData.map((brand, key) => (
                        <motion.div
                            key={key}
                            variants={itemVariants}
                        >
                            <ProjectMiniPreview brand={brand} />
                        </motion.div>
                    ))}
                </motion.div>


                <motion.div
                    className="text-center flex flex-col items-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-black dark:text-white mb-3">
                        Vil du samarbeide med oss?
                    </p>
                    <div>
                <NeoButton text="Kontakt oss" withIcon={false} onClick={scrollToContact}/>
                     </div>
                </motion.div>
            </div>
        </section>
    )


}

export default Brands2