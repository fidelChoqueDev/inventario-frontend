import { createContext, useState } from "react";

interface AuthContextType {
  token: string | null;
  updateToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | null>(null);

  const updateToken = (token: string) => {
    setToken(token);
  };

  const values = {
    token,
    updateToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
