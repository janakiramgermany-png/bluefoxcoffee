import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "88px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee"
            width={56}
            height={56}
            priority
            style={{
              display: "block",
              opacity: 1,
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#0f172a",
            }}
          >
            Blue Fox Coffee
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "32px",
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