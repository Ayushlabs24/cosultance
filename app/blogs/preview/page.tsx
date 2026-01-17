import Link from 'next/link';
import { wordpressService } from '@/lib/wordpress';
import BlogCard from '@/components/blog/BlogCard';

export const revalidate = 0; // Disable cache for this page

export default async function PreviewDashboard() {
  // Fetch all posts with status 'draft'
  const { posts } = await wordpressService.getAllPosts(1, 10, 'draft');

  // Debug: Log the actual slugs from WordPress
  console.log('Preview Dashboard - Posts found:', posts.length);
  posts.forEach(post => {
    console.log(`Post ID: ${post.id}, Title: "${post.title.rendered}", Slug: "${post.slug}"`);
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Drafts Preview Dashboard</h1>
        <p className="text-gray-600">
          Click on any draft to preview it.
        </p>
        <div className="mt-4">
            <Link href="/blogs" className="text-blue-500 hover:underline">
                View Published Blogs
            </Link>
        </div>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No drafts found.</p>
          <p className="text-sm text-gray-400 mt-2">
            Make sure you have posts saved as "Draft" in WordPress.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            // We manually create a card-like structure or reuse BlogCard if possible.
            // Since BlogCard links to /blogs/[slug], we need to override that behavior.
            // We'll create a wrapper that looks like a card but links to the preview URL.
            <div key={post.id} className="relative group">
                <Link 
                    href={`/api/preview?secret=${process.env.WP_PREVIEW_SECRET}&slug=${post.slug || post.title.rendered.toLowerCase().replace(/\s+/g, '-')}&id=${post.id}`}
                    className="block h-full"
                >
                    {/* We reuse the visual part of BlogCard by wrapping it, 
                        but the internal Link of BlogCard might conflict. 
                        Ideally, we should extract the card UI. 
                        For now, let's build a simple card to ensure functionality. 
                    */}
                    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full bg-white">
                        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                            <div className="aspect-video relative overflow-hidden bg-gray-100">
                                <img 
                                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                                    alt={post.title.rendered}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                {post.title.rendered}
                            </h2>
                            <div 
                                className="text-gray-600 line-clamp-3 text-sm"
                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                            />
                            <div className="mt-4 text-xs text-gray-400 uppercase tracking-wide font-semibold">
                                Status: Draft
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
