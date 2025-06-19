import type { Metadata } from "next";
import { Poppins, Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedAI Assistant - AI-Powered Health Assistant",
  description:
    "Your intelligent health companion for symptoms, nutrition, and medical insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sourceCodePro.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main
          //  className="min-h-screen"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
