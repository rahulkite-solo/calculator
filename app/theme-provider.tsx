"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.body.style.background = dark ? "#0f172a" : "#f5f5f5";
    document.body.style.color = dark ? "white" : "black";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <button
        onClick={() => setDark(!dark)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: dark ? "#1f2937" : "#e5e7eb",
        }}
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {children}
    </>
  );
}
