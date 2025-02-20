import Link from "next/link";

export default function Header() {
    return (
        <header className="flex w-auto h-24 shadow-xl">
            <div className="flex w-screen items-center justify-evenly text-2xl font-bold bg-gray-400">
                <Link href="home">Home</Link>
                <Link href="colors">Colors</Link>
            </div>
        </header>
    );
}
