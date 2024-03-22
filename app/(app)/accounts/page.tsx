import AccountsSummary from "@/components/client-components/accounts/accounts-summary";
import AccountsOverview from "@/components/client-components/accounts/overview";

export default function Page() {
  return (
    <div className="mt-12 ml-6 space-y-10">
      <h1 className="text-xl font-bold">Contas</h1>
      <div className="flex">
        <AccountsOverview />
        <AccountsSummary />
      </div>
    </div>
  );
}
