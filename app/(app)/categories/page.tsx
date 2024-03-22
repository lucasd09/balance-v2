import CategoryOverview from "@/components/client-components/categories/overview";

export default function Page() {
  return (
    <div className="mt-12 ml-6 w-full space-y-10">
      <div className="flex justify-center">
        <h1 className="text-xl font-bold">Categorias</h1>
      </div>
      <div className="flex w-full justify-center">
        <CategoryOverview />
      </div>
    </div>
  );
}
