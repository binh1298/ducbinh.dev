"use client";

import { i18n } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mapLocale = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文",
} as const;

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex items-center">
      {i18n.locales.map((locale, index) => {
        return (
          <li key={locale} className="pl-1 text-base">
            <Link href={redirectedPathName(locale)}>{mapLocale[locale]}</Link>
            {index < i18n.locales.length - 1 ? " |" : ""}
          </li>
        );
      })}
    </ul>
  );
}
