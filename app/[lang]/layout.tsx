import { PropsWithLocale } from "@/types/utils";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import ThemeProvider from "./components/ThemeProvider";
import LocaleSwitcher from "./components/locale-switcher";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dante's App",
  description: "I'm just trying my best u know",
};

export default function RootLayout({
  children,
  params,
}: PropsWithLocale<PropsWithChildren<{}>>) {
  return (
    <html lang={params.lang}>
      <body className="transition-all duration-1000 dark:bg-slate-950 dark:text-white">
        <ThemeProvider topItems={<LocaleSwitcher />}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
