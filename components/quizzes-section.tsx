"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
  category: "MIL" | "AI";
};

// ------------------------------
// STATIC QUESTION BANK
// ------------------------------
const QUESTION_BANK: Question[] = [
  // --- MIL Questions ---
  {
    category: "MIL",
    question: "What does 'Media Literacy' mean?",
    options: [
      "Ability to create video content",
      "Ability to access, analyze, evaluate, and create media",
      "Ability to design advertisements",
      "Ability to use social media only",
    ],
    answer: "Ability to access, analyze, evaluate, and create media",
  },
  {
    category: "MIL",
    question: "Which of the following is a credible source?",
    options: [
      "A random Facebook post",
      "A verified news organization",
      "A meme shared by a friend",
      "A celebrity's opinion",
    ],
    answer: "A verified news organization",
  },
  {
    category: "MIL",
    question: "Fact-checking is important because:",
    options: [
      "It reduces internet speed",
      "It prevents misinformation",
      "It makes news boring",
      "It increases advertisement views",
    ],
    answer: "It prevents misinformation",
  },

  // --- AI Questions ---
  {
    category: "AI",
    question: "What does AI stand for?",
    options: [
      "Automatic Information",
      "Artificial Intelligence",
      "Advanced Internet",
      "Automated Interface",
    ],
    answer: "Artificial Intelligence",
  },
  {
    category: "AI",
    question: "Which is an example of AI?",
    options: [
      "A regular calculator",
      "A self-driving car",
      "A mechanical clock",
      "A whiteboard",
    ],
    answer: "A self-driving car",
  },
  {
    category: "AI",
    question: "Machine Learning is a subset of:",
    options: ["Robotics", "Artificial Intelligence", "Hardware Engineering", "Graphic Design"],
    answer: "Artificial Intelligence",
  },
];

// ------------------------------
// HELPERS
// ------------------------------
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getRandomQuestions(category: "MIL" | "AI" | "RANDOM", count = 5) {
  let pool = QUESTION_BANK;

  if (category !== "RANDOM") {
    pool = QUESTION_BANK.filter((q) => q.category === category);
  }

  const chosen = shuffle(pool).slice(0, count);

  // Randomize options for each question
  return chosen.map((q) => ({
    ...q,
    options: shuffle(q.options),
  }));
}

// ------------------------------
// MAIN QUIZ SECTION
// ------------------------------
export default function QuizzesSection() {
  const [stage, setStage] = useState<"CHOOSE" | "QUIZ" | "RESULT">("CHOOSE");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const startQuiz = (cat: "MIL" | "AI" | "RANDOM") => {
    setQuestions(getRandomQuestions(cat));
    setStage("QUIZ");
    setAnswers({});
  };

  const score = questions.filter((q, i) => answers[i] === q.answer).length;

  return (
    <section className="w-full flex flex-col items-center py-20 fade-in">

      {/* Blue Rounded Container */}
      <div className="w-[90%] max-w-5xl bg-[#6E8DBA] rounded-[60px] py-16 px-10 text-center shadow-xl">

        {/* Title */}
        <h1 className="text-white text-4xl font-serif font-bold mb-6 fade-in">
          Quiz
        </h1>

        {/* Instructions Bar */}
        <div className="bg-[#1F3E8A] text-white py-4 px-6 rounded-2xl mx-auto max-w-3xl mb-12 shadow-md fade-in">
          <p className="text-sm">
            Test your knowledge in Media Information Literacy (MIL) and Artificial Intelligence (AI).
          </p>
        </div>

        {/* CATEGORY SELECTION ------------------------ */}
        {stage === "CHOOSE" && (
          <div className="flex justify-center gap-6 mt-4 flex-wrap">

            {/* MIL */}
            <button
              onClick={() => startQuiz("MIL")}
              className="bg-white w-60 py-6 rounded-3xl shadow-lg border-4 border-[#27408B] 
              hover:scale-105 transition-all duration-300 fade-slide-up"
            >
              <h3 className="text-[#1F3E8A] text-2xl font-bold">MIL</h3>
              <p className="text-sm mt-1">Media & Information Literacy</p>
            </button>

            {/* AI */}
            <button
              onClick={() => startQuiz("AI")}
              className="bg-white w-60 py-6 rounded-3xl shadow-lg border-4 border-[#27408B] 
              hover:scale-105 transition-all duration-300 fade-slide-up delay-100"
            >
              <h3 className="text-[#1F3E8A] text-2xl font-bold">AI</h3>
              <p className="text-sm mt-1">Artificial Intelligence</p>
            </button>

            {/* RANDOM */}
            <button
              onClick={() => startQuiz("RANDOM")}
              className="bg-white w-60 py-6 rounded-3xl shadow-lg border-4 border-[#27408B] 
              hover:scale-105 transition-all duration-300 fade-slide-up delay-200"
            >
              <h3 className="text-[#1F3E8A] text-2xl font-bold">RANDOM</h3>
              <p className="text-sm mt-1">Mix of MIL + AI questions</p>
            </button>

          </div>
        )}

        {/* QUIZ QUESTIONS --------------------------- */}
        {stage === "QUIZ" && (
          <div className="mt-10 space-y-6 max-w-2xl mx-auto">

            {questions.map((q, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md fade-slide-up"
              >
                <p className="font-bold text-left text-lg mb-4">
                  {i + 1}. {q.question}
                </p>

                {q.options.map((opt) => (
                  <label key={opt} className="block text-left mb-2">
                    <input
                      type="radio"
                      name={`q-${i}`}
                      value={opt}
                      onChange={() => setAnswers({ ...answers, [i]: opt })}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}

            <button
              onClick={() => setStage("RESULT")}
              className="w-full bg-[#1F3E8A] text-white py-3 rounded-xl text-xl mt-4 hover:bg-[#153070] transition-all fade-in"
            >
              Submit
            </button>
          </div>
        )}

        {/* RESULTS --------------------------- */}
        {stage === "RESULT" && (
          <div className="max-w-3xl mx-auto mt-6 text-white fade-in">

            <h2 className="text-3xl font-bold mb-4">
              You scored {score} / {questions.length}
            </h2>

            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="bg-white text-black p-6 rounded-xl shadow fade-slide-up">
                  <p className="font-bold">{i + 1}. {q.question}</p>

                  <p className="mt-1">
                    <strong>Correct Answer:</strong> {q.answer}
                  </p>

                  {answers[i] !== q.answer ? (
                    <p className="text-red-600 font-semibold">
                      Your Answer: {answers[i] || "No answer"}
                    </p>
                  ) : (
                    <p className="text-green-600 font-semibold">✔ Correct!</p>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => { setStage("CHOOSE"); setAnswers({}); }}
              className="mt-8 bg-white text-[#1F3E8A] font-bold px-10 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all"
            >
              Take Another Quiz
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

/* ---------------------------------------------
   ANIMATIONS — ADD THIS TO globals.css
---------------------------------------------- */

/*
.fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.fade-slide-up {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.6s ease forwards;
}

.fade-slide-up.delay-100 {
  animation-delay: 0.1s;
}

.fade-slide-up.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}
*/
