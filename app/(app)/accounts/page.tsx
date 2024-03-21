import AccountsOverview from "@/components/client-components/accounts/overview";

export default function Page() {
  return (
    <div className="mt-12 ml-12 space-y-10">
      <h1 className="text-xl font-bold">Contas</h1>
      <AccountsOverview />
    </div>
  );
}
