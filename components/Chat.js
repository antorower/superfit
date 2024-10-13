"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { chatbotData } from "@/library/Translations";

const Chat = ({ language, setIsExpanded }) => {
  const [response, setResponse] = useState(0);
  const [answer, setAnswer] = useState("");
  const [choices, setChoices] = useState([]);

  const GetOptionById = (id) => {
    const data = chatbotData.options[language];
    const option = data.find((option) => option.id === id);
    return option ? option : null;
  };

  useEffect(() => {
    if (response === 0) {
      setAnswer(chatbotData.initialMessage[language]);
      const initialOptions = chatbotData.options[language].filter((option) => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].includes(option.id));
      setChoices(initialOptions);
    } else {
      const selectedOption = GetOptionById(response);
      if (selectedOption) {
        setAnswer(selectedOption.answer);

        let newOptions = [];
        if (selectedOption.options.length > 0) {
          // Για κάθε id που υπάρχει στο array options του επιλεγμένου object
          selectedOption.options.forEach((optionId) => {
            // Βρες το object με το συγκεκριμένο optionId
            const optionObject = GetOptionById(optionId);
            // Αν υπάρχει το optionObject, το προσθέτουμε στο newOptions
            if (optionObject) {
              newOptions.push(optionObject);
            }
          });
          // Ενημερώνουμε το state των επιλογών
          setChoices(newOptions);
        }
      }
    }
  }, [response]);

  return (
    <div className="bg-backgroundDark h-[350px] w-[250px] rounded-t-lg flex flex-col justify-between shadow-lg shadow-black">
      <div className="bg-primary p-2 rounded-t-lg flex justify-between items-center">
        <div className="rounded-full p-1 border-r">
          <Image src="/icons/robot-dark.svg" width={20} height={20} alt="" />
        </div>
        <div className="font-bold select-none text-textDark">{chatbotData.name}</div>
        <button onClick={() => setIsExpanded(false)}>
          <Image src="/icons/close-dark.svg" width={18} height={18} alt="" />
        </button>
      </div>
      <div className="text-textLight px-4 py-2 flex-grow flex flex-col gap-4 text-sm overflow-y-auto overflow-x-hidden">
        <div className="text-gray-400 text-justify">{answer}</div>
        <div className="flex flex-wrap gap-2">
          {choices.map((choice) => (
            <button key={choice.id} onClick={() => setResponse(choice.id)} className="bg-primary rounded font-semibold font-geologica text-textDark px-2 py-1">
              {choice.text}
            </button>
          ))}
        </div>
      </div>
      <button key="startover" onClick={() => setResponse(0)} className="bg-primary rounded-b font-semibold font-geologica text-textDark px-2 py-2">
        Start Over
      </button>
    </div>
  );
};

export default Chat;
