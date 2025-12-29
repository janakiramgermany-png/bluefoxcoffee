import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Providers from "./providers";
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
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}