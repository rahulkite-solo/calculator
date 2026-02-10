import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";

export default function Home() {
return ( <main style={page}> <div style={ad}>Google Ad Banner</div>
  <h1 style={title}>Premium Online Calculator</h1>
  <p style={subtitle}>
    Free scientific calculator with keyboard support. Fast, modern, and accurate.
  </p>

  <Calculator />

  <div style={ad}>Google Ad Banner</div>

  <Footer />
</main>

);
}

const page = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: "30px",
  padding: "40px 20px",
  background: "transparent", // ← important
};

const title = {
fontSize: "36px",
fontWeight: "bold",
color: "#111",
};

const subtitle = {
color: "#555",
maxWidth: "600px",
textAlign: "center" as const,
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

