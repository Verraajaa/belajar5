import { Link, Navigate } from "react-router";

function About() {
  const isLoggedId = false;

  if (!isLoggedId) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>About My Notes</h1>
      <p>This is my personal note-taking application.</p>

      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default About;