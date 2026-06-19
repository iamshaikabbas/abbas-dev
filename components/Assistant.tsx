
"use client";

import { useState } from "react";

export default function Assistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askQuestion() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await res.json();

      setAnswer(data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong while contacting the assistant.");
    }

    setLoading(false);
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          💬 Ask About Abbas
        </h2>

        <p className="text-center text-slate-600 mt-4">
          Ask about skills, projects, experience,
          technologies, or career interests.
        </p>

        <div className="mt-8 flex gap-4">

          <input
            type="text"
            placeholder="Ask anything about Abbas..."
            className="flex-1 border rounded-xl px-4 py-3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            onClick={askQuestion}
            className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700"
          >
            Ask
          </button>

        </div>

        {loading && (
          <div className="mt-6 p-4 border rounded-xl bg-slate-50">
            Thinking...
          </div>
        )}

        {answer && (
          <div className="mt-6 p-6 border rounded-xl bg-slate-50 whitespace-pre-wrap">
            {answer}
          </div>
        )}

        <div className="mt-8 text-sm text-slate-500">
          Example questions:
          <ul className="mt-2 list-disc list-inside">
            <li>What are Abbas's strongest skills?</li>
            <li>Explain the DDoS project.</li>
            <li>Would Abbas fit a Data Analyst role?</li>
            <li>Summarize Abbas in 60 seconds.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
