import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-600 font-medium">
            Welcome to Abbas.dev
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Shaik Abbas
          </h1>

          <h2 className="text-2xl text-slate-600 mt-4">
            Data • Analytics • Software
          </h2>

          <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            Available for Internships & Graduate Roles
          </div>

          <p className="mt-6 text-slate-600 max-w-xl leading-8">
            Building practical solutions that transform data into insights and ideas into impact.
            Passionate about Data Analytics, Business Intelligence, Software Development,
            SQL, Machine Learning, and solving real-world problems through technology.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Explore Projects
            </a>

            <a
              href="/resume"
              className="border px-6 py-3 rounded-xl hover:bg-slate-100 transition"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="border px-6 py-3 rounded-xl hover:bg-slate-100 transition"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="flex justify-center">
          <Image
            src="/images/profile.jpeg"
            alt="Shaik Abbas"
            width={320}
            height={320}
            className="rounded-full object-cover shadow-xl border-4 border-white"
          />
        </div>

      </div>
    </section>
  );
}