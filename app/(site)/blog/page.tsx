import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import HeroBlogItem from "@/components/Blog/HeroBlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Blog page for Solid Pro"
};

const BlogPage = async () => {
  // No need to create separate arrays

  return (
    <>
      {/* <!-- ===== Hero Blog Section Start ===== --> */}
      <section className="mt-[10rem] pb-10">
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {BlogData.slice(0, 2).map((post, key) => (
              <HeroBlogItem key={key} blog={post} />
            ))}
          </div>
      </section>
      {/* <!-- ===== Hero Blog Section End ===== --> */}

      {/* <!-- ===== Regular Blog Grid Start ===== --> */}
      <section className="py-10 lg:py-15 xl:py-20">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.slice(2).map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Regular Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
