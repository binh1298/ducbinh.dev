import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dante's App",
  description: "I'm just trying my best u know",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
