"use client";

import { applyTheme } from "@/themes/utils";
import { PropsWithChildren, useEffect, useState } from "react";

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useState<Parameters<typeof applyTheme>[0]>("night");

  useEffect(() => {
    applyTheme("night", "pastel");
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setTheme("night");
          applyTheme("night", "pastel");
        }}
      >
        Night
      </button>
      <button
        onClick={() => {
          setTheme("pastel");
          applyTheme("pastel", "night");
        }}
      >
        Pastel
      </button>
      {children}
    </>
  );
}
