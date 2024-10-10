// Chatbot.js
"use client";
import React, { useState } from "react";
import { chatbotData } from "@/library/Translations";

const ChatbotTest = ({ language = "el" }) => {
  const [currentStep, setCurrentStep] = useState("initial");
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finalAnswer, setFinalAnswer] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCurrentStep("questions");
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    const currentQuestions = chatbotData.questions[language][selectedOption];
    if (newAnswers.length === currentQuestions.length) {
      // All questions answered, show final answer
      const answerKey = newAnswers.join("-");
      setFinalAnswer(chatbotData.answers[language][selectedOption][answerKey]);
      setCurrentStep("final");
    }
  };

  const resetChat = () => {
    setCurrentStep("initial");
    setSelectedOption(null);
    setAnswers([]);
    setFinalAnswer(null);
  };

  const renderContent = () => {
    switch (currentStep) {
      case "initial":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{language === "el" ? "Επιλέξτε μια επιλογή:" : "Choose an option:"}</h2>
            {chatbotData.initialOptions[language].map((option) => (
              <button key={option.id} onClick={() => handleOptionSelect(option.id)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 mb-2">
                {option.text}
              </button>
            ))}
          </div>
        );
      case "questions":
        const currentQuestion = chatbotData.questions[language][selectedOption][answers.length];
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{currentQuestion.text}</h2>
            {currentQuestion.options.map((option) => (
              <button key={option} onClick={() => handleAnswer(option)} className="bg-green-500 text-white px-4 py-2 rounded mr-2 mb-2">
                {option}
              </button>
            ))}
          </div>
        );
      case "final":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{language === "el" ? "Η απάντησή σας:" : "Your answer:"}</h2>
            <p className="mb-4">{finalAnswer}</p>
            <button onClick={resetChat} className="bg-red-500 text-white px-4 py-2 rounded">
              {language === "el" ? "Ξεκινήστε ξανά" : "Start over"}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">{language === "el" ? "Chatbot" : "Chatbot"}</h1>
      {renderContent()}
    </div>
  );
};

export default ChatbotTest;
