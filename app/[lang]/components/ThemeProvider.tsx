"use client";

import { initTheme, switchTheme } from "@/themes/utils";
import { PropsWithChildren, ReactNode, useEffect } from "react";

import Image from "next/image";
export default function ThemeProvider({
  children,
  topItems,
}: PropsWithChildren<{ topItems: ReactNode }>) {
  useEffect(initTheme, []);

  return (
    <>
      <div className="flex justify-between p-2">
        <div className="flex justify-between [&>*]:transition-all [&>*]:duration-1000">
          <div
            className={
              "h-9 w-20 rounded-full bg-blue-400 px-1 py-0.5  dark:bg-sky-950 [&>*]:transition-all [&>*]:duration-1000"
            }
            role="button"
            onClick={() => switchTheme()}
          >
            <div
              className={
                "w-18 relative ml-0 h-9 rounded-full dark:pl-9 [&>*]:transition-all [&>*]:duration-1000"
              }
            >
              <Image
                src={"/sun.svg"}
                alt="Sun"
                width={32}
                height={32}
                className="absolute dark:opacity-0"
              />
              <Image
                src={"/cloud.svg"}
                alt="Cloud"
                width={10}
                height={10}
                className="absolute left-8 top-1 motion-safe:animate-bounce dark:left-1 dark:opacity-0"
              />
              <Image
                src={"/cloud.svg"}
                alt="Cloud"
                width={10}
                height={10}
                className="absolute left-9 top-3 motion-safe:animate-bounce dark:left-0 dark:opacity-0"
              />
              <Image
                src={"/cloud.svg"}
                alt="Cloud"
                width={10}
                height={10}
                className="absolute right-2 top-2 motion-safe:animate-bounce dark:right-12 dark:opacity-0"
              />
              <Image
                src={"/cloud.svg"}
                alt="Cloud"
                width={10}
                height={10}
                className="absolute left-12 top-5 motion-safe:animate-bounce dark:left-0 dark:opacity-0"
              />
              <Image
                src={"/moon.svg"}
                alt="Moon"
                width={32}
                height={32}
                className="absolute opacity-0 dark:opacity-100"
              />
              <Image
                src={"/star.svg"}
                alt="Star"
                width={7}
                height={7}
                className="absolute bottom-7 left-10 opacity-0 dark:left-2 dark:animate-bounce dark:animate-pulse dark:opacity-100"
              />
              <Image
                src={"/star.svg"}
                alt="Star"
                width={7}
                height={7}
                className="absolute bottom-5 left-7 opacity-0 dark:left-6 dark:animate-bounce dark:animate-pulse dark:opacity-100"
              />
              <Image
                src={"/star.svg"}
                alt="Star"
                width={7}
                height={7}
                className="absolute bottom-4 left-10 opacity-0 dark:left-3 dark:animate-bounce dark:animate-pulse dark:opacity-100"
              />
              <Image
                src={"/star.svg"}
                alt="Star"
                width={7}
                height={7}
                className="absolute bottom-2 left-9 opacity-0 dark:left-7 dark:animate-bounce dark:animate-pulse dark:opacity-100"
              />{" "}
              <Image
                src={"/star.svg"}
                alt="Star"
                width={7}
                height={7}
                className="absolute bottom-2 left-9 opacity-0 dark:left-1 dark:animate-bounce dark:animate-pulse dark:opacity-100"
              />
            </div>
          </div>
        </div>
        {topItems}
      </div>

      {children}
    </>
  );
}
