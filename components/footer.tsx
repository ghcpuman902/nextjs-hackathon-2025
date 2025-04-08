import { ThemeToggle } from "@/components/theme-toggle";
import { Suspense } from "react";
import Link from "next/link";
import { PageMetrics } from "@/components/page-metrics";

export async function Footer() {
  return (
    <footer
      className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-8 mb-0 pb-0 px-2"
    >
      <div className="text-base font-mono text-zinc-400 dark:text-zinc-500 text-center">
      <Suspense fallback={<div>Loading metrics...</div>}>
        <PageMetrics />
      </Suspense>
      </div>
      <div className="w-full pt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-12">
        <div className="flex flex-col gap-4">
          <p className="text-base font-mono text-zinc-400 dark:text-zinc-500 text-center md:text-left [line-height:1rem] md:[line-height:1.25rem]">
            Made by <Link href="https://github.com/ghcpuman902">@ghcpuman902</Link>, <Link href="https://github.com/tonidy">@tonidy</Link> and <Link href="https://github.com/nikhils4">@nikhils4</Link> for the Next.js Global Hackathon 2025.
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex justify-center md:justify-end items-center">
            <ThemeToggle />
          </div>
        </Suspense>
      </div>
    </footer>
  );
}
