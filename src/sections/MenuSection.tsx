const MENU = [
  {
    category: "Hot Coffee",
    items: [
      { name: "Espresso", price: "₹120", desc: "Strong and bold shot" },
      { name: "Cappuccino", price: "₹180", desc: "Foamy & balanced" },
      { name: "Latte", price: "₹190", desc: "Smooth & creamy" },
    ],
  },
  {
    category: "Cold Coffee",
    items: [
      { name: "Cold Brew", price: "₹200", desc: "Slow brewed, smooth" },
      { name: "Iced Latte", price: "₹210", desc: "Chilled & refreshing" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section style={{ padding: "6rem 2rem", background: "#f9fbfd" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            marginBottom: "4rem",
          }}
        >
          Our Menu
        </h1>

        {MENU.map((group) => (
          <div key={group.category} style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "0.5rem",
              }}
            >
              {group.category}
            </h2>

            <div style={{ display: "grid", gap: "1.5rem" }}>
              {group.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "1.2rem",
                    background: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div>
                    <h3 style={{ marginBottom: "0.3rem" }}>{item.name}</h3>
                    <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
                      {item.desc}
                    </p>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}