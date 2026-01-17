import axios from 'axios';

// Use environment variable
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost/myBlog/wp-json/wp/v2';

export interface BlogPost {
    id: number;
    slug: string;
    status: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    date: string;
    featured_media: number;
    author: number;
    categories: number[];
    tags: number[];
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        author?: Array<{
            name: string;
        }>;
    };
}

const MOCK_POSTS: BlogPost[] = [
    {
        id: 1,
        slug: 'gst-council-meeting-highlights-2025',
        status: 'publish',
        title: { rendered: 'Government says this about the 54th GST Council Meeting' },
        content: { rendered: '<p>The latest GST council meeting has introduced significant changes for small businesses...</p>' },
        excerpt: { rendered: '<p>Key takeaways from the recent GST council meeting including rate changes and compliance easing...</p>' },
        date: new Date().toISOString(),
        featured_media: 0,
        author: 1,
        categories: [],
        tags: [],
        _embedded: {
            'wp:featuredmedia': [{
                source_url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
                alt_text: 'GST Council Updates'
            }],
            author: [{ name: 'Bharat-Comply Team' }]
        }
    },
    {
        id: 2,
        slug: 'income-tax-filing-deadlines-extended',
        status: 'publish',
        title: { rendered: 'Income Tax: New Deadlines & Penalty Norms Announced' },
        content: { rendered: '<p>The CBDT has issued new notifications regarding the extension of due dates...</p>' },
        excerpt: { rendered: '<p>Check the updated timeline for filing your ITR to avoid hefty penalties this assessment year...</p>' },
        date: new Date(Date.now() - 86400000).toISOString(),
        featured_media: 0,
        author: 1,
        categories: [],
        tags: [],
        _embedded: {
            'wp:featuredmedia': [{
                source_url: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800',
                alt_text: 'Income Tax Updates'
            }],
            author: [{ name: 'Bharat-Comply Team' }]
        }
    },
    {
        id: 3,
        slug: 'mca-company-incorporation-rules-2025',
        status: 'publish',
        title: { rendered: 'MCA Update: New Rules for Private Limited Incorporation' },
        content: { rendered: '<p>The Ministry of Corporate Affairs has simplified the SPICe+ form...</p>' },
        excerpt: { rendered: '<p>Starting a new business? Here is what you need to know about the new MCA incorporation rules...</p>' },
        date: new Date(Date.now() - 172800000).toISOString(),
        featured_media: 0,
        author: 1,
        categories: [],
        tags: [],
        _embedded: {
            'wp:featuredmedia': [{
                source_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
                alt_text: 'Corporate Law News'
            }],
            author: [{ name: 'Bharat-Comply Team' }]
        }
    },
    {
        id: 4,
        slug: 'startup-india-tax-benefits',
        status: 'publish',
        title: { rendered: 'Startup India: Government expands Tax Holiday eligibility' },
        content: { rendered: '<p>Good news for startups as the government widens the scope for tax exemptions...</p>' },
        excerpt: { rendered: '<p>Find out if your startup is eligible for the 3-year tax holiday under the new scheme...</p>' },
        date: new Date(Date.now() - 259200000).toISOString(),
        featured_media: 0,
        author: 1,
        categories: [],
        tags: [],
        _embedded: {
            'wp:featuredmedia': [{
                source_url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
                alt_text: 'Startup Tax Benefits'
            }],
            author: [{ name: 'Bharat-Comply Team' }]
        }
    }
];

export class WordPressService {
    private baseURL = WORDPRESS_API_URL;

    async getAllPosts(page = 1, perPage = 10, status: 'publish' | 'draft' | 'any' = 'publish'): Promise<{
        posts: BlogPost[];
        totalPages: number;
        total: number;
    }> {
        try {
            console.log('Fetching posts with status:', status);

            const username = process.env.ADMIN_USERNAME;
            const password = process.env.ADMIN_PASSWORD;

            let url: URL;
            try {
                url = new URL(`${this.baseURL}/posts`);
            } catch (e) {
                console.error('Invalid WORDPRESS_API_URL:', this.baseURL);
                return { posts: MOCK_POSTS, totalPages: 1, total: MOCK_POSTS.length };
            }

            url.searchParams.append('page', page.toString());
            url.searchParams.append('per_page', perPage.toString());
            url.searchParams.append('_embed', 'true');
            url.searchParams.append('status', status);

            console.log('Requesting URL:', url.toString());

            const headers: any = {};
            if (username && password && status !== 'publish') {
                const token = Buffer.from(`${username}:${password}`).toString('base64');
                headers['Authorization'] = `Basic ${token}`;
                console.log('Using Basic Auth for draft posts');
            }

            const response = await axios.get(url.toString(), { headers });

            // Check if response is HTML (error page) instead of JSON
            if (typeof response.data === 'string' && response.data.trim().startsWith('<')) {
                console.warn('Received HTML response instead of JSON. Serving mock data.');
                return { posts: MOCK_POSTS, totalPages: 1, total: MOCK_POSTS.length };
            }

            console.log(`Received ${response.data.length} posts`);

            return {
                posts: response.data,
                totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
                total: parseInt(response.headers['x-wp-total'] || '0')
            };
        } catch (error: any) {
            console.error('Error fetching posts:', error.message);
            console.warn('Network or API error. Serving mock data.');
            return {
                posts: MOCK_POSTS,
                totalPages: 1,
                total: MOCK_POSTS.length
            };
        }
    }

    async getPostById(id: number, status: 'publish' | 'draft' | 'any' = 'any'): Promise<BlogPost | null> {
        try {
            const { posts } = await this.getAllPosts(1, 100, status);
            return posts.find(p => p.id === id) || null;
        } catch (error: any) {
            console.error('Error fetching post by ID:', error.message);
            return MOCK_POSTS.find(p => p.id === id) || null;
        }
    }

    async getPostBySlug(slug: string, status: 'publish' | 'draft' | 'any' = 'publish'): Promise<BlogPost | null> {
        try {
            // Optimization: Always try to fetch by slug first, even for drafts
            // WordPress might find it if the slug matches exactly
            let url: URL;
            try {
                url = new URL(`${this.baseURL}/posts`);
            } catch (e) {
                console.error('Invalid WORDPRESS_API_URL:', this.baseURL);
                return MOCK_POSTS.find(p => p.slug === slug) || null;
            }

            url.searchParams.append('slug', slug);
            url.searchParams.append('_embed', 'true');
            url.searchParams.append('status', status);

            const username = process.env.ADMIN_USERNAME;
            const password = process.env.ADMIN_PASSWORD;
            const headers: any = {};

            if (username && password && status !== 'publish') {
                const token = Buffer.from(`${username}:${password}`).toString('base64');
                headers['Authorization'] = `Basic ${token}`;
            }

            try {
                const response = await axios.get(url.toString(), { headers });
                if (response.data && response.data.length > 0) {
                    // Verify it's not HTML
                    if (typeof response.data !== 'string') {
                        return response.data[0];
                    }
                }
            } catch (e) {
                // Ignore error and fall back to manual search
                console.log('Direct slug fetch failed, falling back to manual search or mock data');
            }

            // Fallback: If direct fetch failed (e.g. slug mismatch), search in all posts
            // This is slower but necessary for drafts with auto-generated slugs
            if (status === 'draft' || status === 'any') {
                console.log('Searching for post by generated slug...');
                const { posts } = await this.getAllPosts(1, 100, status);

                // Try to find by slug first (in case it wasn't found by API for some reason)
                let post = posts.find(p => p.slug === slug);

                // If not found, try to match by generated slug from title
                if (!post) {
                    post = posts.find(p => {
                        const generatedSlug = p.title.rendered.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                        return generatedSlug === slug;
                    });
                }
                return post || null;
            }

            // If we are here, direct API fetch failed and we are presumably in normal viewing mode.
            // Fallback to searching locally in mock data if API call failed entirely.
            const { posts } = await this.getAllPosts(1, 100, status);
            return posts.find(p => p.slug === slug) || null;

        } catch (error: any) {
            console.error('Error fetching post:', error.message);
            // Final fallback to mock data specific search
            return MOCK_POSTS.find(p => p.slug === slug) || null;
        }
    }

    async getPostsByCategory(categoryId: number): Promise<BlogPost[]> {
        try {
            const response = await axios.get(`${this.baseURL}/posts`, {
                params: {
                    categories: categoryId,
                    _embed: true,
                },
            });

            if (typeof response.data === 'string') return MOCK_POSTS; // Fallback for invalid/HTML response

            return response.data;
        } catch (error: any) {
            console.error('Error fetching posts by category:', error.message);
            return MOCK_POSTS;
        }
    }
}

export const wordpressService = new WordPressService();
