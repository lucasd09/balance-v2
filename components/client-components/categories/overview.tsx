"use client";

import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useSWR";
import { useUserStore } from "@/stores/user-store";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../data-table";
import { Trash2 } from "lucide-react";
import AddCategory from "./add-category";

export type CategoryProps = {
  id: number;
  name: string;
  userId: number;
};

const columns: ColumnDef<CategoryProps>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="flex justify-end">
          <Button
            className="h-8 w-8 p-0"
            variant={"outline"}
            disabled={category.userId === null}
          >
            <Trash2 size={18} />
          </Button>
        </div>
      );
    },
  },
];

export default function CategoryOverview() {
  const user = useUserStore();
  const { data } = useFetch<CategoryProps[]>(`/categories/${user.id}`);

  return (
    <div className="w-[512px]">
      <AddCategory />
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
