"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-3 ">
      {theme === "dark" ? (
        <FaMoon className="text-yellow-500" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
      <Switch
        onClick={handleToggle}
        checked={theme === "dark"}
        className=" transition-all duration-200"
      />
    </div>
  );
};

export default DarkMode;
