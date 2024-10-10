import React from "react";

const ChatBotTooltip = ({ children }) => {
  return (
    <div className="relative inline-block">
      <div className="bg-backgroundDark text-primary px-3 py-1 rounded border border-primary">{children}</div>
      <div className="absolute right-[18px]">
        <div className="w-3 h-3 bg-backgroundDark transform rotate-45 -translate-y-1/2  border-b border-r border-primary"></div>
      </div>
    </div>
  );
};

export default ChatBotTooltip;
