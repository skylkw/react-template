import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "darkMode";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const ref = useRef<HTMLDivElement>(null);

  const toggleDarkMode = async () => {
    const newMode = !darkMode;
    localStorage.setItem(THEME_KEY, JSON.stringify(newMode));

    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDarkMode(newMode);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setDarkMode(newMode);
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div ref={ref} onClick={toggleDarkMode}>
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </div>
  );
}