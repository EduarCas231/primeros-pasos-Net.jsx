import { BlogPost } from "../types/blog";

type Props = {
  post: BlogPost;
};

function BlogPostContent({ post }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mt-6 mb-6 text-4xl font-bold tracking-tight text-gray-900">
        {post.title}
      </h1>
      {post.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 text-lg leading-8 text-gray-600"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default BlogPostContent;