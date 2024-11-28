import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => navigate("profile")}>Profile</button>
      <button onClick={() => navigate("component1")}>ComponentA</button>
      <button onClick={() => navigate("component2")}>ComponentB</button>
    </>
  );
};
