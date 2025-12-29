import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "calc(100vh - 96px)", // accounts for navbar height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fbfd",
        padding: "4rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* BIG BRAND LOGO */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee"
            width={772}              // ✅ Your requested size
            height={772}
            priority
            style={{
              maxWidth: "100%",     // responsive safety
              height: "auto",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            color: "#475569",
            maxWidth: "640px",
            margin: "0 auto 2.8rem",
          }}
        >
          Crafted brews. Calm vibes. Your daily coffee ritual.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "0.95rem 2.4rem",
              backgroundColor: "#1565c0",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            View Menu
          </button>

          <button
            style={{
              padding: "0.95rem 2.4rem",
              backgroundColor: "transparent",
              color: "#1565c0",
              border: "1px solid #1565c0",
              borderRadius: "6px",
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Visit Us
          </button>
        </div>
      </div>
    </section>
  );
}