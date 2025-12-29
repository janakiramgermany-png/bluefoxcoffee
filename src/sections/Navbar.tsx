import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        padding: "1.2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Image
          src="/logo/logo.png"
          alt="Blue Fox Coffee"
          width={40}
          height={40}
        />
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#1565c0",
          }}
        >
          Blue Fox Coffee
        </span>
      </div>

      {/* Navigation */}
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <li
              key={item}
              style={{
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "#333",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}