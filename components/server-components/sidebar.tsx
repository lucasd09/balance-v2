import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  PiggyBank,
  LogOut,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <div className="flex flex-col select-none pt-14 items-start justify-between w-14 h-screen overflow-clip border transition-width duration-300 hover:w-44">
      <div>
        <Link
          href={"/dashboard"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <LayoutDashboard className="h-6 w-6 mx-[13px]" />
          <p className="text-sm m-1 font-medium">Dashboard</p>
        </Link>
        <Link
          href={"/expenses"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <Wallet className="h-6 w-6 mx-[13px]" />
          <p className="text-sm m-1 font-medium">Despesas</p>
        </Link>
        <Link
          href={"/revenues"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <PiggyBank className="h-6 w-6 mx-[13px]" />
          <p className="text-sm m-1 font-medium">Receitas</p>
        </Link>
      </div>
      <div>
        <Button
          className="flex h-14 p-0 w-44 items-center justify-start"
          variant={"ghost"}
        >
          <Settings className="h-6 w-6 mx-[13px]" />
          <p className="text-sm m-1">Configurações</p>
        </Button>
        <Button
          className="flex h-14 p-0 w-44 items-center justify-start"
          variant={"ghost"}
        >
          <LogOut className="h-6 w-6 mx-[13px]" />
          <p className="text-sm m-1">Sair</p>
        </Button>
      </div>
    </div>
  );
}
