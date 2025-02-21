import PageLayout from "@/components/PageLayout";
import featureData from "@/data/features.json";

export default function FeaturesPage() {
  return (
    <PageLayout 
      title="Features" 
      description="Discover what makes our bot special"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featureData.features.map((feature) => (
          <div
            key={feature.title}
            className="group bg-white/80 hover:bg-white dark:bg-amber-100/5 p-8 rounded-2xl border border-amber-200/20 dark:border-amber-100/10 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-amber-500/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl p-3 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
                {feature.title}
              </h3>
            </div>
            <p className="text-amber-700/90 dark:text-amber-300/90">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
} 