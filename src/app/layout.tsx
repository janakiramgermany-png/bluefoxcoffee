import "./globals.css";
import Navbar from "@/sections/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#f9fbfd",
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}