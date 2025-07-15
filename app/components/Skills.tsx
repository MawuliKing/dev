export function Skills() {
  const skills = {
    Frontend: [{ name: "TypeScript" }, { name: "React" }],
    Backend: [
      { name: "NestJs" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Asp.net" },
    ],
    Mobile: [{ name: "Flutter" }],
    "Cloud & DevOps": [{ name: "Cloud Architecture" }, { name: "Firebase" }],
    Other: [{ name: "Socket.io" }, { name: "Google Maps API" }],
  };
  const softSkills = [
    "Team Leadership",
    "Mentoring",
    "Communication",
    "Problem Solving",
    "Continuous Learning",
    "Collaboration",
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Skills
      </h2>
      <div className="mb-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-2">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
