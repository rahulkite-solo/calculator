import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import SideDescription from "@/components/SideDescription";

export default function Home() {
  return (
    <main style={page}>
      <h1 style={title}>Online Calculator</h1>
      <p style={subtitle}>
        Free scientific calculator with keyboard support. Fast, modern, and accurate.
      </p>

      <div style={toolSection}>
        <Calculator />
        <SideDescription />
      </div>

      <Footer />
    </main>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: "10px", // tighter spacing
  padding: "20px 20px 10px", // less top padding
  background: "transparent",
};

const title = {
  fontSize: "34px",
  fontWeight: "bold",
  color: "#111",
  margin: "0",
};

const subtitle = {
  color: "#555",
  maxWidth: "600px",
  textAlign: "center" as const,
  marginBottom: "10px",
};

const ad = {
  width: "100%",
  maxWidth: "728px",
  height: "90px",
  background: "var(--card-bg)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
};

const toolSection = {
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "1100px",
  margin: "10px auto 20px", // reduced vertical margin
  flexWrap: "wrap" as const, // mobile friendly
};

