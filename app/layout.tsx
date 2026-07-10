import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Manrope,
  Space_Mono,
} from "next/font/google";
import { dictionaries } from "@/data/dictionary";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: dictionaries.EN.meta.title,
  description: dictionaries.EN.meta.description,
  metadataBase: new URL("https://detailingstudio.ca"),
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
