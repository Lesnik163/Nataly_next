import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Процедуры",
  description: "Procedures",
};

export default function ProceduresLayout({
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