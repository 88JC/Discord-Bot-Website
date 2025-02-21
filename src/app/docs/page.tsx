import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import docsData from '@/data/docs.json';

export default function DocsPage() {
  return (
    <PageLayout 
      title="Documentation" 
      description="Learn how to use and configure our Discord bot"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/80 dark:bg-amber-100/5 p-6 rounded-2xl border border-amber-200/20 dark:border-amber-100/10">
            <nav className="space-y-1">
              {docsData.categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 px-3 py-2">
                    {category.name}
                  </h3>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 rounded-lg text-amber-700/90 dark:text-amber-300/90 hover:bg-amber-50 dark:hover:bg-amber-900/30 hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/80 dark:bg-amber-100/5 p-8 rounded-2xl border border-amber-200/20 dark:border-amber-100/10">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
              Getting Started
            </h2>
            <div className="prose prose-amber dark:prose-invert max-w-none">
              <p className="text-amber-700/90 dark:text-amber-300/90">
                Welcome to our documentation! Here you&apos;ll find everything you need to know about setting up and using our Discord bot.
              </p>
              <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mt-8">
                Quick Start Guide
              </h3>
              <ol className="space-y-4 text-amber-700/90 dark:text-amber-300/90">
                <li>
                  <strong className="text-amber-800 dark:text-amber-200">Add the bot:</strong> Click the <strong className="text-amber-800 dark:text-amber-200">&quot;Add to Discord&quot;</strong> button and authorize the bot.
                </li>
                <li>
                  <strong className="text-amber-800 dark:text-amber-200">Set up permissions:</strong> Ensure the bot has the necessary permissions.
                </li>
                <li>
                  <strong className="text-amber-800 dark:text-amber-200">Configure settings:</strong> Use /settings to customize the bot for your server.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {docsData.featuredGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-white/80 hover:bg-white dark:bg-amber-100/5 p-6 rounded-xl border border-amber-200/20 dark:border-amber-100/10 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-2xl p-2 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800">
                    {guide.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                    {guide.title}
                  </h3>
                </div>
                <p className="text-amber-700/90 dark:text-amber-300/90">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 