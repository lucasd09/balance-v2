"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
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
import { Separator } from "@/components/ui/separator";
import GoogleIcon from "@/components/icons/google";
import { redirect } from "next/dist/server/api-utils";

const schema = z.object({
  email: z
    .string({ required_error: "Obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z.string({ required_error: "Obrigatório" }),
});

type form = z.infer<typeof schema>;

export default function Page() {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  async function handleForm({ email, password }: form) {
    signIn("credentials", { email, password }, { redirect: false });
  }

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center h-screen w-[70%]">
        <div className="w-[380px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleForm)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Login</Button>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between">
            <Separator className="w-[30%]" />
            <p className="text-sm text-gray-500">Ou faça login com</p>
            <Separator className="w-[30%]" />
          </div>
          <div className="mt-4">
            <Button
              className="w-full"
              variant={"outline"}
              onClick={() => signIn("google")}
            >
              <GoogleIcon className="size-5 mr-2" />
              Google
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Separator orientation="vertical" className="h-[46%]" />
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Balance
        </h1>
        <Separator orientation="vertical" className="h-[46%]" />
      </div>
    </div>
  );
}
