import { createContext, useContext, useState, type ReactNode } from "react";

interface RegisterContextType {
  isRegistered: string;
  setIsRegistered: (value: string) => void;
}

const RegisterContext = createContext<RegisterContextType | null>(null);

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [isRegistered, setIsRegistered] = useState("");

  return <RegisterContext.Provider value={{ isRegistered, setIsRegistered }}>{children}</RegisterContext.Provider>;
};

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("useHero must be used within HeroProvider");

  return context;
};
