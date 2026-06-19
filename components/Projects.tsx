
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="text-slate-600 mt-4">
            Projects demonstrating analytics,
            machine learning, software development,
            and business intelligence capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* DDoS Project */}

          <div className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 bg-white">

            <Image
              src="/images/ddos1.jpeg"
              alt="DDoS Dashboard"
              width={800}
              height={500}
              className="w-full"
            />

            <div className="p-6">

              <h3 className="text-2xl font-semibold">
                Real-Time DDoS Detection System
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Developed an intelligent network monitoring
                platform capable of identifying malicious
                traffic using machine learning algorithms.

                The system combines Flask APIs,
                Streamlit dashboards, Random Forest,
                Isolation Forest, and real-time traffic
                analysis to improve cyber threat detection.
              </p>

              <div className="mt-5 flex gap-2 flex-wrap">

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  Python
                </span>

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  Flask
                </span>

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  Streamlit
                </span>

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  Random Forest
                </span>

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  Machine Learning
                </span>

              </div>

              <div className="flex gap-3 mt-6">

                <a
                  href="/projects/ddos"
                  className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  View Details
                </a>

                <a
                  href="https://github.com/iamshaikabbas/network-intrusion-detection-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-5 py-3 rounded-xl hover:bg-slate-100 transition"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* Music Store Project */}

          <div className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 bg-white">

            <div className="p-6">

              <h3 className="text-2xl font-semibold">
                Music Store Analysis
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Performed end-to-end SQL analysis on a
                digital music store database to uncover
                customer behavior, revenue drivers,
                artist performance, and sales trends.

                Developed analytical queries to support
                business decision making and identify
                opportunities for growth.
              </p>

              <div className="mt-5 flex gap-2 flex-wrap">

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  SQL
                </span>

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  PostgreSQL
                </span>

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  Analytics
                </span>

                <span className="bg-slate-100 px-3 py-1 rounded-lg">
                  Business Intelligence
                </span>

              </div>

              <div className="flex gap-3 mt-6">

                <a
                  href="/projects/music-store"
                  className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  View Details
                </a>

                <a
                  href="https://github.com/iamshaikabbas/music-store-analysis-sql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-5 py-3 rounded-xl hover:bg-slate-100 transition"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
