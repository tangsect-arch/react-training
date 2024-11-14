import { useContext } from "react";
import { useData, userContext } from "../context/UserContext";

export const Component = () => {
  const info = useContext(userContext);
  return <div>{info}</div>;
};
