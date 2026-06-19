
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-green-50 via-lime-50 to-white pt-20">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-emerald-100
              text-emerald-700
              shadow-sm
              font-medium
              mb-6
            "
          >
             Available for Data Analyst & Software Roles
          </div>

          <h1
            className="
              text-6xl
              md:text-7xl
              font-bold
              leading-tight
              bg-gradient-to-r
              from-emerald-600
              via-green-500
              to-lime-500
              bg-clip-text
              text-transparent
            "
          >
            Shaik Abbas
          </h1>

          <h2 className="text-2xl text-slate-600 mt-5">
            Data Analytics • Software Development • AI
          </h2>

          <p className="mt-6 text-slate-600 max-w-xl leading-8 text-lg">
            Turning data into insights, insights into decisions,
            and decisions into growth through analytics,
            machine learning, and software solutions.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="#projects"
              className="
                bg-emerald-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-emerald-700
                shadow-lg
                hover:shadow-xl
                transition
              "
            >
              Explore Projects
            </a>

           <a
  href="/resume"
  className="
    bg-red-600
    text-white
    px-6
    py-3
    rounded-xl
    hover:bg-red-700
    transition
    shadow-lg
  "
>
  View Resume
</a>

          </div>

          {/* Social Links */}

          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="https://github.com/iamshaikabbas"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-3
                rounded-xl
                bg-slate-900
                text-white
                font-medium
                hover:scale-105
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-abbas-a5a723287/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-3
                rounded-xl
                bg-emerald-600
                text-white
                font-medium
                hover:scale-105
                hover:bg-emerald-700
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              🔗 LinkedIn
            </a>

            <a
              href="mailto:iamshaikabbas2005@gmail.com"
              className="
                px-5
                py-3
                rounded-xl
                bg-emerald-600
                text-white
                font-medium
                hover:scale-105
                hover:bg-emerald-700
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              📧 Email
            </a>

          </div>

          {/* Skills */}

          <div className="mt-10 flex gap-3 flex-wrap">

            <span className="bg-white border border-green-100 px-4 py-2 rounded-full shadow-sm">
              Python
            </span>

            <span className="bg-white border border-green-100 px-4 py-2 rounded-full shadow-sm">
              SQL
            </span>

            <span className="bg-white border border-green-100 px-4 py-2 rounded-full shadow-sm">
              Power BI
            </span>

            <span className="bg-white border border-green-100 px-4 py-2 rounded-full shadow-sm">
              Machine Learning
            </span>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Lime Glow */}

            <div
              className="
                absolute
                -top-10
                -left-10
                w-72
                h-72
                bg-lime-400/30
                blur-3xl
                rounded-full
              "
            />

            {/* Emerald Glow */}

            <div
              className="
                absolute
                inset-0
                bg-emerald-500/30
                blur-3xl
                rounded-full
              "
            />

            {/* Tree Ring Effect */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border-8
                border-emerald-200
              "
            />

            <Image
              src="/images/profile.jpeg"
              alt="Shaik Abbas"
              width={360}
              height={360}
              className="
                rounded-full
                object-cover
                shadow-2xl
                border-4
                border-white
                relative
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

