import { User } from "@/types/user";

interface UserInfoProps {
  user: User;
  setUser: (user: User | null) => void;
}

export default function UserInfo({ user, setUser }: UserInfoProps) {
  return (
    <div className="flex flex-col w-full space-y-10 px-10 items-center">
      <h2 className="text-4xl font-bold">Hey, {user.name}!</h2>

      <h3 className="text-md">Welcome back!</h3>

      {/* <p>Your prefered color is {user.color}</p>
      <p>And your count is {user.count}</p> */}

      <button
        className="flex py-2 px-5 rounded-full bg-red-400 font-bold"
        onClick={() => setUser(null)}
      >
        Exit
      </button>
    </div>
  );
}
