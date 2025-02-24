"use client"; // Mark component as Client Side Component instead of Server Side Component

import { useState } from "react"; // Object destrusturing in Javascript

export default function Counter() {
  const [counter, setCounter] = useState(0); // Array destructuring in Javascript.
  // Initial value for `counter` will be 10

  const handleSubmitIncrease = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const handleSubmitDecrease = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter - 1);
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center space-y-5">
      <h1 className="text-8xl font-bold text-gray-800">{counter}</h1>
      {/* Name of the form submit event handler */}

      <div className="flex justify-center space-x-4">
        <form onSubmit={handleSubmitIncrease}>
          <button
            type="submit"
            className="w-full bg-green-300 text-black rounded-md px-4 py-2 hover:bg-green-400"
          >
            Increase
          </button>
        </form>
        <form onSubmit={handleSubmitDecrease}>
          <button
            type="submit"
            className="w-full bg-red-300 text-black rounded-md px-4 py-2 hover:bg-red-400"
          >
            Decrease
          </button>
        </form>
      </div>
    </main>
  );
}
