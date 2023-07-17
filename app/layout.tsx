import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";
import type { Metadata } from "next";
import PrivateRouter from "@/components/PrivateRouter/PrivateRouter";
import { FilterContextProvider } from "@/context/FilterContext";

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
        <AuthContextProvider>
          <FilterContextProvider>
            <PrivateRouter>{children}</PrivateRouter>
          </FilterContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
