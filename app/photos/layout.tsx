import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотографии",
  description: "Photos",
};

export default function PhotoLayout({
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