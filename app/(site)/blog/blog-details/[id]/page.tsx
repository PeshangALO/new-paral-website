import BlogData from "@/components/Blog/blogData";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";

export async function generateStaticParams() {
  return BlogData.map((post) => ({ id: post._id.toString() }));
}

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = BlogData.find((post) => post._id.toString() === params.id);

  if (!blog) {
    return <p className="text-center text-xl">Blog post not found</p>;
  }

  return (
    <section>
      <Image src={blog.mainImage} alt={blog.title} width={700} height={400} />
      <h2>{blog.title}</h2>
      <p>{blog.metadata}</p>
      <RelatedPost />
      <SharePost />
    </section>
  );
}
