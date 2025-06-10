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
          {/* 5 Star Rating */}
          <div className="flex items-center mt-2 mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-yellow-400"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
          </div>
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
