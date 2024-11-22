import { useState } from "react";
import "./App.css";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RghtComponent";

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="container">
      <LeftComponent setSelected={setSelected} selected={selected} />
      <RightComponent />
    </div>
  );
}

export default App;
