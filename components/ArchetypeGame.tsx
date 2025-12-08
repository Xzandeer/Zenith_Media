"use client";

import { useState } from "react";

const ArchetypeGame = () => {
  const [score, setScore] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question: "How do you usually behave when scrolling through your feed?",
      answers: [
        { option: "A. I mostly just read, observe, and rarely react.", value: "A" },
        { option: "B. I stop and engage when I see posts about advocacy, social issues, or causes I care about.", value: "B" },
        { option: "C. I frequently like, comment, or share; anything that could bring more eyes to my content or page.", value: "C" },
        { option: "D. I mainly interact with posts about my hobbies, fandoms, or passions.", value: "D" },
        { option: "E. I love reacting, tagging, and interacting with friends. I’m very active.", value: "E" },
        { option: "F. I sometimes leave bold, sarcastic, or provocative comments.", value: "F" },
        { option: "G. I use the feed to see how other creators are doing and engage thoughtfully.", value: "G" },
        { option: "H. I explore new features, reels, and trends as soon as they appear.", value: "H" },
        { option: "I. I check up on my close network and respond to personal updates.", value: "I" },
        { option: "J. I look for family posts, updates from relatives, or baby pictures.", value: "J" }
      ]
    },
    {
      question: "What inspires you to create content?",
      answers: [
        { option: "A. I seldom post; I’m satisfied watching others.", value: "A" },
        { option: "B. I post to raise awareness or support a meaningful cause.", value: "B" },
        { option: "C. I post to promote events, products, services, or myself.", value: "C" },
        { option: "D. I enjoy sharing about my interests such as art, fitness, gaming, or niche hobbies.", value: "D" },
        { option: "E. I like connecting with people and staying visible in my social circle.", value: "E" },
        { option: "F. I sometimes post hot takes or controversial opinions.", value: "F" },
        { option: "G. I want to share knowledge, inspire others, or grow an audience.", value: "G" },
        { option: "H. I enjoy being first: new filters, new apps, new challenges.", value: "H" },
        { option: "I. My posts are usually updates meant for my personal circle.", value: "I" },
        { option: "J. My content revolves around family, memories, and special occasions.", value: "J" }
      ]
    },
    // Add additional questions here following the same structure
  ];

  // Handle answer selection and update the score
  const handleAnswer = (value: string) => {
    setScore(prevScore => ({ ...prevScore, [value]: prevScore[value] + 1 }));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  // Get the archetype based on the most frequent answer
  const getArchetype = () => {
    const maxScore = Math.max(...Object.values(score));
    const archetypes = {
      A: "The Listener",
      B: "The Activist",
      C: "The Spammer / Promoter",
      D: "The Passionista",
      E: "The Social Butterfly",
      F: "The Troll / Provocateur",
      G: "The Influencer / Creator",
      H: "The Early Adopter / Trend Chaser",
      I: "The Black Booker (Relationship-Builder)",
      J: "The Family Person"
    };

    // Find the letter with the highest score
    const highestLetter = Object.keys(score).find(
      key => score[key] === maxScore
    );
    return archetypes[highestLetter as keyof typeof archetypes];
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center mt-10">
      {!finished ? (
        <>
          <h2 className="text-3xl font-bold text-[#1F3E8A] mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.value)}
                className="w-full px-4 py-2 bg-[#1F3E8A] text-white rounded-lg shadow-lg hover:bg-[#B5452E] transition-all duration-300"
              >
                {answer.option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-4xl font-bold text-[#1F3E8A] mb-6">
            Your Social Media Archetype is: <span className="text-[#B5452E]">{getArchetype()}</span>
          </h2>
          <p className="text-lg text-[#0B0F1A]">
            Based on your answers, you exhibit the traits of a <strong>{getArchetype()}</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default ArchetypeGame;
