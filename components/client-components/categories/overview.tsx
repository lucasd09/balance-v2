"use client";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useSWR";
import { useUserStore } from "@/stores/user-store";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../data-table";
import { RefreshCw, Trash2 } from "lucide-react";
import AddCategory from "./add-category";
import ConfirmDialog from "../confirm-dialog";
import { api } from "@/services/axios";
import { toast } from "sonner";

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
          <ConfirmDialog
            title="Tem certeza?"
            description="Essa ação irá excluir a categoria selecionada."
            action={async () => {
              const res = await api.delete(`/categories/${category.id}`);

              if (res.status === 204) {
                return toast("Sucesso", {
                  description: "Categoria removida com êxito.",
                  closeButton: true,
                });
              }
            }}
          >
            <Button
              className="h-8 w-8 p-0"
              variant={"outline"}
              disabled={category.userId === null}
            >
              <Trash2 size={18} />
            </Button>
          </ConfirmDialog>
        </div>
      );
    },
  },
];

export default function CategoryOverview() {
  const user = useUserStore();
  const { data, mutate } = useFetch<CategoryProps[]>(`/categories/${user.id}`);

  return (
    <div className="w-[512px] space-y-4">
      <div className="flex space-x-2 justify-between">
        <AddCategory userId={user.id} mutate={mutate} />
        <Button size={"icon"} variant={"outline"} onClick={() => mutate()}>
          <RefreshCw size={18} />
        </Button>
      </div>
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
