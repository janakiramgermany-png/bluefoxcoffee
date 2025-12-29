import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import "./globals.css";

export const metadata = {
  title: "Blue Fox Coffee",
  description: "Crafted brews. Calm vibes. Your daily coffee ritual.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif",
          backgroundColor: "#ffffff",
          color: "#0f172a",
        }}
      >
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}