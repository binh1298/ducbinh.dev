import { PropsWithLocale } from "@/types/utils";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import ThemeProvider from "./components/ThemeProvider";
import LocaleSwitcher from "./components/locale-switcher";
import "./globals.css";

import { defaultTheme } from "@/themes/utils";
import { Cabin, Noto_Sans_SC, Roboto } from "next/font/google";
export const metadata: Metadata = {
  title: "Dante's App",
  description: "I'm just trying my best u know",
};

const en = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const vi = Cabin({
  weight: "400",
  subsets: ["vietnamese"],
});
const zh = Noto_Sans_SC({
  weight: "400",
  subsets: ["latin"],
});
const fontLanguages = {
  en: en,
  vi: vi,
  zh: zh,
} as const;

export default function RootLayout({
  children,
  params,
}: PropsWithLocale<PropsWithChildren<{}>>) {
  return (
    <html
      lang={params.lang}
      className={`${defaultTheme} transition-all duration-1000 ${
        fontLanguages[params.lang].className
      }`}
    >
      <body className="bg-background text-text transition-all duration-1000">
        <ThemeProvider topItems={<LocaleSwitcher />}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
