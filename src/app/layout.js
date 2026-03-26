import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "FITFAM FITNESS | Egattur's Most Trusted Training Hub",
  description: "Transform your body at OMR's premium boutique gym in Egattur. Expert trainers, modern equipment, and a elite community.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-[#0A0A0A]`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
