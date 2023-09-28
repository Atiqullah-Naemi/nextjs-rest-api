import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  { params }: { params: { issueId: string } }
) {
  try {
    const body = await req.json();
    const { title, description } = await body;

    if (!params.issueId)
      return new NextResponse("issue id is required", { status: 400 });

    const issue = await prismadb.issue.update({
      where: {
        id: params.issueId,
      },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(issue);
  } catch (error) {
    console.error({ error });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { issueId: string } }
) {
  if (!params.issueId)
    return new NextResponse("issue id is required", { status: 400 });

  try {
    const issue = await prismadb.issue.delete({
      where: {
        id: params.issueId,
      },
    });

    return NextResponse.json(issue);
  } catch (error) {
    console.error({ error });
    return new NextResponse("Internal error", { status: 500 });
  }
}
