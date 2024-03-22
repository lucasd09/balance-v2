import Nubank from "@/components/icons/nubank";
import { Wallet } from "lucide-react";

export default function BankSelector({ bank }: { bank: string }) {
  switch (bank) {
    case "nubank":
      return <Nubank className="size-8 mr-2 rounded-full" />;

    default:
      return (
        <div className="bg-neutral-500 size-8 flex items-center justify-center rounded-full">
          <Wallet className="size-4" />
        </div>
      );
  }
}
