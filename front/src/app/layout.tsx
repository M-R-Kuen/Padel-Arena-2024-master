import type { Metadata } from "next";

import "./globals.css";
import NavBarComponent from "@/components/HeaderComponents/NavBarComponent/NavBarComponent";
import BackGroudComponent from "@/components/GeneralComponents/BackGroudComponent/BackGroudComponent";
import Footer from "@/components/FooterComponent/Footer";
import GlobalContext from "@/context/GlobalContext";
import SessionWrapper from "@/auth/SessionWrapper";

export const metadata: Metadata = {
  title: "Padel Arena",
  description: "Generated by Henry students",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "32x32",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <GlobalContext>
          <body className="relative flex flex-col justify-between min-h-screen sfRegular bg-white-200 max-h-fit">
            <BackGroudComponent />
            <header className="flex justify-center w-full">
              <NavBarComponent />
            </header>
            <main>{children}</main>
            <Footer />
          </body>
        </GlobalContext>
      </SessionWrapper>
    </html>
  );
}