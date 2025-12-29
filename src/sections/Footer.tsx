export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        marginTop: "4rem",
        borderTop: "1px solid #e5e7eb",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#64748b",
      }}
    >
      © {new Date().getFullYear()} Blue Fox Coffee · Berlin
    </footer>
  );
}