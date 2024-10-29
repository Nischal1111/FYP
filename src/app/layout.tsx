import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from "next/font/google"
import { Provider } from "@/provider/Provider";
import Head from "next/head";
import Sidebar from "@/shared/Sidebar";

const poppins=Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display:"swap"
})

export const metadata: Metadata = {
  title: "Our Space - A collaborative space",
  description: "Our Space - A collaborative space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Luxury Escapes Nepal" />
        <title>Luxury Escapes Nepal</title>
      </Head>
      <body className={poppins.className}>
          <div className="mx-auto max-w-[2000px] bg-white text-black">
            <Provider>
              <Sidebar/>
              <main className={`${poppins.className}`}>
                {children}
              </main>
            </Provider>
          </div>
      </body>
    </html>
  );
}
