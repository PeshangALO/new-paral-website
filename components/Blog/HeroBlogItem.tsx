"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/utils/assets";

const HeroBlogItem = ({ blog }: { blog: Blog }) => {
  const { _id, mainImage, title, metadata } = blog;

  return (
    <div className="group w-full relative max-w-[45rem] min-w-[300px] flex-1 basis-80 rounded-lg">
      <Link href={`/blog/blog-details/${_id}`}>
        <motion.div
          whileInView="visible"
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          transition={{ 
            duration: 0.6
          }}
          viewport={{ once: true }}
          className="animate_top bg-gray-100 rounded p-4 pb-9 shadow-solid-8 dark:bg-slate-900 cursor-pointer 
                     overflow-hidden transition-all h-full"
          >
          <div className="relative block aspect-[16/9]">
            <Image src={getAssetPath(mainImage)} alt={title} fill className="rounded-md object-cover" />
          </div>

          <div className="px-4">
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-2xl font-semibold text-black duration-300 dark:text-white">
                {title}
            </h3>
            <p className="line-clamp-4 text-lg">{metadata}</p>
          </div>
        </motion.div>
      </Link>
      
      <div className="absolute -inset-0 pointer-events-none group-active:scale-98">
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] dark:bg-gray-500 bg-gray-400 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
        
        {/* Left border - needs to be positioned after bottom animation starts */}
        <div className="absolute left-0 bottom-0 top-0 w-[2px] dark:bg-gray-500 bg-gray-400 h-0 group-hover:h-full transition-all duration-500 ease-in-out delay-150"></div>
        
        {/* Top border - starts after left animation */}
        <div className="absolute top-0 right-0 left-0 h-[2px] dark:bg-gray-500 bg-gray-400 w-0 group-hover:w-full transition-all duration-500 ease-in-out delay-300 origin-left"></div>
        
        {/* Right border - the final piece of the animation */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] dark:bg-gray-500 bg-gray-400 h-0 group-hover:h-full transition-all duration-500 ease-in-out delay-450 origin-top"></div>

      </div>

    </div>
  );
};

export default HeroBlogItem;