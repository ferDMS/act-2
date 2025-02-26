"use client";

import { ReactNode } from "react";
import { useState } from "react";

import { useUser } from "@/context/UserContext";
import Header from "@/components/layout/Header";
import LogInForm from "@/components/auth/LogInForm";
import SignInPrompt from "@/components/auth/SignInPrompt";
import UserInfo from "@/components/layout/UserInfo";

import Colors from "@/app/colors/page";
import Counter from "@/app/counter/page";

export default function Home() {
  const { user, setUser } = useUser();
  const [view, setView] = useState("colors");

  const renderComponent = () => {
    switch (view) {
      case "colors":
        return <Colors />;
      default:
        return <Counter />;
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <Header user={user} setView={setView} />
      </div>
      <div className="grid grid-cols-5 min-h-[calc(100vh-73px)]">
        <div className="col-span-2">
          <aside className="flex h-full bg-gray-300 items-center justify-evenly">
            {user === null ? (
              <SignInPrompt />
            ) : (
              <UserInfo user={user} setUser={setUser} />
            )}
          </aside>
        </div>
        <div className="flex col-span-3 items-center justify-center px-[20%] bg-gray-100">
          {user === null ? <LogInForm /> : renderComponent()}
        </div>
      </div>
    </div>
  );
}
