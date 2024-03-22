"use client";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
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
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string({ required_error: "Obrigatório" }),
  bank: z.string({ required_error: "Obrigatório" }),
  balance: z.number().optional(),
});

type form = z.infer<typeof schema>;

export default function AddAccount() {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  async function handleForm({ name }: form) {}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-64 h-32 px-4 py-4 flex flex-col justify-center items-center mr-4 mb-4 cursor-pointer">
          <Plus className="size-12 text-primary dark:text-neutral-600" />
        </Card>
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
