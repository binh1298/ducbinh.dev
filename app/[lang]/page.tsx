import { getDictionary } from "@/get-dictionary";
import { PropsWithLocale } from "@/types/utils";

export default async function IndexPage({
  params: { lang },
}: PropsWithLocale<{}>) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <p>
        This text is rendered on the server: {dictionary["app"].description}
      </p>
    </div>
  );
}
