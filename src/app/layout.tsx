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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}