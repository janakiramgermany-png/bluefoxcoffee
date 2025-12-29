export default function Hero() {
  return (
    <section
      style={{
        padding: "7rem 2rem 6rem",
        backgroundColor: "#f9fbfd",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: 600,
          color: "#0f172a",
          marginBottom: "1.25rem",
        }}
      >
        Blue Fox Coffee
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#475569",
          maxWidth: "600px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
        }}
      >
        Crafted brews. Calm vibes. Your daily coffee ritual.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        <button
          style={{
            padding: "0.9rem 2.2rem",
            backgroundColor: "#1565c0",
            color: "#fff",
            borderRadius: "6px",
            border: "none",
            fontSize: "0.95rem",
            cursor: "pointer",
          }}
        >
          View Menu
        </button>

        <button
          style={{
            padding: "0.9rem 2.2rem",
            border: "1px solid #1565c0",
            color: "#1565c0",
            borderRadius: "6px",
            background: "transparent",
            fontSize: "0.95rem",
            cursor: "pointer",
          }}
        >
          Visit Us
        </button>
      </div>
    </section>
  );
}