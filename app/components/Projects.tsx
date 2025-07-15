export function Projects() {
  const projects = [
    {
      name: "Oyeh",
      description:
        "A school management application for school management, app for both parent, school admin and teachers.",
      tech: "Electron.js, Node.js, PostgreSql, Flutter, Cloud Architecture, Socket.io",
      role: "CTO & Lead Developer",
      impact:
        "Led the end-to-end development, resulting in adoption by 5+ schools and improved communication between parents, teachers, and admins.",
      challenge:
        "Designed a real-time notification system for multiple user roles.",
      link: null,
      techNote:
        "Leveraged Electron for cross-platform desktop support and Socket.io for real-time updates.",
    },
    {
      name: "Petite Elise Mobile App",
      description: "A mobile app for a daycare center.",
      tech: "Flutter, Cloud Architecture, Firebase, MySql",
      role: "Mobile App Developer",
      impact:
        "Delivered a user-friendly app for parents to track their children's activities and communicate with staff.",
      challenge: "Integrated secure photo sharing and real-time updates.",
      link: null,
      techNote:
        "Flutter enabled rapid cross-platform development; Firebase for real-time data sync.",
    },
    {
      name: "Resolut Finance",
      description: "Backend development for an online banking system.",
      tech: "Asp.net, Sql Server, Cloud Architecture",
      role: "Backend Engineer",
      impact:
        "Built robust APIs and ensured high security standards for financial transactions.",
      challenge:
        "Implemented multi-factor authentication and transaction auditing.",
      link: null,
      techNote: "Chose ASP.NET for enterprise-grade security and scalability.",
    },
    {
      name: "PMC",
      description:
        "A property management software for property owners and tenants.",
      tech: "Flutter, LLM integration, Google Maps API, Cloud Architecture",
      role: "Full Stack Developer",
      impact:
        "Enabled seamless property listings, tenant management, and AI-powered support.",
      challenge:
        "Integrated LLMs for smart tenant support and automated responses.",
      link: null,
      techNote:
        "Used Google Maps API for geolocation and LLMs for AI-driven features.",
    },
    {
      name: "Mempay",
      description:
        "A payment collection platform for organizations and groups.",
      tech: "React, Cloud Architecture, MySql, Node.js, Nest.js",
      role: "Backend & Cloud Architect",
      impact:
        "Streamlined payment processes for multiple organizations, handling thousands of transactions.",
      challenge: "Ensured PCI compliance and high availability.",
      link: null,
      techNote:
        "Nest.js provided a modular backend; cloud infra for scalability.",
    },
    {
      name: "Grandmaster Technologies",
      description:
        "A platform for managing and tracking sales and inventory from agents across the country.",
      tech: "React, Flutter, Cloud Architecture, MySql, Nest.js",
      role: "Lead Developer",
      impact:
        "Built a scalable system supporting hundreds of agents and real-time inventory tracking.",
      challenge: "Handled offline data sync and real-time reporting.",
      link: null,
      techNote:
        "Combined React and Flutter for web/mobile reach; cloud for reliability.",
    },
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2 uppercase">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {project.description}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
              {project.tech}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              <strong>Role:</strong> {project.role}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              <strong>Impact:</strong> {project.impact}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              <strong>Challenge:</strong> {project.challenge}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline text-sm mb-1 block"
              >
                View Project
              </a>
            )}
            <p className="text-gray-500 dark:text-gray-400 text-xs italic">
              {project.techNote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
