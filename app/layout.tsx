import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinite Scroll",
  description: "Nuxt 13 | Infinite Scroll"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
