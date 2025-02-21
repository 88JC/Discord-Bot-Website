import Image from "next/image";
import Link from "next/link";
import featuresData from '@/data/features.json';
import communitiesData from '@/data/communities.json';

export default function Home() {
  return (
    <div className="page-container pt-20">
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 items-center text-amber-800 dark:text-amber-100 max-w-6xl mx-auto">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 text-transparent bg-clip-text">
              Your Bot Name
            </h1>
            <p className="text-xl sm:text-2xl text-amber-700/90 dark:text-amber-300/90 max-w-2xl mx-auto">
              The perfect Discord bot for your server
            </p>
          </div>

          <div className="flex gap-6 items-center flex-col sm:flex-row animate-fade-in-up">
            <a
              href="#"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-amber-700 dark:from-amber-400 dark:to-amber-500 dark:hover:from-amber-500 dark:hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
            >
              Add to Discord
            </a>
            <Link
              href="/commands"
              className="px-8 py-3 rounded-xl font-medium bg-white/80 text-amber-800 hover:bg-white dark:bg-amber-100/10 dark:text-amber-100 dark:hover:bg-amber-100/20 border border-amber-200/20 dark:border-amber-100/10 transition-all hover:scale-105 shadow-md hover:shadow-lg"
            >
              View Commands
            </Link>
          </div>

          <div className="mt-32 w-full">
            <div className="text-center mb-16">
              <p className="text-amber-700/80 dark:text-amber-300/80 text-lg mb-2">
                TRUSTED BY OVER <span className="text-amber-600 dark:text-amber-200 font-semibold">9,000,000</span> DISCORD SERVERS, INCLUDING
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent dark:via-amber-400/5 blur-3xl -z-10" />
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-4">
                {communitiesData.communities.map((server) => (
                  <div 
                    key={server.name} 
                    className="group relative overflow-hidden"
                  >
                    <div className="aspect-[4/2] bg-gradient-to-br from-amber-100/95 to-amber-50/95 dark:from-[#1a1b1e]/90 dark:to-[#141517]/90 rounded-2xl p-6 flex items-center justify-between border border-amber-200/20 dark:border-amber-800/20 transition-all duration-300 group-hover:-translate-y-1 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-amber-200/20 dark:bg-amber-800/20 overflow-hidden">
                          <Image
                            src={server.image}
                            alt={server.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span className="text-amber-900 dark:text-amber-100 font-medium">
                              {server.name}
                            </span>
                            {server.verified && (
                              <svg className="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-amber-700/60 dark:text-amber-400/60">
                            {server.members}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 dark:from-amber-300/0 dark:via-amber-300/10 dark:to-amber-300/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-32 w-full py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-amber-100 mb-4">
                  Features
                </h2>
                <p className="text-amber-400/70 text-lg">
                  Everything you need to manage your Discord server
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuresData.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative"
                  >
                    <div className="bg-amber-900/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-amber-100/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-3xl">{feature.icon}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 text-amber-200 group-hover:text-amber-100 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-amber-300/70 group-hover:text-amber-200/90 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 rounded-2xl border border-amber-500/10 group-hover:border-amber-500/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
