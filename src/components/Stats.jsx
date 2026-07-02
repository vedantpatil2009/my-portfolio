import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "15+",
      title: "Projects Completed",
    },
    {
      number: "10+",
      title: "Technologies",
    },
    {
      number: "100%",
      title: "Responsive Design",
    },
    {
      number: "1+",
      title: "Years Learning",
    },
  ];

  return (
    <section className="stats" id="stats">
      <h2>My Achievements</h2>

      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h1>{item.number}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;