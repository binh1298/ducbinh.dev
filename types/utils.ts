import { Locale } from "@/i18n-config";

export type PropsWithLocale<T> = T & {
  params: {
    lang: Locale;
  };
};
