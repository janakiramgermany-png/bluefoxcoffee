import Image from "next/image";

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
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Image
          src="/logo/blue-fox-coffee.png"
          alt="Blue Fox Coffee"
          width={220}
          height={60}
          priority
          unoptimized
          style={{
            display: "block",
            filter: "contrast(1.2)",
          }}
        />

        {/* NAV */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              color: "#111827",
              fontWeight: 500,
            }}
          >
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}