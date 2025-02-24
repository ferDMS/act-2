"use client";

import { useState } from "react";

import LoginForm from "@/components/LoginForm";
import UserInfo from "@/components/UserInfo";

export default function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  return (
    <aside className="flex w-full bg-gray-300 items-center justify-evenly">
      {isLoggedIn ? (
        <UserInfo onLogout={() => setIsLoggedIn(false)} name={name} />
      ) : (
        <LoginForm
          onLogin={(name) => {
            setIsLoggedIn(true);
            setName(name);
          }}
        />
      )}
    </aside>
  );
}
