import PageLayout from "@/components/PageLayout";
import commandData from "@/data/commands.json";

export default function CommandsPage() {
  return (
    <PageLayout 
      title="Commands" 
      description="Explore all available commands and their usage"
    >
      <div className="space-y-12">
        {commandData.categories.map((category) => (
          <div key={category.name} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800">
                {category.icon}
              </span>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
                {category.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {category.commands.map((command) => (
                <div
                  key={command.name}
                  className="bg-white/80 hover:bg-white dark:bg-amber-100/5 p-6 rounded-xl border border-amber-200/20 dark:border-amber-100/10 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                        /{command.name}
                      </h3>
                      <p className="text-amber-700/90 dark:text-amber-300/90 mt-1">
                        {command.description}
                      </p>
                    </div>
                    <div className="text-sm px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                      {command.category}
                    </div>
                  </div>
                  {command.usage && (
                    <div className="mt-4 p-3 rounded-lg bg-amber-50/50 dark:bg-amber-900/50 font-mono text-sm text-amber-800 dark:text-amber-200">
                      {command.usage}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
} 