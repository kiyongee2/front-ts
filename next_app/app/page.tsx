
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
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="msg">{message}</p>
      <div className="m-5">
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          value={input}
          onChange={doChange}
          className="input"
        />
        <button onClick={doClick} className="button">
          Submit
        </button>
      </div>
      <div>
          <a href="/other" className="link">Go to Other Page</a>
      </div>
    </main>
  );
}
