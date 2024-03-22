import BudgetOverview from "@/components/client-components/budget/overview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="my-12 mx-6 w-full space-y-10">
      <div className="flex justify-center">
        <h1 className="text-xl font-bold">Limite de gastos</h1>
        <div className="absolute flex space-x-2 right-6">
          <Input />
          <Button variant={"secondary"}>Visualizar</Button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <BudgetOverview />
      </div>
    </div>
  );
}
