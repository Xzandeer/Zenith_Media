"use client";

import { useState } from "react";

const ArchetypeGame = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const archetypes = {
    A: {
      name: "The Listener",
      image: "listener.png",
      description:
        "You prefer observing over participating. You quietly take everything in — news, updates, ideas — without feeling pressured to react. You understand social media, but you’re selective in how you use it.",
    },
    B: {
      name: "The Activist",
      image: "activist.png",
      description:
        "You care deeply about issues and use social platforms to raise awareness. You amplify content about justice, environmental protection, or social change. Your voice has purpose and direction.",
    },
    C: {
      name: "The Spammer / Promoter",
      image: "spammer.png",
      description:
        "You are always promoting something — a business, an event, a project, or your personal brand. You see social media as a tool for visibility and growth.",
    },
    D: {
      name: "The Passionista",
      image: "passionista.png",
      description:
        "You post about what you love, whether it's cosplay, K-pop, fitness, food, photography, or anything niche. Social media is your space to express your passions.",
    },
    E: {
      name: "The Social Butterfly",
      image: "socialbutterfly.png",
      description:
        "You thrive on interaction. You’re always tagged, always posting, and always talking to people. Your feed is full of memories with friends, celebrations, and social events.",
    },
    F: {
      name: "The Troll / Provocateur",
      image: "troll.png",
      description:
        "You enjoy stirring reactions — humor, sarcasm, bold takes, debates. You keep conversations alive, even if occasionally chaotic.",
    },
    G: {
      name: "The Influencer / Creator",
      image: "creator.png",
      description:
        "You produce content that informs, inspires, or entertains. You know how to structure posts, create aesthetic feeds, or deliver valuable info. People follow you for a reason.",
    },
    H: {
      name: "The Early Adopter / Trend Chaser",
      image: "earlyadopter.png",
      description:
        "You are the first to try new platforms, filters, apps, or trends. You love exploring new digital spaces and are always ahead of the curve.",
    },
    I: {
      name: "The Black Booker",
      image: "black.png",
      description:
        "You use social media to build and maintain meaningful relationships. You value genuine interactions and enjoy connecting with people personally.",
    },
    J: {
      name: "The Family Person",
      image: "family.png",
      description:
        "You use social media to stay close to family. Your feed is warm, wholesome, and filled with life moments, reunions, and celebrations.",
    },
  };

  const questions = [
    {
      question: "How do you usually behave when scrolling through your feed?",
      options: [
        "A. I mostly just read, observe, and rarely react.",
        "B. I stop and engage when I see posts about advocacy, social issues, or causes I care about.",
        "C. I frequently like, comment, or share; anything that could bring more eyes to my content or page.",
        "D. I mainly interact with posts about my hobbies, fandoms, or passions.",
        "E. I love reacting, tagging, and interacting with friends. I’m very active.",
        "F. I sometimes leave bold, sarcastic, or provocative comments.",
        "G. I use the feed to see how other creators are doing and engage thoughtfully.",
        "H. I explore new features, reels, and trends as soon as they appear.",
        "I. I check up on my close network and respond to personal updates.",
        "J. I look for family posts, updates from relatives, or baby pictures.",
      ],
    },
    {
      question: "What inspires you to create content?",
      options: [
        "A. I seldom post; I’m satisfied watching others.",
        "B. I post to raise awareness or support a meaningful cause.",
        "C. I post to promote events, products, services, or myself.",
        "D. I enjoy sharing about my interests such as art, fitness, gaming, or niche hobbies.",
        "E. I like connecting with people and staying visible in my social circle.",
        "F. I sometimes post hot takes or controversial opinions.",
        "G. I want to share knowledge, inspire others, or grow an audience.",
        "H. I enjoy being first: new filters, new apps, new challenges.",
        "I. My posts are usually updates meant for my personal circle.",
        "J. My content revolves around family, memories, and special occasions.",
      ],
    },
    {
      question: "What’s your reaction to promotional or sales-related content?",
      options: [
        "A. I ignore it and scroll past.",
        "B. I support advocacy-related promotions but dislike overly commercial ones.",
        "C. I see nothing wrong with it because I promote things myself.",
        "D. I only care if it's related to my passions.",
        "E. I engage with it if my friends share it.",
        "F. Sometimes I criticize it if it looks fake or exaggerated.",
        "G. I analyze how it’s made. Maybe I can use the idea for my own content.",
        "H. I check out trending products just for curiosity.",
        "I. I prefer genuine, personal posts over ads.",
        "J. I react if the product is useful for home or family.",
      ],
    },
    {
      question: "How do you grow your social media connections?",
      options: [
        "A. I rarely follow or add new people.",
        "B. I join groups or pages to meet people working toward similar advocacies.",
        "C. I add people strategically for promotion or exposure.",
        "D. I follow accounts centered on hobbies I love.",
        "E. I add classmates, friends of friends, acquaintances; I like a big network.",
        "F. I sometimes engage with strangers just to challenge them or debate.",
        "G. I collaborate or engage with other creators or influencers.",
        "H. I try new platforms and expand whenever something new comes out.",
        "I. I stick to people I truly know or trust.",
        "J. My network is mostly family members and relatives.",
      ],
    },
    {
      question: "How would you describe your posting style?",
      options: [
        "A. Quiet, minimal, observer-type",
        "B. Purpose-driven and issue-centered",
        "C. Promotional, brand-focused",
        "D. Hobby-centric and enthusiastic",
        "E. Friendly, energetic, and interactive",
        "F. Provocative, sarcastic, or debate-inclined",
        "G. Creative, inspirational, or educational",
        "H. Trendy, experimental, tech-savvy",
        "I. Personal, relationship-centered",
        "J. Family-oriented and wholesome",
      ],
    },
    {
      question: "What kind of content do you enjoy the most?",
      options: [
        "A. News, updates, or random posts — I just like browsing.",
        "B. Social issues, activism content, and awareness campaigns.",
        "C. Ads, promos, campaigns, or anything that helps me improve my marketing.",
        "D. Tutorials, fan pages, hobby discussions, niche communities.",
        "E. Memes, group photos, party posts, friend updates.",
        "F. Controversial topics, debates, or comment wars.",
        "G. High-quality videos, creative edits, reels, or informative content.",
        "H. Tech updates, app features, viral trends.",
        "I. Personal milestone posts or messages from friends.",
        "J. Family photos, celebrations, and sentimental posts.",
      ],
    },
    {
      question: "If someone visits your profile, what’s the first thing they’ll notice?",
      options: [
        "A. Not much — your profile rarely changes.",
        "B. Posts about campaigns, advocacies, or statements.",
        "C. Banners, posters, or constant promotions.",
        "D. Photos or posts about your hobbies and passions.",
        "E. Tons of tagged photos and interactions with friends.",
        "F. Strong opinions, sarcastic posts, or debates.",
        "G. Well-edited content, reels, or creative achievements.",
        "H. Frequent posts about new apps, features, or trends.",
        "I. A warm, personal timeline with updates and messages.",
        "J. Family photos, celebrations, and wholesome content.",
      ],
    },
  ];

  const handleAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const letterCounts = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      G: 0,
      H: 0,
      I: 0,
      J: 0,
    };

    answers.forEach((answer) => {
      if (answer) {
        letterCounts[answer]++;
      }
    });

    const maxLetter = Object.keys(letterCounts).reduce((a, b) =>
      letterCounts[a] > letterCounts[b] ? a : b
    );

    setResult(maxLetter);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        What is Your Archetype?
      </h1>

      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <p className="font-medium text-lg">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(index, option[0])}
                className="w-full py-2 px-4 text-left bg-[#1F3E8A] text-white rounded-md hover:bg-[#B5452E] transition-all duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={calculateResult}
        className="w-full py-2 mt-6 bg-[#1F3E8A] text-white rounded-md hover:bg-[#B5452E] transition-all duration-300"
      >
        Submit Answers
      </button>

      {result && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">Your Archetype: {archetypes[result].name}</h2>
          <p className="mt-2 text-lg">{archetypes[result].description}</p>
          <img
            src={`/${archetypes[result].image}`}
            alt={archetypes[result].name}
            className="mt-4 max-w-xs mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ArchetypeGame;
