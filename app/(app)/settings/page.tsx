"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme();

  function onChange() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Switch
          id="dark-mode"
          checked={theme == "dark"}
          onCheckedChange={onChange}
        />
        <Label htmlFor="dark-mode">Tema Escuro</Label>
      </div>
    </div>
  );
}
