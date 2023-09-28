"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Issue } from "@prisma/client";
import useModal from "@/zustand/useModal";

interface IssueFormProps {
  initialData: Issue | null;
}

const IssueForm: React.FC<IssueFormProps> = ({ initialData }) => {
  const defaultValues = initialData
    ? initialData
    : {
        title: "",
        description: "",
      };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues, mode: "onChange" });
  const router = useRouter();
  const { setOpen } = useModal();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    try {
      setLoading(true);

      if (initialData) {
        await axios.patch(`/api/issues/${initialData.id}`, {
          ...data,
        });

        router.refresh();
        router.push("/");
      } else {
        await axios.post("/api/issues", data);
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const buttonLoadingText = initialData ? "Upadating..." : "Creating...";
  const buttonText = initialData ? "Upadate" : "Create";

  return (
    <form
      className="flex flex-col w-full p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full py-5">
        <h3 className="text-2xl font-semibold">Create new issue</h3>
      </div>

      <div className="w-full py-5">
        <Input placeholder="title" {...register("title")} />
      </div>
      <div className="w-full py-5">
        <Input placeholder="description" {...register("description")} />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? buttonLoadingText : buttonText}
      </Button>
    </form>
  );
};

export default IssueForm;
