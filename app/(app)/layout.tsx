import AddEntry from "@/components/client-components/add-entry";
import Sidebar from "@/components/client-components/sidebar";

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
        <AddEntry />
      </div>
    </div>
  );
}
