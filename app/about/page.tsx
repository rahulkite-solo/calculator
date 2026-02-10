export default function About() {
  return (
    <section id="about" style={section}>
      <h2 style={heading}>About This Calculator</h2>

      <p>
        This free online calculator is designed for fast and accurate everyday
        calculations. Whether you need basic arithmetic or scientific
        functions, our calculator provides instant results in a clean and
        modern interface.
      </p>

      <p>
        It works directly in your browser without downloads or sign-ups.
        Optimized for speed and mobile devices, it’s perfect for students,
        professionals, and anyone who needs quick calculations.
      </p>
    </section>
  );
}

const section = {
  maxWidth: "800px",
  margin: "40px auto",
  padding: "20px",
  textAlign: "center" as const,
};

const heading = {
  fontSize: "28px",
  marginBottom: "20px",
};
