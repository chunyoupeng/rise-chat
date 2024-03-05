"use client";
import { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [password, setPassword] = useState('');
  const  router = useRouter();
  useEffect(() => {
    // 当组件加载时检查是否已经登录
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated) {
      router.push('/home');
    }
  }, [router]);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'rise123456') {
      if (typeof window !== 'undefined') {
        // 设置一个标志（如 localStorage）表示用户已登录
        localStorage.setItem('authenticated', 'true');
        router.push('/home');
      }
    } else {
      alert('密码错误！');
    }
  };

  return (
<form onSubmit={handleLogin} className="flex flex-col space-y-4 justify-center items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    登录
  </button>
</form>
  );
}

export default LoginPage;