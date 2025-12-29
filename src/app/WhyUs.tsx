export default function WhyUs() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        backgroundColor: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "3rem" }}>
        Why Blue Fox?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {[
          "Ethically Sourced Beans",
          "Expert Baristas",
          "Relaxed Atmosphere",
        ].map((point) => (
          <div key={point}>
            <h3>{point}</h3>
            <p style={{ color: "#64748b", marginTop: "0.5rem" }}>
              Crafted with passion and precision.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}