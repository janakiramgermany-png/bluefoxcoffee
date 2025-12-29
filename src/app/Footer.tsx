export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid #e5e7eb",
        color: "#64748b",
        fontSize: "0.9rem",
      }}
    >
      © {new Date().getFullYear()} Blue Fox Coffee. All rights reserved.
    </footer>
  );
}