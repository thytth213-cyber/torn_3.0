import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  /*
    DEV COMMENTS:

    - This guard only checks for presence of a token in `localStorage`.
      That is fine for a simple demo, but it's not sufficient for production.

    - Improvements to consider:
      * Validate token expiry client-side if token is a JWT (decode payload
        and check `exp`) to avoid sending expired tokens to the server.
      * Prefer server-side verification: call an endpoint like
        `/api/auth/verify` and treat 200 as valid, 401 as invalid. This
        prevents using a forged/expired token stored in localStorage.
      * Avoid relying solely on localStorage for long-lived auth. If possible
        use httpOnly cookies set by the backend to mitigate XSS risks.
      * Provide a brief user-facing message when redirecting due to expired
        or invalid credentials so the user knows why they were sent to login.

    - Implementation note: decoding JWT client-side is only a UX optimization
      (it does not replace server validation). Always enforce auth on the
      server for protected APIs.
  */

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}