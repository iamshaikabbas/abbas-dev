
import Image from "next/image";

export default function DDoSProject() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <a
        href="/"
        className="text-emerald-600 font-medium"
      >
        ← Back to Portfolio
      </a>

      {/* Hero */}

      <div className="mt-10">

        <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm">
          Machine Learning Project
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Real-Time DDoS Detection System
        </h1>

        <p className="mt-6 text-slate-600 text-xl max-w-3xl leading-8">
          An intelligent cyber-security platform designed
          to detect malicious traffic and Distributed
          Denial-of-Service attacks using Machine Learning,
          Flask APIs, and real-time traffic analytics.
        </p>

      </div>

      {/* Screenshot */}

      <div className="mt-12">
        <Image
          src="/images/ddos1.jpeg"
          alt="DDoS Dashboard"
          width={1200}
          height={700}
          className="rounded-3xl shadow-xl"
        />
      </div>

      {/* Metrics */}

      <div className="grid md:grid-cols-4 gap-5 mt-12">

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-emerald-600">
            99.9%
          </h3>
          <p className="text-slate-500 mt-2">
            Accuracy
          </p>
        </div>

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-emerald-600">
            900K+
          </h3>
          <p className="text-slate-500 mt-2">
            Records
          </p>
        </div>

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-emerald-600">
            RF
          </h3>
          <p className="text-slate-500 mt-2">
            Best Model
          </p>
        </div>

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-emerald-600">
            Real-Time
          </h3>
          <p className="text-slate-500 mt-2">
            Detection
          </p>
        </div>

      </div>

      {/* Problem */}

      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          Problem Statement
        </h2>

        <p className="mt-5 text-slate-600 leading-8">
          Traditional security monitoring solutions
          often struggle to identify rapidly evolving
          network attacks. The objective of this project
          was to build a system capable of detecting
          malicious traffic patterns automatically and
          providing actionable insights in real time.
        </p>
      </section>

      {/* Solution */}

      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          Solution Architecture
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mt-8">

          <div className="border rounded-2xl p-5">
            Traffic Data
          </div>

          <div className="border rounded-2xl p-5">
            Feature Extraction
          </div>

          <div className="border rounded-2xl p-5">
            ML Prediction
          </div>

          <div className="border rounded-2xl p-5">
            Dashboard & Alerts
          </div>

        </div>
      </section>

      {/* Technologies */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-3 mt-6">

          {[
            "Python",
            "Flask",
            "Streamlit",
            "Random Forest",
            "Isolation Forest",
            "Scikit-Learn",
            "Network Analysis",
            "Machine Learning",
          ].map((tech) => (
            <span
              key={tech}
              className="
                bg-slate-100
                px-4
                py-2
                rounded-full
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      {/* Features */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="border rounded-2xl p-6">
            Real-Time Traffic Monitoring
          </div>

          <div className="border rounded-2xl p-6">
            Automated Threat Prediction
          </div>

          <div className="border rounded-2xl p-6">
            Interactive Dashboard
          </div>

          <div className="border rounded-2xl p-6">
            Network Analytics & Insights
          </div>

        </div>

      </section>

      {/* Achievements */}

<section className="mt-20">

  <h2 className="text-3xl font-bold text-emerald-700">
    🏆 Achievements
  </h2>

  <p className="mt-4 text-slate-600">
    Supporting documents and research publication for this project.
  </p>

  <div className="grid md:grid-cols-2 gap-8 mt-10">

    {/* IEEE Paper */}

    <div
      className="
        bg-gradient-to-br
        from-yellow-50
        to-amber-50
        border
        border-yellow-300
        rounded-3xl
        p-8
        shadow-lg
        hover:shadow-xl
        transition
      "
    >

      <div className="text-6xl">
        🏆
      </div>

      <h3 className="text-2xl font-bold mt-5">
        IEEE Conference Paper
      </h3>

      <p className="mt-3 text-slate-600">
        Published research paper based on this
        Machine Learning DDoS Detection System.
      </p>

      <a
        href="/ieee-paper.pdf"
        target="_blank"
        className="
          inline-block
          mt-6
          bg-yellow-500
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-yellow-600
          transition
        "
      >
        📄 View IEEE Paper
      </a>

    </div>

    {/* Project Report */}

    <div
      className="
        bg-gradient-to-br
        from-green-50
        to-emerald-50
        border
        border-emerald-200
        rounded-3xl
        p-8
        shadow-lg
        hover:shadow-xl
        transition
      "
    >

      <div className="text-6xl">
        📘
      </div>

      <h3 className="text-2xl font-bold mt-5">
        Development Report
      </h3>

      <p className="mt-3 text-slate-600">
        Complete documentation explaining the
        implementation and development process
        of the entire project.
      </p>

      <a
        href="/ddos-project-report.pdf"
        target="_blank"
        className="
          inline-block
          mt-6
          bg-emerald-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-emerald-700
          transition
        "
      >
        📘 View Report
      </a>

    </div>

  </div>

</section>

      {/* GitHub */}
{/* Source Code */}

<section className="mt-20">

  <h2 className="text-3xl font-bold text-emerald-700">
    💻 Source Code
  </h2>

  <p className="mt-5 text-slate-600 max-w-3xl leading-8">
    The complete implementation, including machine learning
    models, Flask APIs, Streamlit dashboard, preprocessing,
    and evaluation scripts, is available on GitHub.
  </p>

  <div className="mt-8 flex flex-wrap gap-4">

    <a
      href="https://github.com/iamshaikabbas/network-intrusion-detection-system"
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-green-800
        text-white
        px-6
        py-3
        rounded-xl
        hover:bg-green-900
        shadow-lg
        transition
      "
    >
      💻 View GitHub Repository
    </a>

  </div>

</section>

{/* Back */}

<div className="mt-20 mb-10">

  <a
    href="/"
    className="
      inline-flex
      items-center
      text-emerald-700
      font-semibold
      hover:text-emerald-900
      transition
    "
  >
    ← Back to Portfolio
  </a>

</div>
</main>
   ) ;
}