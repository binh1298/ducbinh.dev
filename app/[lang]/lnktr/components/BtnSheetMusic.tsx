"use client";

import Button from "@/components/Button";
import { PropsWithChildren } from "react";
import SheetMusic from "./SheetMusic";

export default function BtnSheetMusic({ children }: PropsWithChildren<{}>) {
  return (
    <Button
      variant="contained"
      color="primary"
      className="mr-5"
      onClick={() => console.log("HAHAH")}
    >
      <SheetMusic className="h-4 w-4 fill-text" /> {children}
    </Button>
  );
}
