
'use client';
import {useState} from 'react';

export default function Home() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("your name:");

  const doChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const doClick = () => {
    setMessage(`Hello, ${input}!`);
  }

  return (
    <main>
      <h1 className="text-2xl m-5 text-red-500">Welcome to Next.js!</h1>
      <p className="text-lg m-5">{message}</p>
      <div className="m-5">
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          value={input}
          onChange={doChange}
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button onClick={doClick} className="bg-blue-800 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </main>
  );
}
