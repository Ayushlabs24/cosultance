import { Metadata } from 'next';
import { wordpressService } from '@/lib/wordpress';
import BlogCard from '@/components/blog/BlogCard';
import Pagination from '@/components/blog/Pagination';

export const metadata: Metadata = {
  title: 'Blog | Bharat-Comply',
  description: 'Latest insights, tutorials, and news from Bharat-Comply',
};

export const revalidate = 3600; // Revalidate every hour

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1');
  const { posts, totalPages, total } = await wordpressService.getAllPosts(currentPage, 9);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
          Latest <span className="font-normal">Blog Posts</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Insights, tutorials, and the latest news from the Bharat-Comply team
        </p>
      </div>

      {posts.length > 0 ? (
        <>
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/blogs"
            />
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No blog posts found.</p>
        </div>
      )}

    </div>
  );
}