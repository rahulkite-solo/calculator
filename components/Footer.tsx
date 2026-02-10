import Link from "next/link";

export default function Footer() {
  return (
    <footer style={footer}>
      <div style={inner}>
        <div style={links}>
          <Link href="/privacy" style={link}>Privacy Policy</Link>
          <Link href="/terms" style={link}>Terms of Service</Link>
          <Link href="/FAQ" style={link}>FAQ</Link>
          <Link href="/contact" style={link}>Contact</Link>
        </div>

        <p style={copyright}>
          © {new Date().getFullYear()} Online Calculator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const footer = {
  width: "100%",
  background: "#111",
  color: "white",
  marginTop: "10px",
};

const inner = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "20px",
  textAlign: "center" as const,
};

const links = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap" as const,
  marginBottom: "12px",
};

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};

const copyright = {
  fontSize: "13px",
  color: "#aaa",
};
