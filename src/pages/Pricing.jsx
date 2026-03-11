export default function Contact() {
  return (
    <section className="section soft" id="contact">
      <div className="container">
        <div className="kicker">Contact</div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
          <h2 className="h2">Request a consultation</h2>
          <p className="lead" style={{ maxWidth: "70ch", margin: 0 }}>
            Demo form (chưa có backend).
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 18 }}>
          <div className="card card-pad hover-up">
            <h3 style={{ fontSize: 18 }}>Contact details</h3>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              <i className="fa-solid fa-location-dot"></i> Hanoi, Vietnam<br />
              <i className="fa-solid fa-phone"></i> +84 900 000 000<br />
              <i className="fa-solid fa-envelope"></i> contact@tornado.vn
            </p>
          </div>

          <div className="card card-pad hover-up">
            <h3 style={{ fontSize: 18 }}>Send a message</h3>
            <form
              style={{ marginTop: 10, display: "grid", gap: 10 }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Submitted (demo)!");
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <input required placeholder="Full name" style={{ padding: "12px", borderRadius: 12, border: "1px solid var(--line)" }} />
                <input required placeholder="Phone number" style={{ padding: "12px", borderRadius: 12, border: "1px solid var(--line)" }} />
              </div>
              <input placeholder="Email (optional)" style={{ padding: "12px", borderRadius: 12, border: "1px solid var(--line)" }} />
              <textarea rows="4" placeholder="Your message..." style={{ padding: "12px", borderRadius: 12, border: "1px solid var(--line)", resize: "vertical" }} />
              <button className="btn btn-primary" type="submit" style={{ justifyContent: "center" }}>
                <i className="fa-solid fa-paper-plane"></i> Send request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}