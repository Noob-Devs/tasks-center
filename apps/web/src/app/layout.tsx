import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@tasks-center/ui/global.css";
import NextAuthSessionProvider from "../providers/session.provider";
import { ThemeProvider } from "@tasks-center/ui/theme/theme.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasks Center",
  description: "Gerenciador de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthSessionProvider>
      <ThemeProvider disableTransitionOnChange>
        <html lang="pt-br" className="h-screen ">
          <body className={`${inter.className} h-screen`}>{children}</body>
        </html>
      </ThemeProvider>
    </NextAuthSessionProvider>
  );
}
