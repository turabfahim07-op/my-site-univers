import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahim Search Engine",
  description: "Il motore di ricerca dell'universo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
} 
export const metadata = {
  title: 'Fahim Search Engine',
  description: 'Il mio motore di ricerca personale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
