import localFont from "next/font/local";
import "./globals.css";
import { getDocuments } from "@/lib/doc";
import Header from "@/components/Header";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DocuCraft - a documention website by protocol",
  description: "A documention website by protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  // console.log(allDocuments);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full lg:ml-72 xl:ml-80">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Header docs={allDocuments} />
            <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
              <main className="flex-auto py-16">
                <article className="prose dark:prose-invert">
                  <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                    <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                    </div>
                  </div>
                  {children}
                </article>
                <footer className="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
                  <div className="relative h-8">
                    <form className="absolute inset-0 flex items-center justify-center gap-6 md:justify-start">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Was this page helpful?
                      </p>
                      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
                        <button
                          type="submit"
                          className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                          data-response="yes"
                        >
                          Yes
                        </button>
                        <div className="bg-zinc-900/10 dark:bg-white/10"></div>
                        <button
                          type="submit"
                          className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                          data-response="no"
                        >
                          No
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      © Copyright 2023. All rights reserved.
                    </p>
                  </div>
                </footer>
              </main>
            </div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
