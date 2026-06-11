import { MessageCircle } from "lucide-react";

export default function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-cyan-500
      p-4
      rounded-full
      shadow-lg
      hover:scale-110
      transition
      "
    >
      <MessageCircle />
    </button>
  );
}