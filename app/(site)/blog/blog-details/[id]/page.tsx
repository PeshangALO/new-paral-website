import BlogData from "@/components/Blog/blogData";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";
import { Metadata } from "next";

// ✅ Ensure `generateStaticParams()` returns a `Promise`
export async function generateStaticParams() {
  return BlogData.map((post) => ({
    id: post._id.toString(),
  }));
}

// ✅ Correct `PageProps` type definition
interface BlogPageProps {
  params: { id: string };
  id: string;
}

// ✅ Ensure the component receives `params` properly
const BlogDetailsPage = ({ params }: BlogPageProps) => {
  const blog = BlogData.find((post) => post._id.toString() === params.id);

  if (!blog) {
    return <p className="text-center text-xl">Blog post not found</p>;
  }

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          {/* Sidebar */}
          <div className="md:w-1/2 lg:w-[32%]">
            <RelatedPost />
          </div>

          {/* Main Blog Content */}
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <Image
                src={blog.mainImage}
                alt={blog.title}
                width={700}
                height={400}
                className="rounded-md"
              />
              <h2 className="text-3xl font-semibold text-black dark:text-white mt-6">
                {blog.title}
              </h2>
              <p className="mt-4 text-gray-600">{blog.metadata}</p>
              <SharePost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
