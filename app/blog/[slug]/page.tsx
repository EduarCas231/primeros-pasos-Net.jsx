import { blogPostsContent } from "../../data/Blog-sections";
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
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/blog" className="text-sm text-emerald-700 hover:underline">← Volver al blog</Link>
      <h1 className="mt-6 mb-6 text-4xl font-bold tracking-tight text-gray-900">{post.title}</h1>
      {post.paragraphs.map((p, i) => (
        <p key={i} className="mb-4 text-lg leading-8 text-gray-600">{p}</p>
      ))}
    </div>
  );
}