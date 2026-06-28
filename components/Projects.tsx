
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            🌿 Featured Projects
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            A collection of projects demonstrating
            Data Analytics, Machine Learning,
            Software Engineering, and Business Intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* DDoS Project */}

          <motion.div
            whileHover={{ y: -10 }}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              border
              border-green-100
              shadow-sm
              hover:shadow-2xl
              hover:border-emerald-300
              transition-all
            "
          >
            <Image
              src="/images/ddos1.jpeg"
              alt="DDoS Project"
              width={800}
              height={500}
              className="w-full h-64 object-cover"
            />

            <div className="p-7">

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold">
                  DDoS Detection System
                </h3>

                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                  ML Project
                </span>

              </div>

              <p className="mt-4 text-slate-600 leading-7">
                Real-time cyber-security platform
                capable of detecting malicious traffic
                using Machine Learning and network analytics.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-6">

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <h4 className="font-bold text-emerald-600">
                    99.9%
                  </h4>

                  <p className="text-xs text-slate-500">
                    Accuracy
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <h4 className="font-bold text-emerald-600">
                    900K+
                  </h4>

                  <p className="text-xs text-slate-500">
                    Records
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <h4 className="font-bold text-emerald-600">
                    5+
                  </h4>

                  <p className="text-xs text-slate-500">
                    Models
                  </p>
                </div>

              </div>

              <div className="mt-6 flex gap-2 flex-wrap">

                {[
                  "Python",
                  "Flask",
                  "Streamlit",
                  "Random Forest",
                  "ML",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      bg-green-50
                      border
                      border-green-100
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>
{/* IEEE Achievement */}

<div
  className="
    mt-8
    rounded-2xl
    border
    border-yellow-300
    bg-gradient-to-r
    from-yellow-50
    to-amber-50
    p-5
    shadow-sm
  "
>

  <div className="flex items-center justify-between">

    <div>

      <h4 className="font-bold text-yellow-800">
        🏆 Published in IEEE Conference
      </h4>

      <p className="text-sm text-slate-600 mt-1">
        Research paper successfully published based on
        this Machine Learning DDoS Detection System.
      </p>

    </div>

    <div
      className="
        bg-yellow-500
        text-white
        px-4
        py-2
        rounded-full
        font-semibold
        text-sm
      "
    >
      IEEE
    </div>

  </div>

</div>
              <div className="flex gap-3 mt-8">

                <a
                  href="/projects/ddos"
                  className="
                    bg-emerald-600
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-emerald-700
                    shadow-lg
                    hover:shadow-xl
                    transition
                  "
                >
                  View Details
                </a>

                <a
                  href="https://github.com/iamshaikabbas/network-intrusion-detection-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    border
                    border-green-200
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-green-50
                    transition
                  "
                >
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>

          {/* Music Store Project */}

          <motion.div
            whileHover={{ y: -10 }}
            className="
              bg-white
              rounded-3xl
              border
              border-green-100
              shadow-sm
              hover:shadow-2xl
              hover:border-emerald-300
              transition-all
            "
          >
            <div className="p-7">

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold">
                  Music Store Analysis
                </h3>

                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                  SQL Project
                </span>

              </div>

              <p className="mt-4 text-slate-600 leading-7">
                End-to-end SQL analytics project
                focused on customer behavior,
                revenue analysis, artist performance,
                and business insights.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-6">

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <h4 className="font-bold text-emerald-600">
                    SQL
                  </h4>

                  <p className="text-xs text-slate-500">
                    Analytics
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <h4 className="font-bold text-emerald-600">
                    BI
                  </h4>

                  <p className="text-xs text-slate-500">
                    Insights
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <h4 className="font-bold text-emerald-600">
                    KPI
                  </h4>

                  <p className="text-xs text-slate-500">
                    Reports
                  </p>
                </div>

              </div>

              <div className="mt-6 flex gap-2 flex-wrap">

                {[
                  "SQL",
                  "PostgreSQL",
                  "Analytics",
                  "Business Intelligence",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      bg-green-50
                      border
                      border-green-100
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div className="flex gap-3 mt-8">

                <a
                  href="/projects/music-store"
                  className="
                    bg-emerald-600
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-emerald-700
                    shadow-lg
                    hover:shadow-xl
                    transition
                  "
                >
                  View Details
                </a>

                <a
                  href="https://github.com/iamshaikabbas/music-store-analysis-sql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    border
                    border-green-200
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-green-50
                    transition
                  "
                >
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

