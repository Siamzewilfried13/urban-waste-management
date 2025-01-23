import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";

import App from "./homepage.jsx";
import AuthenticationPage from "./login";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Router>
        <Routes>
          {/* Route for Login/Signup */}
          <Route path="/" element={<AuthenticationPage />} />

          {/* Route for Home (Main App Page) */}
          <Route path="/home" element={<App />} />
        </Routes>
      </Router>
    </ClerkProvider>
  </StrictMode>
);
