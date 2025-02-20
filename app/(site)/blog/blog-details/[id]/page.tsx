"use client"; // ✅ Mark as a Client Component

import { useParams } from "next/navigation";
import BlogData from "@/components/Blog/blogData";
import Image from "next/image";

const BlogDetailsPage = () => {
  const { id } = useParams(); // ✅ Fetch dynamic ID from URL

  // Find the blog post by ID
  const blog = BlogData.find((post) => post._id === Number(id));

  if (!blog) {
    return <p className="text-center text-xl">Blog post not found</p>;
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h1 className="text-3xl font-semibold">{blog.title}</h1>
        <Image
          src={blog.mainImage}
          alt={blog.title}
          width={700}
          height={400}
          className="my-6 rounded-md"
        />
        <p className="text-gray-600">{blog.metadata}</p>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
