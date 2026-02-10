"use client";

import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import { motion } from "framer-motion";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [scientific, setScientific] = useState(false);

  function press(value: string) {
    setInput((prev) => prev + value);
  }

  function clear() {
    setInput("");
  }

  function calculate() {
    try {
      const result = evaluate(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  }

  // Keyboard support
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ("0123456789+-*/().".includes(e.key)) press(e.key);
      if (e.key === "Enter") calculate();
      if (e.key === "Backspace") setInput((p) => p.slice(0, -1));
      if (e.key === "Escape") clear();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [input]);

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ];

  const sciButtons = [
    "sin(","cos(","tan(",
    "sqrt(","log(","^"
  ];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      style={container}
    >
      <div style={screen}>{input || "0"}</div>

      <button style={toggle} onClick={() => setScientific(!scientific)}>
        {scientific ? "Basic Mode" : "Scientific Mode"}
      </button>

      {scientific && (
        <div style={sciGrid}>
          {sciButtons.map((b) => (
            <button key={b} style={button} onClick={() => press(b)}>
              {b}
            </button>
          ))}
        </div>
      )}

      <div style={grid}>
        {buttons.map((b) => (
          <button
            key={b}
            style={b === "=" ? equalBtn : button}
            onClick={() => (b === "=" ? calculate() : press(b))}
          >
            {b}
          </button>
        ))}

        <button style={clearBtn} onClick={clear}>
          Clear
        </button>
      </div>
    </motion.div>
  );
}

const container = {
  width: "360px",
  background: "#111",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
};

const screen = {
  background: "#000",
  color: "#00ff90",
  fontSize: "32px",
  padding: "16px",
  borderRadius: "10px",
  textAlign: "right" as const,
  marginBottom: "12px",
  minHeight: "50px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "10px",
};

const sciGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  marginBottom: "10px",
};

const button = {
  padding: "16px",
  fontSize: "18px",
  background: "#333",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const equalBtn = {
  ...button,
  background: "#0070f3",
};

const clearBtn = {
  gridColumn: "span 4",
  padding: "16px",
  background: "#ff4d4d",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
};

const toggle = {
  width: "100%",
  marginBottom: "10px",
  padding: "10px",
  background: "#444",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
