import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="mt-12 ml-12">
      <div className="space-y-10">
        <h1 className="text-xl font-bold">Olá, Lucas</h1>
        <div className="space-y-2">
          <h2 className="text-md font-semibold">Contas Fixas</h2>
          <div className="flex space-x-4">
            <Card className="min-w-44">
              <CardHeader className="py-4">
                <CardTitle className="text-sm flex justify-end">
                  Receita Mensal
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-end">
                <p className="font-bold text-primary text-xl">R$ 2866,67</p>
              </CardContent>
            </Card>
            <Card className="min-w-44">
              <CardHeader className="py-4">
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
    </div>
  );
}
