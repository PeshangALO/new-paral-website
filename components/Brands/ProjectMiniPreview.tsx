import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/assets";
import NeoButton from "../NeoButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";


const ProjectMiniPreview = ({ brand }: {brand: Brand}) => {

    const { image, href, name, imageLight, id, description } = brand;
    
    return (
        <Link href={href} className="block group">
            <motion.div 
                className="relative p-6 bg-black dark:bg-gray-800 rounded-lg shadow-lg 
                hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer 
                overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/30
                hover:text-black
                text-white
                "
                whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    rotateX: 5,
                    rotateY: 5
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            >
                {/* Animated fill background */}
                
                <div className="absolute inset-0 bg-white  w-0 group-hover:w-full transition-all duration-700 ease-out z-0" />

                <div className="relative z-10 mb-4">
<div className="h-32 w-auto relative scale-90 group-hover:scale-100 transition-transform duration-500">
    <Image
        className="dark:hidden object-contain opacity-100 group-hover:opacity-0 transition-all duration-500"
        src={getAssetPath(imageLight)}
        alt={name}
        fill
    />
    <Image
        className="hidden dark:block object-contain transition-all duration-500"
        src={getAssetPath(imageLight)}
        alt={name}
        fill
    />
    <Image
        className="absolute inset-0 object-contain opacity-0 group-hover:opacity-100 transition-all duration-500"
        src={getAssetPath(image)}
        alt={name}
        fill
    />
</div>
                </div>             
                <div className="relative z-10 flex justify-between items-end mt-auto">
                    <div className="flex-1 pr-4">

                        <p className="text-m leading-relaxed">
                            {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."}
                        </p>
                    </div>                

                    {/* Hover indicator */}
                    <div className=" text-black text-sm font-medium">
                        <motion.div
                            initial={{opacity: 0}}
                            whileHover={{ x: 4 , opacity: 1}}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <ChevronRight className="w-6 h-6" color="black"/>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProjectMiniPreview;