import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./use-theme";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function ModeToggler() {
  const { setTheme } = useTheme();

  return (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-30 p-0 rounded-sm grid"
        align="end"
        side="bottom"
      >
        <div
          className="hover:bg-accent p-2 text-sm lg:text-base"
          onClick={() => setTheme("light")}
        >
          Light
        </div>
        <div
          className="hover:bg-accent p-2 text-sm lg:text-base"
          onClick={() => setTheme("dark")}
        >
          Dark
        </div>
        <div
          className="hover:bg-accent p-2 text-sm lg:text-base"
          onClick={() => setTheme("system")}
        >
          System
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
