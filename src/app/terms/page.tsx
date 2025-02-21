import PageLayout from "@/components/PageLayout";
import termsData from "@/data/terms.json";
import theme from "@/data/theme.json";

export default function TermsPage() {
  return (
    <PageLayout 
      title="Terms of Service" 
      description="Please read these terms carefully before using our services"
    >
      <div className="space-y-8">
        <div className="bg-white/80 dark:bg-amber-100/5 p-8 rounded-2xl border border-amber-200/20 dark:border-amber-100/10">
          <div className="prose prose-amber dark:prose-invert max-w-none">
            <p className="text-amber-700/90 dark:text-amber-300/90">
              Last updated: March 15, 2024
            </p>

            {termsData.sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className={`text-2xl font-bold ${theme.colors.text.light} ${theme.colors.text.dark}`}>
                  {section.title}
                </h2>
                {section.content.map((paragraph, index) => (
                  <p key={index} className="text-amber-800/90 dark:text-amber-200/90">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc list-inside space-y-2 text-amber-800/90 dark:text-amber-200/90">
                    {section.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-100/50 to-white dark:from-amber-900/50 dark:to-amber-950/50 p-8 rounded-2xl border border-amber-200/20 dark:border-amber-800/10">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
            Questions about our Terms?
          </h2>
          <p className="text-amber-700/90 dark:text-amber-300/90 mb-4">
            If you have any questions about these terms, please contact us.
          </p>
          <a
            href="/support"
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
          >
            Contact Support <span>→</span>
          </a>
        </div>
      </div>
    </PageLayout>
  );
} 