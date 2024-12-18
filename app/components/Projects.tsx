export function Projects() {
  const projects = [
    {
      name: "EHealth Technologies",
      description:
        "A health app (mobile and web) to connect health workers and patients",
      tech: "Node.js, PostgreSql, Nest.js, Cloud Architecture, Socket.io",
    },
    {
      name: "Oyeh School Managment Apps",
      description:
        "A school management application for school management, app for both parent, school admin and teachers",
      tech: "Electron.js, Node.js, PostgreSql, Flutter, Cloud Architecture,, Socket.io",
    },
    {
      name: "Resolut Finance",
      description: "Online banking app",
      tech: "Nest.js, PostgreSql, Cloud Architecture",
    },
    {
      name: "PMC",
      description:
        "A property management software for property owners and tenants",
      tech: "Flutter, LLM integration, Google Maps API, Cloud Architecture",
    },
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-gray-500 text-sm">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
