"use client";

import { useState } from "react";

import LoginForm from "@/components/auth/LoginForm";
import UserInfo from "@/components/layout/UserInfo";

export default function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  return (
    <aside className="flex h-full bg-gray-300 items-center justify-evenly">
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
