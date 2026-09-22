import { blogPostsContent } from "../../data/Blog-sections";
import BlogPostContent from "@/app/utils/BlogPostContenet"
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsContent[slug];

  if (!post) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold">Post no encontrado: {slug}</h1>
        <Link href="/blog" className="text-emerald-700 underline">Volver al blog</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 pt-8">
      </div>
      <BlogPostContent post={post} />
    </div>
  );
}