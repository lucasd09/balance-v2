"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  PiggyBank,
  LogOut,
  Settings,
  Landmark,
} from "lucide-react";
import { Button } from "../ui/button";
import ConfirmDialog from "./confirm-dialog";

export default function Sidebar() {
  return (
    <div className="flex flex-col select-none pt-14 items-start justify-between w-14 h-screen overflow-clip border-r transition-width duration-300 hover:w-44">
      <div>
        <Link
          href={"/dashboard"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <LayoutDashboard className="h-6 w-6 mx-[14px]" />
          <p className="text-sm m-1 font-medium">Dashboard</p>
        </Link>
        <Link
          href={"/expenses"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <Wallet className="h-6 w-6 mx-[14px]" />
          <p className="text-sm m-1 font-medium">Despesas</p>
        </Link>
        <Link
          href={"/revenues"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <PiggyBank className="h-6 w-6 mx-[14px]" />
          <p className="text-sm m-1 font-medium">Receitas</p>
        </Link>
        <Link
          href={"/accounts"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <Landmark className="h-6 w-6 mx-[14px]" />
          <p className="text-sm m-1 font-medium">Contas</p>
        </Link>
      </div>
      <div>
        <Link
          href={"/settings"}
          className="flex h-14 items-center w-44 hover:bg-secondary transition-colors"
        >
          <Settings className="h-6 w-6 mx-[14px]" />
          <p className="text-sm m-1 font-medium">Configurações</p>
        </Link>

        <ConfirmDialog
          title="Deseja Sair?"
          description="Ao sair, suas modificações serão salvas."
          action={() => {}}
        >
          <Button
            className="flex h-14 p-0 w-44 items-center justify-start"
            variant={"ghost"}
          >
            <LogOut className="h-6 w-6 mx-[14px]" />
            <p className="text-sm m-1">Sair</p>
          </Button>
        </ConfirmDialog>
      </div>
    </div>
  );
}
