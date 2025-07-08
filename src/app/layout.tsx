import type { Metadata } from "next";
import { Geist_Mono, Sour_Gummy } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigator from "@/components/Navigator";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const geistSour = Sour_Gummy({
  variable: "--font-sour",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehan",
  description: "A book of me",
  icons: {
    icon: "/mehan.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSour.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex w-full justify-center items-center  font-sour text-lg overflow-y-auto flex-wrap ">
          <div className="w-full  md:w-4/5 flex flex-col gap-4 h-full p-4">
            <div className="flex flex-col gap-6 items-center h-full mt-10  ">
              <Navigator />
              {children}
              <div className="flex w-full h-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
