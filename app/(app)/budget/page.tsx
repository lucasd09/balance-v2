import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { PenLine } from "lucide-react";

export default function Page() {
  return (
    <div className="mt-12 mx-6 w-full space-y-10">
      <div className="flex justify-center">
        <h1 className="text-xl font-bold">Limite de gastos</h1>
        <div className="absolute flex space-x-2 right-6">
          <Input />
          <Button variant={"secondary"}>Visualizar</Button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-[600px] space-y-10 ">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm">Alimentação</p>
              <div className="flex space-x-4 items-center">
                <p className="text-neutral-400 text-sm">R$ 0,00 de R$ 200,00</p>
                <Button className="h-8 w-8 p-0" variant={"outline"}>
                  <PenLine className="size-4 m-0" />
                </Button>
              </div>
            </div>
            <Progress value={70} />
          </div>
        </div>
      </div>
    </div>
  );
}
