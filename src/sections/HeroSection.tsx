export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          color: "#1565c0",
          marginBottom: "1rem",
        }}
      >
        Blue Fox Coffee
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          color: "#333",
        }}
      >
        Crafted brews. Calm vibes. Your daily coffee ritual.
      </p>
    </section>
  );
}