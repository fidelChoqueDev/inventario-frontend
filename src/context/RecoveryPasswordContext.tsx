import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

interface IValuesBySteps {
  email: string;
  answer: string;
  newPassword: string;
  question: string;
}

interface RecoveryPasswordContextType {
  valuesBySteps: IValuesBySteps;
  updateValuesBySteps: (nameValue: string, value: string) => void;
}

const initialValuesBySteps: IValuesBySteps = {
  email: "",
  answer: "",
  newPassword: "",
  question: "",
};

export const RecoveryPasswordContext =
  createContext<RecoveryPasswordContextType>({} as RecoveryPasswordContextType);

export function RecoveryPasswordContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [valuesBySteps, setValuesBySteps] =
    useState<IValuesBySteps>(initialValuesBySteps);
  const updateValuesBySteps = (nameValue: string, value: string) => {
    setValuesBySteps({ ...valuesBySteps, [nameValue]: value });
  };

  const values = {
    valuesBySteps,
    updateValuesBySteps,
  };

  return (
    <RecoveryPasswordContext.Provider value={values}>
      {children ?? <Outlet />}
    </RecoveryPasswordContext.Provider>
  );
}
