import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import blogData from '@/data/blog.json';

export default function BlogPage() {
  return (
    <PageLayout 
      title="Blog" 
      description="Latest news, updates and guides for our Discord bot"
    >
      <div className="space-y-12">
        <div className="bg-white/80 hover:bg-white dark:bg-amber-100/5 p-8 rounded-2xl border border-amber-200/20 dark:border-amber-100/10 transition-all hover:shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
              Featured
            </span>
            <span className="text-amber-600/80 dark:text-amber-400/80 text-sm">
              March 15, 2024
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
            Introducing New Music Features
          </h2>
          <p className="text-amber-700/90 dark:text-amber-300/90 mb-6">
            We&apos;re excited to announce new music features including Spotify integration, improved queue management, and high-quality audio streaming.
          </p>
          <Link
            href="/blog/new-music-features"
            className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium inline-flex items-center gap-2"
          >
            Read More <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/80 hover:bg-white dark:bg-amber-100/5 p-6 rounded-xl border border-amber-200/20 dark:border-amber-100/10 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                  {post.category}
                </span>
                <span className="text-amber-600/80 dark:text-amber-400/80 text-sm">
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-800 dark:text-amber-200 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-amber-700/90 dark:text-amber-300/90">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 