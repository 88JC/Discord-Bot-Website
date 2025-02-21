import PageLayout from "@/components/PageLayout";
import supportData from "@/data/support.json";
import theme from "@/data/theme.json";

export default function SupportPage() {
  return (
    <PageLayout 
      title="Support" 
      description="Get help with our Discord bot"
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportData.quickHelp.map((item) => (
            <div
              key={item.title}
              className={`bg-gradient-to-br ${theme.colors.gradients.light.background} ${theme.colors.gradients.dark.background} p-6 rounded-xl border ${theme.colors.border.light} ${theme.colors.border.dark} transition-all hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-2xl mb-4 p-3 rounded-lg bg-gradient-to-br from-amber-400 to-amber-300 dark:from-amber-800/40 dark:to-amber-900/40 inline-block shadow-sm">
                {item.icon}
              </div>
              <h3 className={`text-lg font-semibold ${theme.colors.text.light} ${theme.colors.text.dark} mb-2`}>
                {item.title}
              </h3>
              <p className="text-amber-800/90 dark:text-amber-200/90 mb-4">
                {item.description}
              </p>
              <a
                href={item.link}
                className="text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 font-medium inline-flex items-center gap-2 group"
              >
                {item.linkText} <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-br ${theme.colors.gradients.light.background} ${theme.colors.gradients.dark.background} p-8 rounded-2xl border ${theme.colors.border.light} ${theme.colors.border.dark}`}>
          <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${theme.colors.gradients.light.text} ${theme.colors.gradients.dark.text} text-transparent bg-clip-text`}>
            Contact Support
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block font-medium mb-2 ${theme.colors.text.light} ${theme.colors.text.dark}`}>
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg ${theme.colors.background.light} ${theme.colors.background.dark} border ${theme.colors.border.light} ${theme.colors.border.dark} ${theme.colors.text.light} ${theme.colors.text.dark} focus:outline-none focus:ring-2 focus:ring-amber-500/40 dark:focus:ring-amber-400/20`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className={`block font-medium mb-2 ${theme.colors.text.light} ${theme.colors.text.dark}`}>
                  Discord Username
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg ${theme.colors.background.light} ${theme.colors.background.dark} border ${theme.colors.border.light} ${theme.colors.border.dark} ${theme.colors.text.light} ${theme.colors.text.dark} focus:outline-none focus:ring-2 focus:ring-amber-500/40 dark:focus:ring-amber-400/20`}
                  placeholder="username#0000"
                />
              </div>
            </div>
            <div>
              <label className={`block font-medium mb-2 ${theme.colors.text.light} ${theme.colors.text.dark}`}>
                Issue Type
              </label>
              <select className={`w-full px-4 py-2 rounded-lg ${theme.colors.background.light} ${theme.colors.background.dark} border ${theme.colors.border.light} ${theme.colors.border.dark} ${theme.colors.text.light} ${theme.colors.text.dark} focus:outline-none focus:ring-2 focus:ring-amber-500/40 dark:focus:ring-amber-400/20`}>
                {supportData.issueTypes.map((type) => (
                  <option key={type} value={type} className={`${theme.colors.background.light} ${theme.colors.background.dark} ${theme.colors.text.light} ${theme.colors.text.dark}`}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block font-medium mb-2 ${theme.colors.text.light} ${theme.colors.text.dark}`}>
                Message
              </label>
              <textarea
                rows={4}
                className={`w-full px-4 py-2 rounded-lg ${theme.colors.background.light} ${theme.colors.background.dark} border ${theme.colors.border.light} ${theme.colors.border.dark} ${theme.colors.text.light} ${theme.colors.text.dark} focus:outline-none focus:ring-2 focus:ring-amber-500/40 dark:focus:ring-amber-400/20`}
                placeholder="Describe your issue..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-amber-700 to-amber-800 dark:from-amber-600 dark:to-amber-700 text-white hover:from-amber-800 hover:to-amber-900 dark:hover:from-amber-500 dark:hover:to-amber-600 transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className={`bg-gradient-to-br from-amber-300/20 to-amber-200/20 dark:from-amber-800/10 dark:to-amber-900/10 p-8 rounded-2xl border ${theme.colors.border.light} ${theme.colors.border.dark} backdrop-blur-sm`}>
          <div className="text-center">
            <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${theme.colors.gradients.light.text} ${theme.colors.gradients.dark.text} text-transparent bg-clip-text`}>
              Common Questions
            </h2>
            <p className="text-amber-800/90 dark:text-amber-200/90 mb-6">
              Find quick answers in our FAQ section
            </p>
            <a
              href="/faq"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium ${theme.colors.background.light} ${theme.colors.background.dark} ${theme.colors.text.light} ${theme.colors.text.dark} border ${theme.colors.border.light} ${theme.colors.border.dark} ${theme.colors.hover.light} ${theme.colors.hover.dark} transition-all transform hover:scale-105`}
            >
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 