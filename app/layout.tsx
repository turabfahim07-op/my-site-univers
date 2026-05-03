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
