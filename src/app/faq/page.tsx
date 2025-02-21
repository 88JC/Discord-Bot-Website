import PageLayout from "@/components/PageLayout";
import faqData from '@/data/faq.json';

export default function FAQPage() {
  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      description="Find answers to common questions about our Discord bot"
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.categories.map((category) => (
            <div
              key={category.name}
              className="bg-white/80 hover:bg-white dark:bg-amber-100/5 p-8 rounded-2xl border border-amber-200/20 dark:border-amber-100/10 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl p-3 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
                  {category.name}
                </h2>
              </div>
              
              <div className="space-y-6">
                {category.questions.map((qa) => (
                  <div key={qa.question} className="space-y-2">
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                      {qa.question}
                    </h3>
                    <p className="text-amber-700/90 dark:text-amber-300/90">
                      {qa.answer}
                    </p>
                    {qa.links && (
                      <div className="flex gap-4 mt-2">
                        {qa.links.map((link) => (
                          <a
                            key={link.text}
                            href={link.url}
                            className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm font-medium"
                          >
                            {link.text} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-amber-100/50 to-white dark:from-amber-900/50 dark:to-amber-950/50 border border-amber-200/20 dark:border-amber-800/10">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
              Still have questions?
            </h2>
            <p className="text-amber-700/90 dark:text-amber-300/90 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help!
            </p>
            <a
              href="/support"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 text-white hover:from-amber-600 hover:to-amber-700 dark:hover:from-amber-500 dark:hover:to-amber-600 transition-all transform hover:scale-105"
            >
              <span>Contact Support</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 