export default function FAQ() {
  return (
    <section id="faq" style={section}>
      <h2 style={heading}>Frequently Asked Questions</h2>

      <div style={faqItem}>
        <h3>Is this calculator free?</h3>
        <p>Yes. This calculator is completely free to use with no registration required.</p>
      </div>

      <div style={faqItem}>
        <h3>Does it support scientific functions?</h3>
        <p>Yes. You can perform advanced calculations including square roots and percentages.</p>
      </div>

      <div style={faqItem}>
        <h3>Is my data stored?</h3>
        <p>No. All calculations run in your browser. We do not store or track personal data.</p>
      </div>

      <div style={faqItem}>
        <h3>Can I use it on mobile?</h3>
        <p>Yes. The calculator is optimized for desktop and mobile devices.</p>
      </div>
    </section>
  );
}

const section = {
  maxWidth: "800px",
  margin: "40px auto",
  padding: "20px",
};

const heading = {
  fontSize: "28px",
  marginBottom: "20px",
  textAlign: "center" as const,
};

const faqItem = {
  marginBottom: "20px",
};
