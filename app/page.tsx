import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ 西南大学RISE 私用GPT-4 
      </h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      titleText="Chat"
      placeholder="我是GPT-4,有什么可以帮助你的吗?"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
