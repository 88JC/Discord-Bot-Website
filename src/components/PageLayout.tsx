"use client";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="page-container pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 items-center text-amber-800 dark:text-amber-100 max-w-6xl mx-auto">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
              {title}
            </h1>
            {description && (
              <p className="text-lg sm:text-xl text-amber-700/90 dark:text-amber-300/90 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="w-full animate-fade-in-up">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 