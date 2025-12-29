import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Offset for fixed navbar */}
        <div className="pt-20">{children}</div>
      </body>
      <body style={{ paddingTop: "88px" }}>
  {children}
</body>
    </html>
  );
}