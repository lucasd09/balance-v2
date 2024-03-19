"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import GoogleIcon from "@/components/icons/google";
import { Separator } from "../ui/separator";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string({ required_error: "Obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z.string({ required_error: "Obrigatório" }),
});

type form = z.infer<typeof schema>;

export default function FormLogin() {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  async function handleForm({ email, password }: form) {
    const token = await signIn({ email, password });

    if (!!token) {
      router.push("/dashboard");
    } else {
    }
  }

  return (
    <div className="w-[380px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)} className="space-y-8">
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
        <Button className="w-full" variant={"outline"}>
          <GoogleIcon className="size-5 mr-2" />
          Google
        </Button>
      </div>
    </div>
  );
}
