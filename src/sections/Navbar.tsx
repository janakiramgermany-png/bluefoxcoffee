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
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* BRAND */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee"
            width={44}
            height={44}
            style={{ display: "block" }}
            priority
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Blue Fox Coffee
          </span>
        </Link>

        {/* NAV */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "28px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  style={{
                    color: "#334155",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}