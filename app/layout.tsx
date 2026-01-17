import { ThemeProvider } from "../components/ui/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/web/navbar";
import Footer from "@/components/web/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.georgezorakis.com"),
  title: {
    default: "George Zorakis — Web Developer",
    template: "%s | George Zorakis",
  },
  description: "Personal portfolio website of George Zorakis, a web developer.",
  keywords: [
    "George Zorakis",
    "Web Developer",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "HTML",
  ],
  openGraph: {
    title: "George Zorakis — Web Developer",
    description:
      "Personal portfolio website of George Zorakis, a web developer.",
    url: "/",
    siteName: "George Zorakis Portfolio",
    images: [
      {
        url: "/georgezorakismetadata.jpg",
        width: 1200,
        height: 630,
        alt: "George Zorakis Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Zorakis — Web Developer",
    description:
      "Personal portfolio website of George Zorakis, a web developer.",
    images: ["/georgezorakismetadata.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Toaster />
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
