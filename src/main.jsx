import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvder } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvder>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvder>
  </StrictMode>
);
