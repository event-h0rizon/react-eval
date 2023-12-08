import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "File Manager",
  description: "By Karthik P",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen, bg-zinc-900 text-white", inter.className)}
      >
        <header className="py-8 px-4 bg-green-600">
          <h2 className="font-bold">File Manager</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
