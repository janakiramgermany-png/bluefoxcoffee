import "./globals.css";

export const metadata = {
  title: "Blue Fox Coffee",
  description: "Crafted brews. Calm vibes. Your daily coffee ritual.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* HARD FAVICON OVERRIDE */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}