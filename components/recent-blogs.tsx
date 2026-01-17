
import Link from "next/link";
import { wordpressService } from "@/lib/wordpress";
import BlogCard from "@/components/blog/BlogCard";

export default async function RecentBlogs() {
  const { posts } = await wordpressService.getAllPosts(1, 4);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Latest <span className="text-[#0EA5E9]">Compliance Updates</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest Government notifications, GST rules, and Tax amendments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all hover:scale-105"
          >
            Read More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
