import type { Metadata } from "next";
import ThemeProvider from "./theme-provider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Premium Calculator",
  description: "Free modern online calculator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
         <Navbar />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
