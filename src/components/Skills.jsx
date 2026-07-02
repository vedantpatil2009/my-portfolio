import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React JS", level: "80%" },
    { name: "Bootstrap", level: "85%" },
    { name: "Java", level: "75%" },
    { name: "MySQL", level: "80%" },
    { name: "Git & GitHub", level: "85%" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;