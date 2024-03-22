import { DialogContent } from "@/components/ui/dialog";
import { AccountProps } from "./overview";
import { KeyedMutator } from "swr";

export default function AccountEdit({
  account,
  mutate,
}: {
  account: AccountProps;
  mutate: KeyedMutator<AccountProps[]>;
}) {
  return <DialogContent>alo</DialogContent>;
}
