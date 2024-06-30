import type { Metadata } from "next";
import "@/style/globals.css";

import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import ScrollToTop from "@/ui/scroll-to-top/scroll-to-top";

export const metadata: Metadata = {
  title: "提升科技素養與優化教育實習之科技領域次專長師資培育",
  description: "提升科技素養與優化教育實習之科技領域次專長師資培育",
  verification: {
    google: "85yumPBIRFts2C9AEo2fwmoGAxCwnaCFQ5R_pIV2S-U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
