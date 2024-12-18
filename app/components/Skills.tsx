export function Skills() {
  const skills = [
    "TypeScript",
    "React",
    "NestJs",
    "Express",
    "PostgreSQL",
    "Flutter",
    "Cloud Architecture",
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
