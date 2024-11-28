import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/component1")}>ComponentA</button>
      <button onClick={() => navigate("/component2")}>ComponentB</button>
    </>
  );
};
