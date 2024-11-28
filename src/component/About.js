import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  function handleChange(e) {
    navigate(`/${e.target.value}`);
  }
  return (
    <>
      <div>About</div>
      <div>
        <h1>Selected</h1>
        <select onChange={handleChange}>
          <option value="home">Home</option>
          <option value="componenet1">Compoenet A</option>
          <option value="componenet2">Component B</option>
        </select>
      </div>
    </>
  );
};
