
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
             Let's Connect
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Open to internships, graduate roles,
            Data Analytics opportunities, Software
            Development positions, and collaborative
            projects.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <motion.a
            whileHover={{ y: -8, scale: 1.03 }}
            href="mailto:iamshaikabbas2005@gmail.com"
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
            "
          >
            <div className="text-5xl mb-4">
              📧
            </div>

            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <p className="text-slate-500 mt-2 text-sm">
              Reach out directly for opportunities.
            </p>
          </motion.a>

          <motion.a
            whileHover={{ y: -8, scale: 1.03 }}
            href="https://github.com/iamshaikabbas"
            target="_blank"
            rel="noopener noreferrer"
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
            "
          >
            <div className="text-5xl mb-4">
              💻
            </div>

            <h3 className="text-xl font-semibold">
              GitHub
            </h3>

            <p className="text-slate-500 mt-2 text-sm">
              Explore projects and source code.
            </p>
          </motion.a>

          <motion.a
            whileHover={{ y: -8, scale: 1.03 }}
            href="https://www.linkedin.com/in/shaik-abbas-a5a723287/"
            target="_blank"
            rel="noopener noreferrer"
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
            "
          >
            <div className="text-5xl mb-4">
              🔗
            </div>

            <h3 className="text-xl font-semibold">
              LinkedIn
            </h3>

            <p className="text-slate-500 mt-2 text-sm">
              Connect professionally and view profile.
            </p>
          </motion.a>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >

          <a
            href="mailto:iamshaikabbas2005@gmail.com"
            className="
              inline-flex
              items-center
              bg-emerald-600
              text-white
              px-8
              py-4
              rounded-2xl
              hover:bg-emerald-700
              shadow-lg
              hover:shadow-xl
              transition
            "
          >
             Get In Touch
          </a>

        </motion.div>

      </div>
    </section>
  );
}

