import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-[73px] text-2xl font-bold bg-black text-white items-center justify-evenly">
      <Link className="hover:text-gray-400" href="counter">
        Counter
      </Link>
      <Link className="hover:text-gray-400" href="colors">
        Colors
      </Link>
    </header>
  );
}
