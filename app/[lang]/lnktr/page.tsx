import Button from "@/components/Button";
import { getDictionary } from "@/get-dictionary";
import { PropsWithLocale } from "@/types/utils";
import Image from "next/image";
import BtnSheetMusic from "./components/BtnSheetMusic";

export default async function LinkTree({
  params: { lang },
}: PropsWithLocale<{}>) {
  const t = await getDictionary(lang);
  return (
    <main className="container mx-auto flex flex-col items-center">
      <Image
        src="/avatar.png"
        alt="Avatar"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h3 className="text-2xl font-bold">{t.lnktr.name}</h3>
      <div className="flex justify-between px-1">
        <BtnSheetMusic>{t.lnktr.buyTab}</BtnSheetMusic>
        <Button variant="outlined" color="primary">
          {t.lnktr.buyTab}
        </Button>
      </div>
    </main>
  );
}
