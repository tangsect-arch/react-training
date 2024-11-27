import React, { useEffect, useState } from "react";

export const ComponentA = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [dates, setDates] = useState(new Date().toString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDates(new Date().toString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <input type="hidden" value={dates}></input>
        <button type="submit">Submit</button>
      </form>
      {dates}
    </>
  );
};
