import Link from "next/link";
import { LayoutDashboard, Wallet, PiggyBank } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col select-none py-14 items-start w-14 h-screen overflow-clip border transition-width duration-300 hover:w-44">
      <Link href={"/dashboard"} className="flex h-14 items-center ">
        <LayoutDashboard className="h-6 w-6 mx-[13px]" />
        <p className="text-sm m-1">Dashboard</p>
      </Link>
      <Link href={"/expenses"} className="flex h-14 items-center ">
        <Wallet className="h-6 w-6 mx-[13px]" />
        <p className="text-sm m-1">Despesas</p>
      </Link>
      <Link href={"/revenues"} className="flex h-14 items-center ">
        <PiggyBank className="h-6 w-6 mx-[13px]" />
        <p className="text-sm m-1">Receitas</p>
      </Link>
    </div>
  );
}
