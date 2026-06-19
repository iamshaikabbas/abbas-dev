export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <a
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            bg-emerald-100
            text-emerald-700
            px-4
            py-2
            rounded-xl
            hover:bg-emerald-200
            transition
            mb-8
          "
        >
          ← Back to Portfolio
        </a>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Resume
            </h1>

            <p className="text-emerald-600 mt-2">
              View or download my latest resume.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="
              mt-4 md:mt-0
              bg-emerald-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-emerald-700
              transition
              shadow-lg
            "
          >
            Download Resume
          </a>

        </div>

        <div className="bg-emerald rounded-2xl shadow-lg overflow-hidden">

          <iframe
            src="/resume.pdf"
            className="w-full h-[900px]"
            title="Resume Preview"
          />

        </div>

      </div>

    </main>
  );
}