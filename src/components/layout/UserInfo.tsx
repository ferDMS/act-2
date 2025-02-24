interface UserInfoProps {
  onLogout: () => void;
  name: string;
}

export default function UserInfo({ onLogout, name }: UserInfoProps) {
  return (
    <div className="flex flex-col w-full space-y-10 px-10 items-center">
      <h2 className="text-4xl font-bold">Hey, {name}!</h2>

      <h3 className="text-md">Welcome back!</h3>

      <button
        className="flex py-2 px-5 rounded-full bg-red-400 font-bold"
        onClick={onLogout}
      >
        Exit
      </button>
    </div>
  );
}
