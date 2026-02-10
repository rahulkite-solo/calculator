export default function SideDescription() {
  return (
    <div style={box}>
      <h2 style={heading}>Fast & Accurate Online Calculator</h2>

      <p>
        Our premium online calculator helps you perform quick and accurate
        calculations instantly. Designed with a modern interface, it supports
        basic and scientific operations for everyday use.
      </p>

      <p>
        Whether you're a student solving math problems or a professional
        working with numbers, this calculator delivers reliable performance
        without downloads or installations.
      </p>

      <ul style={list}>
        <li> Instant calculations</li>
        <li> Mobile friendly design</li>
        <li> Privacy focused (no data stored)</li>
        <li> Scientific functions included</li>
      </ul>
    </div>
  );
}

const box = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  width: "420px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const heading = {
  fontSize: "22px",
  marginBottom: "10px",
};

const list = {
  marginTop: "10px",
  paddingLeft: "20px",
};
