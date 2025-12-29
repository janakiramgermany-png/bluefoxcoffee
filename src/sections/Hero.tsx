export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        padding: "6rem 2rem 4rem",
        backgroundColor: "#f9fbfd",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#0f172a",
            marginBottom: "1.2rem",
            letterSpacing: "-0.02em",
          }}
        >
          Blue Fox Coffee
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "#475569",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          Crafted brews. Calm vibes. Your daily coffee ritual.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <button
            style={{
              padding: "0.9rem 2.2rem",
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
              padding: "0.9rem 2.2rem",
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