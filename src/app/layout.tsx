import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoFinance",
  description: "GoFinance is a web application that allows you to track your expenses and income.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
