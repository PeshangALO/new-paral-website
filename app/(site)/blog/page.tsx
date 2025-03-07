import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import HeroBlogItem from "@/components/Blog/HeroBlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
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
      <section className="mt-[10rem] mx-3 pb-10">
        <SectionHeader
                  headerInfo={{
                    title: "",
                    subtitle: "Nyeste blogger",
                    description: "",
                    fontSize: "text-4xl"
                  }}
                />        
          <div className="flex justify-center flex-wrap gap-5">
            {BlogData.slice(0, 2).map((post, key) => (
              <HeroBlogItem key={key} blog={post} />
            ))}
          </div>
      </section>
      {/* <!-- ===== Hero Blog Section End ===== --> */}

      {/* <!-- ===== Regular Blog Grid Start ===== --> */}
      <section className="py-10 lg:py-15 xl:py-20">
            <SectionHeader
              headerInfo={{
                  title:"",
                  subtitle:"Tidligere blogger",
                  description:""
                }}
            />
          <div className="flex mx-3 sm:mx-7 flex-wrap justify-center gap-7.5 xl:gap-10">
            {BlogData.slice(2).map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
      </section>
      {/* <!-- ===== Regular Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
