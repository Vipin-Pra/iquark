import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iQuark - Premier Coaching for IIT-JEE, NEET & Olympiads",
  description: "Expert coaching for competitive exams including IIT-JEE, NEET, and Olympiads. Join India's top coaching institute with personalized attention and proven results.",
  keywords: "IIT-JEE coaching, NEET preparation, Olympiad training, competitive exam coaching, online coaching, physics coaching, chemistry coaching, mathematics coaching",
  authors: [{ name: "iQuark" }],
  openGraph: {
    title: "iQuark - Premier Coaching for IIT-JEE, NEET & Olympiads",
    description: "Expert coaching for competitive exams with proven results",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
