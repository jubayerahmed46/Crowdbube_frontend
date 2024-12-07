import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthContext>
  </StrictMode>
);
