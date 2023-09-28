"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function IssueForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    try {
      setLoading(true);

      await axios.post("/api/issues", data);
      router.push("/");
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

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
        {loading ? "creating..." : " Create"}
      </Button>
    </form>
  );
}

export default IssueForm;
