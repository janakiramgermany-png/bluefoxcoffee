import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.6rem 2rem", // taller navbar
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
            gap: "1.2rem",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee"
            width={96}   // 🔥 BIG, clean, professional
            height={96}
            priority
          />

          <span
            style={{
              fontSize: "1.6rem",
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
            gap: "2.5rem",
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