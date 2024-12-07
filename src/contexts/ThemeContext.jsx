import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "winter",
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("winter");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
