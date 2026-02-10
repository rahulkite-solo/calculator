export default function Terms() {
return ( <main style={page}> <h1 style={title}>Terms of Service</h1>

  <p style={text}>
    By using this website, you agree to the following terms and conditions.
  </p>

  <p style={text}>
    This calculator is provided for informational purposes only. We do not
    guarantee the accuracy of results. Use at your own risk.
  </p>

  <p style={text}>
    We are not responsible for any damages or losses resulting from the use
    of this website.
  </p>

  <p style={text}>
    We may update these terms at any time without notice.
  </p>
</main>
);
}

const page = {
minHeight: "100vh",
padding: "60px 20px",
maxWidth: "800px",
margin: "auto",
lineHeight: "1.6",
};

const title = {
fontSize: "32px",
fontWeight: "bold",
marginBottom: "20px",
};

const text = {
marginBottom: "12px",
color: "#333",
};
