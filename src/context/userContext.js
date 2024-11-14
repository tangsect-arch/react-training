import { createContext, useContext } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const info = "This is a global value";

  return <userContext.Provider value={info}>{children}</userContext.Provider>;
};

export const useData = () => {
  const info = useContext(userContext);
  return info;
};
