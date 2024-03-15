import Sidebar from "@/components/client-components/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balance - App",
  description: "",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
      <div className="absolute bottom-6 right-6">
        <Button size={"icon"}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
