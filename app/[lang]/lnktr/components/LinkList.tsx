import Image from "next/image";

const links: Record<
  "dark" | "light",
  { href: string; icon: string; size?: number }[]
> = {
  dark: [
    {
      href: "https://www.youtube.com/channel/UCdDGY6-reKrpJIBvdAaoNjg",
      icon: "/youtube.svg",
      size: 28,
    },
    {
      size: 32,
      href: "https://soundcloud.com/binh1298",
      icon: "/soundcloud.svg",
    },

    {
      href: "https://www.tiktok.com/@dante.means.enduring",
      icon: "/tiktok.svg",
      size: 22,
    },
    {
      href: "https://www.facebook.com/namconvitxoerasaucaicanh/",
      icon: "/facebook-white.svg",
    },
  ],
  light: [
    { href: "https://github.com/binh1298", icon: "/github.svg" },
    { href: "https://www.linkedin.com/in/binh1298", icon: "/linkedin.svg" },
    { href: "https://www.facebook.com/binh1298", icon: "/facebook.svg" },
  ],
};
export default function LinkList({
  currentTheme,
}: {
  currentTheme: "dark" | "light";
}) {
  return links[currentTheme].map(({ href, icon, size = 24 }) => (
    <a href={href} key={href} target="_blank">
      <Image src={icon} width={size} height={size} alt="Facebook" />
    </a>
  ));
}
