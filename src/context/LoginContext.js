import { createContext } from "react";

export const LoginContext = createContext();

export function LanguageProvider({ children }) {
  return (
    <LoginContext.Provider value={{ username: "Login" }}>
      {children}
    </LoginContext.Provider>
  );
}
