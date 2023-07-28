import { getDictionary } from "@/get-dictionary";
import { PropsWithLocale } from "@/types/utils";
import Image from "next/image";

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
      <h3 className="text-2xl font-bold text-primary">{t.lnktr.name}</h3>
      <button className="decoration-primary">Wassup</button>
    </main>
  );
}
