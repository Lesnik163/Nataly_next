import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Services",
};

export default function ServicesLayout({
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