import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "CapsNews",
  description: "Página inicial do CapsNews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
