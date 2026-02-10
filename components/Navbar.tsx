import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={nav}>
      <Link href="/" style={logo}>
        Online Calculator
      </Link>

      <div style={menu}>
        <Link href="/" style={link}>Home</Link>
        <Link href="/about" style={link}>About</Link>
        <Link href="/contact" style={link}>Contact</Link>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 40px",
  background: "#111",
  color: "white",
  position: "sticky" as const,
  top: 0,
  zIndex: 1000,
};

const logo = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "white",
  textDecoration: "none",
};

const menu = {
  display: "flex",
  gap: "20px",
};

const link = {
  color: "#ddd",
  textDecoration: "none",
  fontSize: "15px",
};
