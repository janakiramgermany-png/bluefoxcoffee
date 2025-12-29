export default function MenuSection() {
  return (
    <section style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.6rem", marginBottom: "2rem" }}>
        Menu
      </h1>

      <ul style={{ fontSize: "1.1rem", lineHeight: 2 }}>
        <li>Espresso</li>
        <li>Americano</li>
        <li>Cappuccino</li>
        <li>Latte</li>
        <li>Cold Brew</li>
      </ul>
    </section>
  );
}