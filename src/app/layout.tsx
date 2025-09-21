import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alaine Vicedor - Digital Transformation Specialist",
  description: "Digital Transformation Specialist with 5+ years driving enterprise-scale digital initiatives across global banking and technology sectors. Expert in agile project management, cloud integration, and business-IT alignment.",
  keywords: "Digital Transformation, Business Analyst, Project Management, Cloud Integration, Agile, Scrum, AWS, Azure",
  authors: [{ name: "Alaine Vicedor" }],
  openGraph: {
    title: "Alaine Vicedor - Digital Transformation Specialist",
    description: "Digital Transformation Specialist with 5+ years driving enterprise-scale digital initiatives across global banking and technology sectors.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alaine Vicedor - Digital Transformation Specialist",
    description: "Digital Transformation Specialist with 5+ years driving enterprise-scale digital initiatives across global banking and technology sectors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('darkMode');
                if (savedTheme === 'true') {
                  document.documentElement.classList.add('dark');
                } else if (savedTheme === 'false') {
                  document.documentElement.classList.remove('dark');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
