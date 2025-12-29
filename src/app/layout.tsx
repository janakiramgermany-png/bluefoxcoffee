import "./globals.css";
import Navbar from "@/sections/Navbar";

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
      </body>
    </html>
  );
}