import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const issue = await prismadb.issue.create({
      data: { ...data },
    });

    return NextResponse.json(issue);
  } catch (error) {
    console.log({ error });
  }
}
