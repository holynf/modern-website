import { useEffect } from "react";
import assets from "../assets/assets";

const classNameText = "size-8.5 p-1.5 border border-gray-500 rounded-full";

function ThemeToggleBtn({ theme, setTheme }) {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme((prev) => prev || (prefersDarkScheme ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (!theme) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            alt="sun icon"
            className={classNameText}
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            alt="moon icon"
            className={classNameText}
          />
        )}
      </button>
    </>
  );
}

export default ThemeToggleBtn;
