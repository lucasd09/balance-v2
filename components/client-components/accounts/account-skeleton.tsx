import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AccountSkeleton() {
  return (
    <Card className="w-64 h-32 px-4 py-4 flex flex-col justify-between mr-4 mb-4">
      <div className=" flex items-center justify-between">
        <Skeleton className="size-8 mr-2 rounded-full bg-secondary" />
        <Skeleton className="size-8 w-44 bg-secondary" />
      </div>
      <div className="flex justify-between items-center">
        <Skeleton className="size-8 w-full bg-secondary" />
      </div>
    </Card>
  );
}
