
"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗄️" },
  { name: "Power BI", icon: "📊" },
  { name: "Tableau", icon: "📈" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "💾" },
  { name: "Git", icon: "🌿" },
  { name: "GitHub", icon: "💻" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Data Analytics", icon: "📉" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-center text-slate-800">
            Skills & Technologies
          </h2>

          <p className="text-slate-600 text-center mt-4 mb-12">
            Technologies I use to build intelligent,
            scalable, and data-driven solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="
                  bg-white
                  border
                  border-green-100
                  rounded-3xl
                  p-6
                  text-center
                  shadow-sm
                  hover:shadow-xl
                  hover:border-emerald-300
                  transition-all
                  duration-300
                "
              >
                <div className="text-4xl mb-3">
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-slate-800">
                  {skill.name}
                </h3>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

