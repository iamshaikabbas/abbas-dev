
"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: "2+",
      label: "Major Projects",
      icon: "🚀",
    },
    {
      number: "10+",
      label: "Technical Skills",
      icon: "🛠️",
    },
    {
      number: "900K+",
      label: "Records Analyzed",
      icon: "📊",
    },
    {
      number: "99.9%",
      label: "Model Accuracy",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Growth & Impact
          </h2>

          <p className="text-slate-600 mt-4">
            Delivering measurable results through data,
            analytics, and intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                bg-white
                border
                border-green-100
                rounded-3xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                hover:border-emerald-300
                transition-all
                duration-300
              "
            >
              <div className="text-4xl mb-4">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-emerald-600">
                {stat.number}
              </h3>

              <p className="mt-3 text-slate-600">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

