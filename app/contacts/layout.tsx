import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Contacts",
};

export default function ContactsLayout({
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