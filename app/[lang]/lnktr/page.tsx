import { getDictionary } from "@/get-dictionary";
import { PropsWithLocale } from "@/types/utils";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import LinkList from "./components/LinkList";

export default async function LinkTree({
  params: { lang },
}: PropsWithLocale<{}>) {
  const t = await getDictionary(lang);

  return (
    <main className="relative flex h-screen flex-col items-center dark:bg-gradient-to-t dark:from-pink-900 dark:to-background">
      <Image
        src="/avatar-dark.png"
        alt="Avatar"
        width={200}
        height={200}
        className="opacity-0 transition-all duration-1000 dark:rounded-full dark:opacity-100"
      />
      <div className="absolute top-0 flex w-full max-w-2xl justify-center bg-[url('/github_contribution.png')] bg-contain bg-no-repeat opacity-100 transition-all duration-1000 dark:opacity-0 ">
        <Image
          src="/avatar-light-removebg.png"
          alt="Avatar"
          width={200}
          height={200}
          className="rounded transition-all duration-1000 dark:rounded-full"
        />
      </div>
      <div className={"text-center opacity-100 dark:hidden dark:opacity-0"}>
        <h4 className="text-2xl font-bold">{t.lnktr.name}</h4>
        <p className="text-center text-sm">{t.lnktr.job}</p>
        <p className="wrap-balance my-3 px-2 text-center text-sm italic">
          <Balancer>{t.lnktr.title}</Balancer>
        </p>
        <div className="flex items-center justify-center gap-x-4 px-3">
          <LinkList currentTheme="light" />
        </div>
      </div>
      <div
        className={"hidden text-center opacity-0 dark:block dark:opacity-100"}
      >
        <h4 className="text-2xl font-bold">{t.lnktr.name}</h4>
        <p className="text-center text-sm">{t.lnktr.darkJob}</p>
        <p className="wrap-balance my-3 px-2 text-center text-sm italic">
          <Balancer>{t.lnktr.darkTitle}</Balancer>
        </p>
        <div className="flex items-center justify-center gap-x-4 px-3">
          <LinkList currentTheme="dark" />
        </div>
      </div>
      {/* <div className="flex justify-between gap-x-5 px-1"> */}
      {/*   <BtnSheetMusic>{t.lnktr.buyTab}</BtnSheetMusic> */}
      {/*   <Button variant="outlined" color="primary"> */}
      {/*     {t.lnktr.buyTab} */}
      {/*   </Button> */}
      {/* </div> */}
    </main>
  );
}
