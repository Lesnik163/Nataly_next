import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const roboto = Roboto({ style: ['normal'], weight: ['400', '700'], subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={roboto.className}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
