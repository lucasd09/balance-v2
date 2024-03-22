import { Skeleton } from "@/components/ui/skeleton";

export default function BudgetSkeleton() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="flex justify-between items-center space-x-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-8 p-0" />
        </div>
        <Skeleton className="w-full h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center space-x-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-8 p-0" />
        </div>
        <Skeleton className="w-full h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center space-x-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-8 p-0" />
        </div>
        <Skeleton className="w-full h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center space-x-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-8 p-0" />
        </div>
        <Skeleton className="w-full h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center space-x-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-8 p-0" />
        </div>
        <Skeleton className="w-full h-2" />
      </div>
    </div>
  );
}
