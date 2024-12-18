export function Contact() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
      <p className="text-gray-600 mb-4">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <div className="flex space-x-4">
        <a
          href="mailto:mawuli098@gmail.com"
          className="text-gray-600 hover:text-gray-800"
        >
          Email
        </a>
        <a
          href="https://github.com/MawuliKing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          GitHub
        </a>
        <a
          href="https://x.com/emil_mod"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
