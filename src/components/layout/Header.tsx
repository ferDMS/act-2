import Link from "next/link";
import { User } from "@/types/user";

interface HeaderProps {
  user: User | null;
  setView: (view: string) => void;
}

export default function Header({ user, setView }: HeaderProps) {
  return (
    <header>
      {user === null ? (
        <div className="flex h-[73px] bg-black"></div>
      ) : (
        <div className="flex h-[73px] text-2xl font-bold bg-black text-white items-center justify-evenly">
          <button
            className="hover:text-gray-400"
            onClick={() => setView("counter")}
          >
            Counter
          </button>
          <button
            className="hover:text-gray-400"
            onClick={() => setView("colors")}
          >
            Colors
          </button>
        </div>
      )}
    </header>
  );
}
