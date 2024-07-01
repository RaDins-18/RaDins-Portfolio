import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "RaDin's Portfolio Website",
  description: "RaDin's Portfolio Website Created By RaDin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={jetbrainsMono.variable} suppressHydrationWarning={true}>
        <Header /> 
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
};