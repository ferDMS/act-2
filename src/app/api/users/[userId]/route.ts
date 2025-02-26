import { NextResponse } from "next/server";
import data from "@/app/data.json";

/*
In a typical setup, the context parameter in a route handler can be used to access dynamic route parameters.
*/
export async function GET(request: Request, context: any) {
  const { params } = context;
  const user = data.users.filter((x) => params.userId === x.id.toString());

  if (user.length > 0) {
    return NextResponse.json(user[0]);
  } else {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }
}
