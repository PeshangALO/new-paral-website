import React from "react";
import { motion } from "framer-motion";
import { WorkMethod } from "@/types/workMethod";
import { ShieldCheck, } from "lucide-react";


const SingleWorkMethod = ({workMethod}: {workMethod: WorkMethod}) => {
    const { workMethodTitle, information } = workMethod;

    return (
        <>
            <motion.div 
                variants={{
                    hidden: {
                        opacity: 0,
                        x: -10
                    },
                    visible: {
                        opacity: 1,
                        x: 0
                    }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{duration: 0.4}}
            >

                <h3>{workMethodTitle}</h3>
                <p>{information}</p>
            </motion.div>
        </>
    )
}

export default SingleWorkMethod