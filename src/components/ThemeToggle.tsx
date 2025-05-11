
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === "dark"}
      onPressedChange={toggleTheme} 
      aria-label="Toggle theme" 
      className="rounded-full p-2.5"
    >
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
    </Toggle>
  );
}
