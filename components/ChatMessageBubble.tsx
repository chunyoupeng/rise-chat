import type { Message } from "ai/react";
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // 引入Katex的样式
import rehypeRaw from 'rehype-raw';

export function ChatMessageBubble(props: { message: Message, aiEmoji?: string, sources: any[] }) {
  const colorClassName =
    props.message.role === "user" ? "bg-sky-600" : "bg-slate-50 text-black";
  const alignmentClassName =
    props.message.role === "user" ? "ml-auto" : "mr-auto";
  const prefix = props.message.role === "user" ? "🧑" : props.aiEmoji;
  return (
    <div
      className={`${alignmentClassName} ${colorClassName} rounded px-4 py-2 max-w-[80%] mb-8 flex`}
    >
      <div className="mr-2">
        {prefix}
      </div>
      <div className="whitespace-pre-wrap flex flex-col overflow-auto break-words">
        {/* <span>{props.message.content}</span> */}

<ReactMarkdown rehypePlugins={[rehypeRaw, rehypeKatex as any]}>
  {props.message.content}
</ReactMarkdown>
      </div>
    </div>
  );
}