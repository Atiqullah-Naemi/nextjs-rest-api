import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { IssueClient } from "./(main)/issues/client/issue-client";

export default async function Home() {
  const issues = await prismadb.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedIssues = issues.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      createdAt: format(item.createdAt, "MMMM do, yyyy").toString(),
    };
  });

  return (
    <>
      <IssueClient data={formattedIssues} />
    </>
  );
}
