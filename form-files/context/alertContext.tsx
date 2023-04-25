"use client";

import { createContext, useContext, useState } from "react";

const AlertContext = createContext<ContextValue>(undefined);

function AlertProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IState>({
    isOpen: false,
    type: "success",
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

function useAlertContext() {
  useContext(AlertContext);
}

export { AlertProvider, useAlertContext };
