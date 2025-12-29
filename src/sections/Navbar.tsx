import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#1f2933",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}