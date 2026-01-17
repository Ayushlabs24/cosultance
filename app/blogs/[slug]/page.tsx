import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { wordpressService } from '@/lib/wordpress';
import { formatDate } from 'date-fns';
import parse from 'html-react-parser';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedImage from '@/components/blog/FeaturedImage';
import { draftMode } from 'next/headers';

export const revalidate = 3600; // Revalidate every hour

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await wordpressService.getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Bharat-Comply',
    };
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];

  return {
    title: `${post.title.rendered} | Bharat-Comply Blog`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
      images: featuredImage ? [featuredImage.source_url] : [],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  
  console.log('Blog page - Draft mode enabled:', isEnabled);
  console.log('Blog page - Looking for slug:', resolvedParams.slug);
  
  // If in preview mode, fetch with 'any' status to find drafts
  const post = await wordpressService.getPostBySlug(
    resolvedParams.slug, 
    isEnabled ? 'any' : 'publish'
  );

  if (!post) {
    console.log('Post not found for slug:', resolvedParams.slug);
    notFound();
  }

  console.log('Found post:', post.title.rendered, 'Status:', post.status);

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const author = post._embedded?.author?.[0];

  // Get related posts based on categories or tags
  const relatedPosts = await wordpressService.getPostsByCategory(post.categories[0] || 0);
  const filteredRelatedPosts = relatedPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blogs" className="text-pink-500 hover:underline">
            ← Back to Blog
          </Link>
        </nav>

       <FeaturedImage 
        src={featuredImage?.source_url || null}
         alt={featuredImage?.alt_text || post.title.rendered}
          priority={true}
        />
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
          {post.title.rendered}
        </h1>
        
        <div className="flex items-center text-gray-600 text-sm">
          <span>By {author?.name || 'Bharat-Comply'}</span>
          <span className="mx-2">•</span>
          <time dateTime={post.date}>
            {formatDate(new Date(post.date), 'MMMM dd, yyyy')}
          </time>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none prose-headings:text-black prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border-2 prose-img:border-black prose-img:shadow-[6px_6px_0px_0px_rgba(128,128,128,1)] prose-pre:bg-gray-100 prose-pre:border-2 prose-pre:border-black prose-pre:rounded-xl prose-pre:shadow-[4px_4px_0px_0px_rgba(128,128,128,1)] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm">
        {parse(post.content.rendered)}
      </div>

      {/* Related Posts - Hide in preview mode */}
      {!isEnabled && filteredRelatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-black mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRelatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}

      {/* Back to Blog Button */}
      <div className="mt-12 text-center">
        <Link
          href="/blogs"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          ← Back to All Posts
        </Link>
      </div>
    </article>
  );
}