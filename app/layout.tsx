import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Next.js Hackathon 2025',
  description: 'Next.js Hackathon 2025',
};


const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}