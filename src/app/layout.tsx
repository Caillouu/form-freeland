import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google'

import "./css/globals.scss";
import "../../node_modules/avalanche-css/avalanche.min.css";
import "./css/breakpoints.scss";
import "./css/components/btn.scss";
import "./css/components/bk-number.scss";
import "./css/components/bk-card.scss";
import "./css/components/bk-form.scss";

const worksans = Work_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "ITG",
  description: "ITG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${worksans.className}`}>
        {children}
      </body>
    </html>
  );
}
