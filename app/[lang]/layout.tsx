import "./globals.css";
import type { Metadata } from "next";
import LocaleSwitcher from "./components/locale-switcher";
import { PropsWithLocale } from "@/types/utils";
import { PropsWithChildren } from "react";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Dante's App",
  description: "I'm just trying my best u know",
};

export default function RootLayout({
  children,
  params,
}: PropsWithLocale<PropsWithChildren<{}>>) {
  return (
    <html lang={params.lang} className="bg-slate-950 text-white">
      <body>
        <ThemeProvider>
          <>
            <LocaleSwitcher />
            {children}
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
