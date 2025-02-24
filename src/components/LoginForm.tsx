export default function LoginForm() {
  return (
    <div className="flex flex-col w-full space-y-10 px-10 items-center">
      <h2 className="text-4xl font-bold">Log In</h2>
      <h3 className="text-md">
        With an account, you can save your counter and color preference! To
        access, please provide your email and a secure password below:
      </h3>
      <div className="grid grid-cols-3 w-full gap-y-5 gap-x-10 text-xl font-bold">
        <h3>Email</h3>
        <div className="col-span-2 bg-gray-100 rounded-full"></div>
        <h3>Password</h3>
        <div className="col-span-2 bg-gray-100 rounded-full"></div>
      </div>
      <h2>Hola</h2>
    </div>
  );
}
