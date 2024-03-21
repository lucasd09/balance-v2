"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/services/axios";
import { toast } from "sonner";
import { KeyedMutator } from "swr";
import { CategoryProps } from "./overview";

const schema = z.object({
  name: z.string({ required_error: "Obrigatório" }),
});

type form = z.infer<typeof schema>;

export default function AddCategory({
  userId,
  mutate,
}: {
  userId: number;
  mutate: KeyedMutator<CategoryProps[]>;
}) {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  async function handleForm({ name }: form) {
    const res = await api.post("/categories", { name, userId });

    if (res.status === 201) {
      mutate();
      return toast("Sucesso", {
        description: "Categoria adicionada com êxito.",
        closeButton: true,
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Adicionar</Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForm)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end mt-4 space-x-2">
              <DialogClose>
                <Button variant={"outline"} type="button">
                  Cancelar
                </Button>
              </DialogClose>
              <Button>Salvar</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
