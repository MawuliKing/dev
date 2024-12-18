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
      <div className="mt-3">
        <p className="text-gray-600">Thank you for visiting my portfolio!</p>
        <p className="text-gray-600">
          Portfolio source code here:
          <a
            href="https://github.com/MawuliKing/dev"
            target="_blank"
            className="ms-2 text-sm font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg"
          >
            https://github.com/MawuliKing/dev
          </a>
        </p>
        <p className="text-gray-600">Best regards, John Emil Modzaka</p>
      </div>
    </section>
  );
}
