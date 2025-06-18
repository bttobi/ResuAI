import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/react-query-provider";

export const metadata: Metadata = {
  title: "ResuAI",
  description: "Smart resumes, powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
