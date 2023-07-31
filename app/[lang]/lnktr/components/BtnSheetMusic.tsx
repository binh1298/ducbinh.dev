"use client";

import Button from "@/components/Button";
import { PropsWithChildren } from "react";
import SheetMusic from "./SheetMusic";

export default function BtnSheetMusic({ children }: PropsWithChildren<{}>) {
  return (
    <Button
      variant="contained"
      color="primary"
      Icon={SheetMusic}
      onClick={() => console.log("HAHAH")}
    >
      {children}
    </Button>
  );
}
