"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PenLine } from "lucide-react";
import { useFetch } from "@/hooks/useSWR";
import { useUserStore } from "@/stores/user-store";
import { CategoryProps } from "../categories/overview";
import BudgetSkeleton from "./skeleton";

export default function BudgetOverview() {
  const user = useUserStore();
  const { data, mutate, isLoading } = useFetch<CategoryProps[]>(
    `/categories/${user.id}`
  );

  return (
    <div className="w-[600px] space-y-10 ">
      {isLoading ? (
        <BudgetSkeleton />
      ) : (
        data &&
        data.map((budget) => {
          return (
            <div className="space-y-2" key={budget.id}>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm">{budget.name}</p>
                <div className="flex space-x-4 items-center">
                  <p className="text-neutral-400 text-sm">-</p>
                  <Button className="h-8 w-8 p-0" variant={"outline"}>
                    <PenLine className="size-4 m-0" />
                  </Button>
                </div>
              </div>
              <Progress value={0} />
            </div>
          );
        })
      )}
    </div>
  );
}
