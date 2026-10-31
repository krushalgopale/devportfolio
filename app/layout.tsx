import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { InitialLoader } from "@/components/initial-loader";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "700",
  style: "italic",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Krushal Gopale",
  description:
    "Krushal Gopale is a backend-focused software engineer building REST APIs and systems with Go, Python (Django), and PostgreSQL.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/krushal-favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/krushal-favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/krushal-favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)');var apply=function(t){var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t)};apply(s||(m.matches?'dark':'light'));m.addEventListener('change',function(e){if(!localStorage.getItem('theme'))apply(e.matches?'dark':'light')})}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <InitialLoader />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
