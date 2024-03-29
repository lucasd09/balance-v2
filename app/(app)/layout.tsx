import AddEntry from "@/components/client-components/add-entry";
import Sidebar from "@/components/client-components/sidebar";
import { Toaster } from "@/components/ui/sonner";

import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Balance - App",
  description: "",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const token = cookieStore.get("balance-token");

  if (!token) {
    redirect("/sign-in");
  }

  return (
    <div className="flex select-none">
      <Sidebar />
      <div className="flex w-full ml-14">{children}</div>
      <div className="absolute bottom-6 right-6"></div>
      <Toaster />
    </div>
  );
}
