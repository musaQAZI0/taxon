import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/taxon-logo-v2.png", shortcut: "/taxon-logo-v2.png", apple: "/taxon-logo-v2.png" },
  title: {
    default: "Taxon — Legal & Tax Experts You Can Trust.",
    template: "%s · Taxon",
  },
  description:
    "Smart, reliable & transparent tax services across Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
