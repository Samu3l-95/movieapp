import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Movie APP",
  description: "Movies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt">
      <body>
          {children}
      </body>
    </html>
  );
}
