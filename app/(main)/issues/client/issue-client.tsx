"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { IssueColumns, columns } from "./columns";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface IssueProps {
  data: IssueColumns[];
}

export const IssueClient: React.FC<IssueProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-row h-[50px] justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <Label className="text-lg">Categories</Label>

            <Button onClick={() => router.push(`/issues/new`)}>
              <Plus size={20} className="mr-2" /> Create new Issue
            </Button>
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
