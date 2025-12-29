export default function Hero() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
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
            fontSize: "3rem",
            fontWeight: 600,
            color: "#0f172a",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Blue Fox Coffee
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: "#475569",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Crafted brews. Calm vibes. Your daily coffee ritual.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          <button
            style={{
              padding: "0.8rem 2rem",
              backgroundColor: "#1565c0",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            View Menu
          </button>

          <button
            style={{
              padding: "0.8rem 2rem",
              backgroundColor: "transparent",
              color: "#1565c0",
              border: "1px solid #1565c0",
              borderRadius: "6px",
              fontSize: "0.95rem",
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