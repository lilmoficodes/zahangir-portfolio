"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

type ToggleProps = {
  children: ReactNode;
};

type Theme = "light" | "dark";

const ToggleThemeSwitcher = ({ children }: ToggleProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black h-screen w-full"}>
      {/* Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded cursor-pointer"
      >
        {theme === "dark" ? <SunIcon/> : <MoonIcon/>}
      </button>

      {children}
    </div>
  );
};

export default ToggleThemeSwitcher;
