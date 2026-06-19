
export default function MusicStoreProject() {
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

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
          SQL Analytics Project
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Music Store Analysis
        </h1>

        <p className="mt-6 text-slate-600 text-xl max-w-3xl leading-8">
          End-to-end business analytics project using SQL
          to uncover customer behavior, revenue drivers,
          sales performance, and strategic business insights
          from a digital music store database.
        </p>

      </div>

      {/* Metrics */}

      <div className="grid md:grid-cols-4 gap-5 mt-12">

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-green-600">
            SQL
          </h3>
          <p className="text-slate-500 mt-2">
            Core Technology
          </p>
        </div>

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-green-600">
            BI
          </h3>
          <p className="text-slate-500 mt-2">
            Business Insights
          </p>
        </div>

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-green-600">
            KPI
          </h3>
          <p className="text-slate-500 mt-2">
            Performance Metrics
          </p>
        </div>

        <div className="bg-slate-50 border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-green-600">
            EDA
          </h3>
          <p className="text-slate-500 mt-2">
            Data Exploration
          </p>
        </div>

      </div>

      {/* Problem */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Business Problem
        </h2>

        <p className="mt-5 text-slate-600 leading-8">
          Businesses often possess large amounts of
          transactional data but struggle to extract
          actionable insights. This project focused on
          analyzing customer purchases, sales trends,
          and artist performance to support data-driven
          decision making.
        </p>

      </section>

      {/* Objectives */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Project Objectives
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="border rounded-2xl p-6">
            Identify top revenue-generating customers
          </div>

          <div className="border rounded-2xl p-6">
            Analyze artist and genre popularity
          </div>

          <div className="border rounded-2xl p-6">
            Understand purchasing behavior
          </div>

          <div className="border rounded-2xl p-6">
            Discover growth opportunities
          </div>

        </div>

      </section>

      {/* Technology Stack */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-3 mt-6">

          {[
            "SQL",
            "PostgreSQL",
            "Business Intelligence",
            "Data Analytics",
            "Data Visualization",
            "Reporting",
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

      {/* Business Questions */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Business Questions Solved
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="border rounded-2xl p-6">
            Top customers by revenue
          </div>

          <div className="border rounded-2xl p-6">
            Most popular artists
          </div>

          <div className="border rounded-2xl p-6">
            Best-selling genres
          </div>

          <div className="border rounded-2xl p-6">
            Country-wise revenue analysis
          </div>

          <div className="border rounded-2xl p-6">
            Customer purchase behavior
          </div>

          <div className="border rounded-2xl p-6">
            Sales trend analysis
          </div>

        </div>

      </section>

      {/* Outcomes */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Key Outcomes
        </h2>

        <p className="mt-5 text-slate-600 leading-8">
          The project demonstrated how SQL can be used
          to transform raw transactional data into
          meaningful business intelligence. The insights
          generated can help improve marketing strategy,
          customer retention, product planning, and
          revenue optimization.
        </p>

      </section>

      {/* GitHub */}

      <div className="mt-20">

        <a
          href="https://github.com/iamshaikabbas/music-store-analysis-sql"
          target="_blank"
          rel="noopener noreferrer"
         className="
  bg-green-800
  text-white
  px-5
  py-3
  rounded-xl
  hover:bg-green-900
  shadow-lg
  hover:shadow-xl
  transition
" 
        >
          View GitHub Repository
        </a>

      </div>

    </main>
  );
}

