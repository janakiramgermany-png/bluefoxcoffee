import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        height: "98px",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
        }}
      >
        {/* LOGO ONLY */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee"
            width={72}      // adjust if needed (64–80 ideal)
            height={72}
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "#0f172a",
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}