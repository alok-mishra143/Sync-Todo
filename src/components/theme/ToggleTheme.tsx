import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "./theme-provider";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div>
      <Button variant="ghost" onClick={toggleTheme}>
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default ToggleTheme;
