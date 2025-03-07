"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/utils/assets";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { _id, mainImage, title, metadata } = blog;

  return (
    <div className="group relative max-w-[30rem] min-w-[20rem] basis-70 flex-1 rounded-lg">
      <Link href={`/blog/blog-details/${_id}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        whileTap={
          {
            scale: 0.98,
            transition: {duration: 0.1}
          }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-full cursor-pointer animate_top rounded bg-gray-100 p-4 pb-9 shadow-solid-8 dark:bg-slate-900 relative z-10"
      >
        <div className="relative block aspect-[368/239]">
          <Image src={getAssetPath(mainImage)} alt={title} fill className="relative block aspect-[368/239] rounded-md object-cover" />
        </div>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black dark:text-white duration-300">
              {`${title.slice(0, 40)}...`}
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
            </Link>


      <div className="absolute -inset-0.5 z-5 rounded-full pointer-events-none">
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-300 dark:bg-gray-500  w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
        
        {/* Left border - needs to be positioned after bottom animation starts */}
        <div className="absolute left-0 bottom-0 top-0 w-[2px] bg-gray-300 dark:bg-gray-500  h-0 group-hover:h-full transition-all duration-500 ease-in-out delay-150"></div>
        
        {/* Top border - starts after left animation */}
        <div className="absolute top-0 right-0 left-0 h-[2px] bg-gray-300 dark:bg-gray-500  w-0 group-hover:w-full transition-all duration-500 ease-in-out delay-300 origin-left"></div>
        
        {/* Right border - the final piece of the animation */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-500 h-0 group-hover:h-full transition-all duration-500 ease-in-out delay-450 origin-top"></div>
      </div>
    </div>
  );
};

export default BlogItem;