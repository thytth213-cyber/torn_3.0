export default function Stats() {
  return (
    <div className="container section">
      <div className="kicker">Stats</div>
      <h2 className="h2">Results & numbers (Preview)</h2>
      <p className="lead">Sau này mình sẽ gắn counter animation + API.</p>

      <div className="grid stats-grid" style={{ marginTop: 18 }}>
        {[
          { n: "25+", t: "Projects delivered" },
          { n: "97%", t: "Client satisfaction" },
          { n: "8K", t: "Monthly visits" },
          { n: "19K", t: "Qualified leads" },
        ].map((x) => (
          <div key={x.t} className="card stat hover-up">
            <div className="circle">
              <div className="num">{x.n}</div>
            </div>
            <p>{x.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}