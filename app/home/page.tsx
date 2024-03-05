"use client";
import { ChatWindow } from "@/components/ChatWindow";
import { useEffect } from "react";
import Router from "next/router";


export default function Home() {


  useEffect(() => {
    // 检查用户是否已认证
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated !== 'true') {
      // 如果没有认证，重定向到登录页面
      Router.push('/');
    }
    // 依赖数组为空，这段代码仅在组件挂载时执行一次
  }, []);
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ 西南大学RISE 内部GPT-4 
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