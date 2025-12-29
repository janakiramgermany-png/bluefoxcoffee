import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.4rem 2rem", // slightly taller navbar
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee Logo"
            width={64}   // 🔥 increased from 48 → 64
            height={64}
            priority
          />

          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#0f172a",
              whiteSpace: "nowrap",
            }}
          >
            Blue Fox Coffee
          </span>
        </Link>

        {/* Navigation */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
            margin: 0,
            padding: 0,
          }}
        >
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#334155",
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}