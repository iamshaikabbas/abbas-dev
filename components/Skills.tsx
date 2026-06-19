const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "PostgreSQL",
  "MySQL",
  "Git",
  "GitHub",
  "Machine Learning",
  "Data Analytics",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white px-5 py-3 rounded-xl shadow-sm border"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}