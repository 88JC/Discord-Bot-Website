import PageLayout from "@/components/PageLayout";
import pricingData from "@/data/pricing.json";
import comparisonData from "@/data/feature-comparison.json";

export default function PremiumPage() {
  return (
    <PageLayout 
      title="Premium" 
      description="Upgrade your server with premium features"
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative group bg-white/80 hover:bg-white dark:bg-amber-100/5 p-8 rounded-2xl border ${
                tier.featured 
                  ? 'border-amber-400 dark:border-amber-500' 
                  : 'border-amber-200/20 dark:border-amber-100/10'
              } transition-all hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-amber-500/10`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center space-y-4">
                <div className="text-3xl p-3 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800 inline-block">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
                  {tier.name}
                </h3>
                <div className="text-amber-700/90 dark:text-amber-300/90">
                  <span className="text-3xl font-bold">${tier.price}</span>
                  /month
                </div>
                <p className="text-amber-600/90 dark:text-amber-400/90">
                  {tier.description}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-amber-700/90 dark:text-amber-300/90">
                      <span className="text-amber-500 dark:text-amber-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                    tier.featured
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 text-white hover:from-amber-600 hover:to-amber-700 dark:hover:from-amber-500 dark:hover:to-amber-600'
                      : 'bg-white dark:bg-amber-100/10 text-amber-800 dark:text-amber-100 border border-amber-200/20 dark:border-amber-100/10 hover:bg-amber-50 dark:hover:bg-amber-100/20'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Feature Comparison</h2>
          <div className="grid grid-cols-1 gap-4">
            {comparisonData.features.map((feature) => (
              <div key={feature.name} className="bg-white/80 dark:bg-amber-100/5 rounded-2xl border border-amber-200/20 dark:border-amber-100/10 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-200/10 dark:border-amber-800/10">
                      <th className="p-4 text-left text-amber-800 dark:text-amber-200">Feature</th>
                      <th className="p-4 text-center text-amber-800 dark:text-amber-200">Free</th>
                      <th className="p-4 text-center text-amber-800 dark:text-amber-200">Pro</th>
                      <th className="p-4 text-center text-amber-800 dark:text-amber-200">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-200/10 dark:border-amber-800/10">
                      <td className="p-4 text-amber-700/90 dark:text-amber-300/90">{feature.name}</td>
                      <td className="p-4 text-center text-amber-700/90 dark:text-amber-300/90">{feature.free}</td>
                      <td className="p-4 text-center text-amber-700/90 dark:text-amber-300/90">{feature.pro}</td>
                      <td className="p-4 text-center text-amber-700/90 dark:text-amber-300/90">{feature.enterprise}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 