export default function FeaturedMenu() {
  return (
    <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.2rem", marginBottom: "3rem" }}>
        Customer Favorites
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {["Espresso", "Cappuccino", "Cold Brew"].map((item) => (
          <div
            key={item}
            style={{
              padding: "2rem",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
            }}
          >
            <h3>{item}</h3>
            <p style={{ color: "#64748b", marginTop: "0.5rem" }}>
              Rich. Smooth. Perfectly brewed.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}