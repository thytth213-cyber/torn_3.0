export default function Pricing() {
  return (
    <section className="section soft" id="pricing">
      <div className="container">
        <div className="kicker">Pricing</div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
          <h2 className="h2">Choose the right plan</h2>
          <p className="lead" style={{ maxWidth: "70ch", margin: 0 }}>
            Trang Pricing preview.
          </p>
        </div>

        <div className="grid pricing-grid">
          <div className="card price hover-up">
            <div className="top">
              <h3>Starter</h3>
              <div className="money">$99 <span>/ project</span></div>
              <div className="kicker">Best for a simple landing page</div>
            </div>
            <ul>
              <li><i className="fa-solid fa-check"></i> 1 landing page</li>
              <li><i className="fa-solid fa-check"></i> Responsive layout</li>
              <li><i className="fa-solid fa-check"></i> Basic optimization</li>
              <li><i className="fa-solid fa-check"></i> 1 month warranty</li>
            </ul>
            <div className="act">
              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Select plan
              </button>
            </div>
          </div>

          <div className="card price featured">
            <span className="ribbon">Popular</span>
            <div className="top">
              <h3>Standard</h3>
              <div className="money">$249 <span>/ project</span></div>
              <div className="kicker">Corporate website package</div>
            </div>
            <ul>
              <li><i className="fa-solid fa-check"></i> 5 pages</li>
              <li><i className="fa-solid fa-check"></i> Hero slider + animations</li>
              <li><i className="fa-solid fa-check"></i> Basic technical SEO</li>
              <li><i className="fa-solid fa-check"></i> 6 months warranty</li>
            </ul>
            <div className="act">
              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Select plan
              </button>
            </div>
          </div>

          <div className="card price hover-up">
            <div className="top">
              <h3>Premium</h3>
              <div className="money">$499 <span>/ project</span></div>
              <div className="kicker">Dashboard / integrations</div>
            </div>
            <ul>
              <li><i className="fa-solid fa-check"></i> Advanced UI/UX</li>
              <li><i className="fa-solid fa-check"></i> Basic admin panel</li>
              <li><i className="fa-solid fa-check"></i> API integrations</li>
              <li><i className="fa-solid fa-check"></i> 12 months warranty</li>
            </ul>
            <div className="act">
              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Select plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}