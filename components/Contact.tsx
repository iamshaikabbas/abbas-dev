
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-4 text-slate-600">
          Open to internships, graduate roles,
          and entry-level opportunities.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="mailto:iamshaikabbas2005@gmail.com"
            className="px-5 py-3 border rounded-xl hover:bg-white transition"
          >
            📧 Email
          </a>

          <a
            href="https://github.com/iamshaikabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border rounded-xl hover:bg-white transition"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shaik-abbas-a5a723287/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border rounded-xl hover:bg-white transition"
          >
            🔗 LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

