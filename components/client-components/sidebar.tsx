"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  LogOut,
  Settings,
  Landmark,
  HandCoins,
  Tag,
  WalletMinimal,
} from "lucide-react";
import { Button } from "../ui/button";
import ConfirmDialog from "./confirm-dialog";
import { useUserStore } from "@/stores/user-store";
import { useEffect } from "react";

export default function Sidebar() {
  useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex flex-col select-none pt-14 items-start justify-between w-14 h-screen overflow-clip border-r transition-width duration-300 hover:w-48">
      <div>
        <Link
          href={"/dashboard"}
          className="flex h-14 items-center w-48 hover:bg-secondary transition-colors"
        >
          <LayoutDashboard className="h-6 w-6 mx-[14px]" />
          <p className="text-xs m-1 font-medium">Dashboard</p>
        </Link>
        <Link
          href={"/transactions"}
          className="flex h-14 items-center w-48 hover:bg-secondary transition-colors"
        >
          <WalletMinimal className="h-6 w-6 mx-[14px]" />
          <p className="text-xs m-1 font-medium">Transações</p>
        </Link>

        <Link
          href={"/accounts"}
          className="flex h-14 items-center w-48 hover:bg-secondary transition-colors"
        >
          <Landmark className="h-6 w-6 mx-[14px]" />
          <p className="text-xs m-1 font-medium">Contas</p>
        </Link>
        <Link
          href={"/budget"}
          className="flex h-14 items-center w-48 hover:bg-secondary transition-colors"
        >
          <HandCoins className="h-6 w-6 mx-[14px]" />
          <p className="text-xs m-1 font-medium">Limite de gastos</p>
        </Link>
        <Link
          href={"/categories"}
          className="flex h-14 items-center w-48 hover:bg-secondary transition-colors"
        >
          <Tag className="h-6 w-6 mx-[14px]" />
          <p className="text-xs m-1 font-medium">Categorias</p>
        </Link>
      </div>
      <div>
        <Link
          href={"/settings"}
          className="flex h-14 items-center w-48 hover:bg-secondary transition-colors"
        >
          <Settings className="h-6 w-6 mx-[14px]" />
          <p className="text-xs m-1 font-medium">Configurações</p>
        </Link>

        <ConfirmDialog
          title="Deseja Sair?"
          description="Ao sair, suas modificações serão salvas."
          action={() => {}}
        >
          <Button
            className="flex h-14 p-0 w-48 items-center justify-start"
            variant={"ghost"}
          >
            <LogOut className="h-6 w-6 mx-[14px]" />
            <p className="text-xs m-1">Sair</p>
          </Button>
        </ConfirmDialog>
      </div>
    </div>
  );
}
