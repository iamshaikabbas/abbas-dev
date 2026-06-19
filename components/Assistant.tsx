
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Assistant() {
  const [open, setOpen] = useState(false);
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
      setAnswer("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <>
      {/* Floating Assistant */}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-16
          h-16
          rounded-full
          bg-emerald-600
          text-white
          text-2xl
          shadow-2xl
          hover:bg-emerald-700
          hover:scale-110
          transition-all
        "
      >
        💬
      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="
              fixed
              bottom-28
              right-6
              z-50
              w-[400px]
              max-w-[95vw]
              bg-white
              border
              border-green-100
              rounded-3xl
              shadow-2xl
              overflow-hidden
            "
          >

            <div className="bg-emerald-600 text-white p-5">

              <h3 className="font-semibold text-lg">
                 Abbas AI Assistant
              </h3>

              <p className="text-sm opacity-90">
                Ask anything about skills, projects,
                experience, and career interests.
              </p>

            </div>

            <div className="p-5">

              <div className="flex gap-2 mb-4">

                <input
                  type="text"
                  placeholder="Ask about Abbas..."
                  className="
                    flex-1
                    border
                    border-green-100
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-emerald-300
                  "
                  value={question}
                  onChange={(e) =>
                    setQuestion(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      askQuestion();
                    }
                  }}
                />

                <button
                  onClick={askQuestion}
                  className="
                    bg-emerald-600
                    text-white
                    px-5
                    rounded-xl
                    hover:bg-emerald-700
                    transition
                  "
                >
                  Ask
                </button>

              </div>

              {loading && (

                <div
                  className="
                    bg-green-50
                    border
                    border-green-100
                    rounded-xl
                    p-4
                  "
                >
                  🌱 Thinking...
                </div>

              )}

              {answer && (

                <div
                  className="
                    bg-green-50
                    border
                    border-green-100
                    rounded-xl
                    p-4
                    whitespace-pre-wrap
                    max-h-80
                    overflow-y-auto
                  "
                >
                  {answer}
                </div>

              )}

              <div className="mt-4 text-xs text-slate-500">

                Suggested questions:

                <ul className="mt-2 space-y-1">

                  <li>• Explain the DDoS project</li>

                  <li>• What are Abbas's strongest skills?</li>

                  <li>• Summarize Abbas in 60 seconds</li>

                  <li>• Why should a company hire Abbas?</li>

                </ul>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

