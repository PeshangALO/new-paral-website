'use client';

import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content, size } = review;
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only execute theme-dependent code after mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Determine image source based on theme
  const getImageSrc = () => {
    if (!mounted) return typeof image === 'object' && 'light' in image ? image.light : image;
    
    if (image && typeof image === 'object' && 'light' in image && 'dark' in image) {
      return theme === 'dark' ? image.dark : image.light;
    }
    return image;
  };


  return (
    <div className="lg:h-[20rem] rounded-lg bg-white border-2 p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex items-center text-center sm:text-left flex-col gap-4 sm:flex-row sm:justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <Image width={review.size?.width} height={review.size?.width} className="object-fit" src={getImageSrc()} alt={name} />
      </div>

      <div className="overflow-y-auto scrollbar-hide h-[calc(100%-120px)]">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
