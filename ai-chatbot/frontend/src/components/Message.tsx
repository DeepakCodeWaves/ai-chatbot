import React from "react";

interface MessageProps {
  text: string;
  sender: "user" | "bot";
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  return (
    <div className={`p-2 my-1 rounded-md ${sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}>
      {text}
    </div>
  );
};

export default Message;
