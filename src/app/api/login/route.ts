import { NextResponse } from "next/server";
import data from "@/app/data.json";

export async function POST(request: Request) {
  const params = await request.json();
  const user = data.users.find(
    (user: any) =>
      user.email === params.email && user.password === params.password
  );

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const { email, password, ...userData } = user;
  return NextResponse.json({ success: true, user: userData }, { status: 200 });
}
