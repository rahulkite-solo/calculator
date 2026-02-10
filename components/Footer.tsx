import Link from "next/link";

export default function Footer() {
  return (
    <footer style={footer}>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms of Service</Link>
      <Link href="/contact">Contact</Link>
    </footer>
  );
}

const footer = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  padding: "20px",
  borderTop: "1px solid #ccc",
  marginTop: "40px",
};
