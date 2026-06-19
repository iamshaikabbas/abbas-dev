
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Resume
            </h1>

            <p className="text-slate-600 mt-2">
              View or download my latest resume.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

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
