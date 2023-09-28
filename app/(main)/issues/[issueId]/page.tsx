import CardContainer from "@/components/card-container";
import IssueForm from "../client/issue-form";
import prismadb from "@/lib/prismadb";

export default async function Issues({
  params,
}: {
  params: { issueId: string };
}) {
  const issue = await prismadb.issue.findUnique({
    where: {
      id: params.issueId,
    },
  });

  return (
    <CardContainer>
      <IssueForm initialData={issue} />
    </CardContainer>
  );
}
