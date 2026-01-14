import React from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 p-8 md:p-12">
          
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last Updated: {lastUpdated}
              </p>
            )}
            <div className="h-1 w-20 bg-[#0EA5E9] mt-6 mx-auto md:mx-0 rounded-full"></div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-[#0EA5E9]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
