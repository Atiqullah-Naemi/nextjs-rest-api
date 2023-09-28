"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { IssueColumns, columns } from "./columns";
import { Plus } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import IssueForm from "./issue-form";

interface IssueProps {
  data: IssueColumns[];
}

export const IssueClient: React.FC<IssueProps> = ({ data }) => {
  return (
    <>
      <div className="w-full flex flex-row h-[50px] justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <Label className="text-lg">Issues</Label>

            <Dialog>
              <DialogTrigger>
                <Button>
                  <Plus size={20} className="mr-2" /> Create new Issue
                </Button>
              </DialogTrigger>
              <DialogContent>
                <IssueForm initialData={null} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
