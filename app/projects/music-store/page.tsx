
export default function MusicStoreProject() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <a
        href="/"
        className="text-blue-600"
      >
        ← Back to Portfolio
      </a>

      <h1 className="text-5xl font-bold mt-6">
        Music Store Analysis
      </h1>

      <p className="mt-6 text-slate-600 text-lg">
        SQL-based business analytics project focused
        on uncovering customer behavior, sales trends,
        and revenue insights.
      </p>

      <h2 className="text-3xl font-semibold mt-16">
        Overview
      </h2>

      <p className="mt-4 text-slate-700 leading-8">
        Analyzed a digital music store database using
        SQL to answer business questions related to
        customer purchasing patterns, artist popularity,
        revenue generation, and sales performance.
      </p>

      <h2 className="text-3xl font-semibold mt-16">
        Technologies
      </h2>

      <div className="flex flex-wrap gap-3 mt-4">
        <span className="bg-slate-100 px-3 py-2 rounded">SQL</span>
        <span className="bg-slate-100 px-3 py-2 rounded">PostgreSQL</span>
        <span className="bg-slate-100 px-3 py-2 rounded">Analytics</span>
        <span className="bg-slate-100 px-3 py-2 rounded">Business Intelligence</span>
      </div>

      <h2 className="text-3xl font-semibold mt-16">
        Business Questions Solved
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Top customers by revenue</li>
        <li>Most popular artists</li>
        <li>Best selling genres</li>
        <li>Country-wise revenue analysis</li>
        <li>Customer purchase behavior</li>
      </ul>

      <a
        href="https://github.com/iamshaikabbas/music-store-analysis-sql"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        View GitHub Repository
      </a>

    </main>
  );
}
