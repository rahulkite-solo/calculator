export default function Privacy() {
  return (
    <main style={page}>
      <h1>Privacy Policy</h1>

      <p>
        This website uses Google AdSense and Google Analytics to display ads
        and analyze traffic. Third-party vendors, including Google, use
        cookies to serve ads based on your prior visits to this website.
      </p>

      <p>
        Google's use of advertising cookies enables it and its partners to
        serve ads to users based on their visit to this site and other sites
        on the Internet.
      </p>

      <p>
        Users may opt out of personalized advertising by visiting Google Ads
        Settings.
      </p>

      <p>
        We do not collect personal information directly. All analytics data
        is anonymous and used only to improve website performance.
      </p>

      <p>By using this website, you agree to this privacy policy.</p>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  padding: "40px 20px",
  maxWidth: "800px",
  margin: "auto",
};
