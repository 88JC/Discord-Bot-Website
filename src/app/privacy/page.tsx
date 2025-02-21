import PageLayout from "@/components/PageLayout";
import privacyData from "@/data/privacy.json";

export default function PrivacyPage() {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="Learn how we handle and protect your data"
    >
      <div className="space-y-12">
        {privacyData.sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
              {section.title}
            </h2>
            {section.content.map((paragraph, index) => (
              <p key={index} className="text-amber-700/90 dark:text-amber-300/90">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="list-disc list-inside space-y-2 text-amber-700/90 dark:text-amber-300/90">
                {section.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
} 