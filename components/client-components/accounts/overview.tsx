"use client";
import { Card } from "@/components/ui/card";
import AddAccount from "./add-account";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { useFetch } from "@/hooks/useSWR";
import { useUserStore } from "@/stores/user-store";
import AccountSkeleton from "./account-skeleton";
import BankSelector from "./bank-selector";

export type AccountProps = {
  id: number;
  name: string;
  bank: string;
  balance: number;
};

export default function AccountsOverview() {
  const user = useUserStore();
  const { data, mutate, isLoading } = useFetch<AccountProps[]>(
    `/accounts/${user.id}`
  );

  return (
    <div className="flex flex-wrap w-[900px]">
      {isLoading ? (
        <div>
          <AccountSkeleton />
        </div>
      ) : (
        data &&
        data.map((account) => {
          const balance = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(account.balance);
          return (
            <ContextMenu key={account.id}>
              <ContextMenuTrigger>
                <Card className="w-64 h-32 px-4 py-4 flex flex-col justify-between mr-4 mb-4">
                  <div className=" flex items-center justify-between">
                    <BankSelector bank={account.bank} />
                    <h1 className="text-sm font-bold">{account.name}</h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs">Saldo da conta</p>
                    <p className="text-xs font-bold">{balance}</p>
                  </div>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Ver mais</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Arquivar</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          );
        })
      )}
      {isLoading ? <></> : <AddAccount />}
    </div>
  );
}
