"use client";

import clsx from "clsx";
import { useState } from "react";
import Rectangle from "@/components/layout/Rectangle";

export default function Colors() {
  const colors = {
    red: "bg-red-300",
    orange: "bg-orange-300",
    yellow: "bg-yellow-300",
    green: "bg-green-300",
    blue: "bg-blue-300",
    purple: "bg-purple-300",
  };

  const defaultBgColor = "bg-gray-400";
  const [color, setColor] = useState(defaultBgColor);

  const handleSubmit = (e: React.FormEvent, bgClass: string) => {
    e.preventDefault();
    setColor(bgClass);
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-evenly space-y-5">
      <Rectangle bgClass={color} />
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(colors).map(([color, bgClass]) => (
          <button
            key={color}
            onClick={(e) => handleSubmit(e, bgClass)}
            className={clsx("p-4", bgClass, "rounded-md")}
          >
            {color}
          </button>
        ))}
        <button
          key={defaultBgColor}
          onClick={(e) => handleSubmit(e, defaultBgColor)}
          className="flex col-span-3 bg-gray-400 p-4 justify-center items-center rounded-md"
        >
          Reset
        </button>
      </div>
    </main>
  );
}
