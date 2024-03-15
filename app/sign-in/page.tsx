import { Separator } from "@/components/ui/separator";
import FormLogin from "@/components/client-components/form-login";

export default function Page() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center h-screen w-[70%]">
        <FormLogin />
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
