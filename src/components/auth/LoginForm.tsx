import { User } from "@/types/user";
import { useUser } from "@/context/UserContext";

export default function LogInForm() {
  const { setUser } = useUser(); // Move hook to component level

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("Email");
    const password = formData.get("Password");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response) {
        const data = await response.json();
        if (response.status === 200) {
          setUser(data.user as User);
          console.log(data);
        } else {
          console.log("Login failed:", data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className="flex flex-col w-full space-y-10 px-10 items-center"
      method="post"
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl font-bold">Log In</h2>

      <h3 className="text-md">
        With an account, you can save your counter and color preference! To
        access, please provide your email and a secure password below:
      </h3>

      <div className="grid grid-cols-3 w-full gap-y-5 gap-x-10 text-md">
        {/* <label className="font-bold">Name</label>
        <input
          className="col-span-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 px-5"
          name="Name"
          type="text"
        /> */}
        <label className="font-bold">Email</label>
        <input
          className="col-span-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 px-5"
          name="Email"
          type="email"
        />
        <label className="font-bold">Password</label>
        <input
          className="col-span-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 px-5"
          name="Password"
          type="password"
        />
      </div>
      <button
        className="flex py-2 px-5 rounded-full bg-green-400 font-bold"
        type="submit"
      >
        Enter
      </button>
    </form>
  );
}
