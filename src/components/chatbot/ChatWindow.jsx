import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";

export default function ChatWindow({
  messages,
  sendMessage,
  closeChat,
  loading,
}) {
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    sendMessage(input);

    setInput("");
  };

  return (
    <div
      className="
    fixed
    z-50

    inset-0

    sm:inset-auto
    sm:bottom-24
    sm:right-6

    w-full
    h-full

    sm:w-[380px]
    md:w-[400px]

    sm:h-[600px]
    sm:max-h-[80vh]

    bg-zinc-900
    border border-zinc-800

    rounded-none
    sm:rounded-3xl

    flex flex-col
    shadow-2xl
  "
    >
      {/* Header */}

      <div className="flex items-center justify-between p-5 border-b border-zinc-800">
        <h2 className="text-xl font-semibold">
          Rakesh AI Assistant
        </h2>

        <button
          onClick={closeChat}
          className="text-4xl leading-none text-zinc-300 hover:text-white transition"
        >
          ×
        </button>
      </div>

      {/* Messages */}

      <div className="chat-scroll flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[85%] px-5 py-3 rounded-3xl break-word ${
              msg.role === "user"
                ? "ml-auto bg-zinc-800"
                : "bg-zinc-800/80"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {/* Loading Indicator */}

        {loading && (
          <div className="bg-zinc-800/80 px-5 py-3 rounded-3xl w-fit">
            <div className="flex gap-1">
              <span className="animate-bounce">•</span>
              <span
                className="animate-bounce"
                style={{
                  animationDelay: "0.1s",
                }}
              >
                •
              </span>
              <span
                className="animate-bounce"
                style={{
                  animationDelay: "0.2s",
                }}
              >
                •
              </span>
            </div>
          </div>
        )}

        {/* Suggestions */}

        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2">
            {[
              "What technologies does Rakesh use?",
              "Tell me about Rakesh's projects",
              "Is Rakesh available for freelance work?",
              "How can I contact Rakesh?",
            ].map((question) => (
              <button
                key={question}
                onClick={() => sendMessage(question)}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-zinc-800
                  hover:bg-zinc-700
                  transition
                  text-sm
                "
              >
                {question}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}

      <div className="border-t border-zinc-800 p-4">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask me anything..."
            className="
              flex-1
              bg-zinc-800
              rounded-full
              px-5
              py-4
              outline-none
              text-white
              placeholder:text-zinc-400
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-12
              h-12
              rounded-full
              bg-cyan-500
              hover:bg-cyan-600
              disabled:opacity-50
              transition
              flex
              items-center
              justify-center
            "
          >
            <IoSend size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}