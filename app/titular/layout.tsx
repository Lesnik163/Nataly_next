import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Main Page",
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
};