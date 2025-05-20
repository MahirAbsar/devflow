import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/naviagtion/navbar";

const inter = localFont({
  src: "../public/fonts/interVF.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
  variable: "--font-inter",
});

const spaceGrotesk = localFont({
  src: "../public/fonts/spaceGroteskVF.ttf",
  weight: "300 400 500 600 700",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
