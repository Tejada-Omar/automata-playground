import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automata Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-orange-500 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold font-mono">Automata Playground</h1>
            <a
              href="https://github.com/Tejada-Omar/automata-playground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-mark/github-mark.svg"
                alt="Link to source code on Github"
                width={28}
                height={28}
                className="object-scale-down"
              />
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
