import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="my-12 mx-12">
      <div className="space-y-10">
        <h1 className="text-xl font-bold">Olá, Lucas</h1>
        <div className="space-y-2">
          <h2 className="text-md font-semibold">Contas Fixas</h2>
          <div className="flex space-x-4">
            <Card className="min-w-44 flex flex-col justify-center">
              <CardHeader className="py-2">
                <CardTitle className="text-sm flex justify-end">
                  Receita Mensal
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-end">
                <p className="font-bold text-primary text-xl">R$ 2866,67</p>
              </CardContent>
            </Card>
            <Card className="min-w-44 flex flex-col justify-center">
              <CardHeader className="py-2">
                <CardTitle className="text-sm flex justify-end">
                  Despesa Mensal
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-end">
                <p className="font-bold text-destructive text-xl">R$ 431,81</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-8 w-full">
        <div>
          <Card className="min-w-80">
            <CardHeader className="py-4">
              <CardTitle className="text-md">Contas a pagar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="border-l-4 border-destructive flex items-center justify-between pl-2 py-2">
                <div>
                  <p className="text-sm font-bold">Netflix</p>
                  <p className="text-xs dark:text-gray-400 text-gray-500">
                    12/03/2024
                  </p>
                </div>
                <p className="font-bold">R$ 34,90</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="min-w-80">
            <CardHeader className="py-4">
              <CardTitle className="text-md">Contas a Receber</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="border-l-4 border-primary flex items-center justify-between pl-2 py-2">
                <div>
                  <p className="text-sm font-bold">Salário</p>
                  <p className="text-xs dark:text-gray-400 text-gray-500">
                    12/03/2024
                  </p>
                </div>
                <p className="font-bold">R$ 2866,67</p>
              </div>
              <div className="border-l-4 border-primary flex items-center justify-between pl-2 py-2">
                <div>
                  <p className="text-sm font-bold">Rendimento</p>
                  <p className="text-xs dark:text-gray-400 text-gray-500">
                    12/03/2024
                  </p>
                </div>
                <p className="font-bold">R$ 65,70</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-md">Limite de gastos do mês</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
