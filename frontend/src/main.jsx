import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import CreateNewLinkPage from "./pages/CreateNewLinkPage";
import Links from "./pages/Links";
import Settings from "./pages/Settings";
import ConfirmationPage from "./pages/ConfirmationPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup-confirmation" element={<ConfirmationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/links" element={<Links />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create-new-link" element={<CreateNewLinkPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
