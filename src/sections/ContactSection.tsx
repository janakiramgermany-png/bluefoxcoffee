export default function ContactSection() {
  return (
    <section className="fade-in" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.6rem", marginBottom: "2rem" }}>
          Visit Us
        </h2>

        <div style={{ display: "grid", gap: "2rem" }}>
          {/* Address */}
          <div>
            <h3>📍 Address</h3>
            <p style={text}>
              <strong>BlueFox Coffee</strong>
              <br />
              Kantstr 36, 10625
              <br />
              Berlin, Germany
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3>⏰ Opening Hours</h3>
            <p style={text}>Mon – Fri: 8:00 AM – 10:00 PM</p>
            <p style={text}>Sat – Sun: 9:00 AM – 11:00 PM</p>
          </div>

          {/* Contact */}
          <div>
            <h3>📞 Contact</h3>
            <p style={text}>Phone: +49 176 85678615</p>
          </div>

          {/* Google Map */}
          <iframe
            title="BlueFox Coffee Location"
            src="https://www.google.com/maps?q=Kantstr%2036%2C%2010625%2C%20Berlin&output=embed"
            style={{
              width: "100%",
              height: "320px",
              border: 0,
              borderRadius: "10px",
              marginTop: "1.5rem",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

const text = {
  fontSize: "1rem",
  color: "#475569",
  lineHeight: 1.6,
};