
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              About Me
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Passionate about turning data into insights,
              building intelligent software, and creating
              solutions that drive measurable growth.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}

            <div>

              <p className="text-slate-600 leading-8 text-lg">

                I am an Electronics and Communication
                Engineering student with strong interests
                in Data Analytics, Business Intelligence,
                Machine Learning, and Software Development.

                <br /><br />

                My experience includes SQL analytics,
                dashboard development, database management,
                data visualization, machine learning,
                and full-stack project development.

                <br /><br />

                I enjoy transforming complex information
                into actionable insights and building
                technology that helps organizations make
                smarter decisions.

              </p>

            </div>

            {/* Right Side Cards */}

            <div className="grid grid-cols-2 gap-5">

              <motion.div
                whileHover={{ y: -6 }}
                className="
                  bg-white
                  border
                  border-green-100
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:border-emerald-300
                  transition
                "
              >
                <div className="text-4xl mb-3">
                  🎓
                </div>

                <h3 className="font-semibold text-lg">
                  Education
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  ECE Student with strong analytical
                  and technical foundations.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="
                  bg-white
                  border
                  border-green-100
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:border-emerald-300
                  transition
                "
              >
                <div className="text-4xl mb-3">
                  📊
                </div>

                <h3 className="font-semibold text-lg">
                  Analytics
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  SQL, Power BI, Tableau and
                  Data Visualization.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="
                  bg-white
                  border
                  border-green-100
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:border-emerald-300
                  transition
                "
              >
                <div className="text-4xl mb-3">
                  💻
                </div>

                <h3 className="font-semibold text-lg">
                  Development
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Full-stack applications,
                  APIs and automation.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="
                  bg-white
                  border
                  border-green-100
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:border-emerald-300
                  transition
                "
              >
                <div className="text-4xl mb-3">
                  🤖
                </div>

                <h3 className="font-semibold text-lg">
                  AI & ML
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Predictive models and intelligent
                  decision systems.
                </p>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

