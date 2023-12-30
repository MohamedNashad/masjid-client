import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProviders } from "../chakra-ui/chakra-providers";
import { Providers } from "@/redux/provider";
import '@progress/kendo-theme-default/dist/all.css';

export const metadata: Metadata = {
  title: "workment",
  description: "track your workforce with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ChakraProviders>{children}</ChakraProviders>
        </Providers>
      </body>
    </html>
  );
}
