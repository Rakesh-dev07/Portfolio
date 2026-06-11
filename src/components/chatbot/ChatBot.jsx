import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Rakesh's AI Assistant. Ask me about my skills, projects, experience, freelance work, or contact details.",
    },
  ]);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ChatButton
        onClick={() => setOpen(!open)}
      />

      {open && (
        <ChatWindow
          messages={messages}
          sendMessage={sendMessage}
          loading={loading}
          closeChat={() => setOpen(false)}
        />
      )}
    </>
  );
}