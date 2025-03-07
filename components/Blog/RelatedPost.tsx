import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";
import { getAssetPath } from "@/utils/assets";

const RelatedPost = () => {
  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Posts
      </h4>

      <div>
        {BlogData.slice(0, 3).map((post) => (
          <Link href={`/blog/blog-details/${post._id}`}>
          <div
            className="mb-7.5 flex gap-4 xl:flex-nowrap 2xl:gap-6 hover:rounded-md hover:bg-gray-200 dark:hover:rounded-md dark:hover:bg-slate-700 transition"
            key={post._id} // ✅ Better key usage
          >
            {/* Image */}
            <div className="max-w-45 flex relative h-18 w-45">
              {post.mainImage ? (
                <Image
                  src={getAssetPath(post.mainImage)}
                  alt={post.title}
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, 50px"
                />
              ) : (
                <span>No image</span>
              )}
            </div>

            {/* Title with Link */}
            <h5 className="text-md self-center font-medium text-black transition-all duration-300 hover:text-primary dark:text-white ">
                {post.title.length > 40 ? `${post.title.slice(0, 40)}...` : post.title}
            </h5>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
