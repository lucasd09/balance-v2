import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function AddEntry() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar lançamento</DialogTitle>
          <DialogDescription>
            Adicione manualmente um lançamento, seja ele uma despesa ou receita
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
