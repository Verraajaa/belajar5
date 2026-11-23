import { Navigate } from "react-router";

function ProtectedRoute({ isLoggedId, children }) {
  if (!isLoggedId) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;